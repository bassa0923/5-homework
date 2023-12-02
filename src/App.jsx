import './App.css'
import stairway from './assets/images/zep.jpg'
import like from './assets/images/like.png'
import dislike from './assets/images/dislike.png'
import share from './assets/images/share.png'
import clip from './assets/images/clip.png'
import dots from './assets/images/dots.png'


function App() {


  return (
    <>
      <div className='youtube-video'>
        <iframe 
          src='https://www.youtube.com/embed/IS6n2Hx9Ykk'
          className='video'
          width="1280" 
          height="960" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
        </iframe>
        <div className='youtube-description'>
          Led Zeppelin - Stairway To Heaven (NOT LIVE) (Perfect Audio)
        </div>
        <div className='youtube-user'>
          <img className='youtube-image' src={stairway}></img>
          <div className='user-info'>
            <div className='user-name'>badasstank</div>
            <div className='user-subscribers'>48.8k subscribers</div>
          </div>
          <button className='subscribe'>Subscribe</button>
          <div className='youtube-actions'>
            <button className='action-like'>
              <img src={like} className='like-icon'></img>
              <div className='like-amount'>328k</div>
            </button>
            <div className='hr'>
              <hr></hr>
            </div>
            <button className='action-dislike'>
              <img className='dislike-icon' src={dislike}></img>
            </button>
            <button className='action-share'>
              <img className='share-icon' src={share}></img>
              <div className='share-text'>Share</div>
            </button>
            <button className='action-clip'>
              <img className='clip-icon' src={clip}></img>
              <div className='clip-text'>Clip</div>
            </button>
            <button className='action-more'>
              <img className='more-icon' src={dots}></img>
            </button>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default App
