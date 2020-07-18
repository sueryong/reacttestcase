import React from 'react';
import Nav from './Nav';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import { fakeData } from './__test__/fakeData';
import { NormalModuleReplacementPlugin } from 'webpack';
import { searchYouTube } from "../searchYouTube";
import { YOUTUBE_API_KEY } from "../../config/youtube";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      videos:[],
      currentVideo: null
    }
  }

  render(){
    return(
      <div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer />
      </div>
      <div className="col-md-5">
        <VideoList videos={fakeData}/>
      </div>
    </div>
    );
  }
}

export default App;
