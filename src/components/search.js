import React from 'react'
import '../css/search.css'
import API_KEY from '../API_KEY.js'
import { createClient } from 'pexels';
import ReactPlayer from 'react-player'

class SearchBar extends React.Component {

  state = {keyword: '', type: ''};

  onFormSubmit = (event) =>{
    event.preventDefault();
    window.location = `/search-result?query=${this.state.keyword}&type=${this.props.type}`
  }
  async componentDidMount(){
    const type = this.props.type
    if (type === "image"){
      this.setState({type: "Images"})
    }
   if (type === "video"){
      this.setState({type: "Videos"})
    }  
  }

  handleType = () => {
    if (this.state.type === "Images"){
      return <img src="https://picsum.photos/1920/1080?random=1" alt="" />
    }
    if (this.state.type === "Videos"){
      // return (<ReactPlayer className="background-video" url="https://static.pexels.com/lib/videos/free-videos.mp4" playing={true} loop={true} muted={true}/>)
      return
   
    }
  }

  render() {
    
    return (
      <div className="container-fluid p-0">
      <div className="image-container">
        {this.handleType()}
        <span className="overlay"></span>
        <div className="search-container">
          <div className="heading">
            <h1 className="heading-title">Pixellry</h1>
            <p className="heading-desc">
              Explore the world of {this.state.type}&nbsp;<i
                className="fas fa-camera-retro"
              ></i
              >.
            </p>
          </div>
          <form onSubmit={this.onFormSubmit} className="search-form">
            <input
              className="form-control"
              type="search"
              placeholder="Search free high-resolution images"
              aria-label="Search"
              value={this.state.keyword}
              onChange={(e)=>this.setState({keyword: e.target.value})}
              required
            />
            <button className="btn btn-primary my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
    );
  }
}

export default SearchBar;