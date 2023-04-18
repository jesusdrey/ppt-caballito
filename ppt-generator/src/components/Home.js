//Plain home page component
import React from 'react';
import YoutubeEmbed from './YoutubeVideo';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="App">
        <h1>Youtube Embed</h1>
          <YoutubeEmbed embedId="_LVSVGwlPKk" />
      </div>
    </div>
  );
}

export default Home;
