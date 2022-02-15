import React from 'react'
import {saveAs} from 'file-saver'
import '../css/image-features.css'
import jwt_decode from 'jwt-decode'
import axios from 'axios'

class ImageFeatures extends React.Component {
  state = {
    className: "",
    photographer_name: "",
    like_className: "save-btn",
    like_status: false
  }

  componentDidMount(){
    try{
    const jwt = localStorage.getItem('token')
    const user = jwt_decode(jwt)
    this.setState({user}) 
  }catch(ex){
    
  }
    const type = this.props.type
    if (type == "image"){
      let className = "features-box features-image"
      this.setState({className, photographer_name: this.props.item.photographer})   
    }
    if (type == "video"){
      let className = "features-box features-video"
      this.setState({className, photographer_name: this.props.item.user.name})   
    }
  }
  
  saveFile = () => {
    saveAs(
      this.props.downloadLink,
      "download.jpg"
    )
  }

  likeImg = () => {
    try{
        if(this.state.like_status === false){
          this.setState({like_status: true})
          this.setState({like_className: "save-btn like-color"})
          this.handleLike()   
        }else{
          this.setState({like_status: false})
          this.setState({like_className: "save-btn"})
          this.deleteLike()
        }
        
      }
      catch(ex){ 
        alert("You are not logged in! Please Login First.")
      }
  }

  // Delete like from DB

  deleteLike = async () =>{
      try{
        let response = await axios.post('http://localhost:3005/unlike', {
          user_id: this.state.user.id,
          img_id: this.props.item.id
        })
        console.log(response) 
    }
      catch(error) {
        console.log(error);
      };
    }

  // Insert like data into DB
  handleLike = async () =>{
    try{
      let response = await axios.post('http://localhost:3005/like', {
        user_id: this.state.user.id,
        img_id: this.props.item.id
      })
      console.log(response) 
  }
    catch(error) {
      console.log(error);
    };
  }

  setImageId = () =>{
    document.getElementById("image-id").value = this.props.item.id
  }

  render() {
    
    return (
        <div className={this.state.className}>
          <div className="user-pofile">
            <h6 className="name">{this.state.photographer_name}</h6>
          </div>
          <div className="features">
            <div className="download">
            <button className="download-btn" onClick={this.saveFile}>
              <i className="far fa-arrow-alt-circle-down"></i>
            </button>
            </div>
            <div className="collection">
            <button type="button" className="coll-btn" 
            onClick={this.setImageId}
            data-toggle="modal" data-target="#exampleModal">
              <i className="far fa-plus-square"></i>
            </button>
            </div>
            <div className="favourite">
            <button className={this.state.like_className} onClick={this.likeImg}>
              <i className="fas fa-heart"></i>
            </button>
            </div>
          </div>
        </div>
      )
  }
}

export default ImageFeatures;