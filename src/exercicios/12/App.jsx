import React from 'react';
import Header from './Header';
import VideoPlayer from './VideoPlayer';
import VideoMenu from './VideoMenu';
import VideoDescription from './VideoDescription';
import RelatedVideos from './RelatedVideos';
import Comments from './Comments';
import AdArea from './AdArea';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <div className="main-content">
          <VideoPlayer />
          <VideoMenu />
          <VideoDescription />
          <AdArea />
          <RelatedVideos />
          <Comments />
        </div>
      </main>
    </div>
  );
}

export default App;
