import React from 'react';
import  './style.css'
import sampleImg from './img/testImg.png'
function App() {
  return (
    <div className="App">
      <header>
        <div  className={'logo'}>
          <span>유뷰트 아이콘</span>
          <span>Youtube</span>
        </div>
        <div className={'icons'}>
          <span className={'fa-search'}>검색아이콘</span>
          <span>점세개</span>
        </div>
      </header>
      <section  className={'player'}>
        {/*<video src={VideoSource1} controls={true} type={'video/webm'}></video>*/}
        <video autoPlay={true} controls>
          <source src="https://ak.picdn.net/shutterstock/videos/1056029879/preview/stock-footage-smart-city-aerial-drone-footage-hologram-information-arches-forming-during-network-communication.webm" type="video/webm"/>
        </video>
      </section>
      <div className={'infoAndUpNext'}>
        <section  className={'info'}>
        <div className={'metadata'}>
          <ul className={'hashtags'}>
            <li>#DreamCoding</li>
            <li>#DreamCoders</li>
            <li>#Ellie</li>
          </ul>
          <div className={'titleAndButton'}>
            <span className={'title'}>Clone Coding : Youtube Movile Website 유튜브 모바일 웹사이트 따라 만들기 | 프론테엔드 개발자 입문편 : HTML
                  , CSS, JAVASCRIPT 드림코딩과 함꼐하는 프론트엔드 실전 입문편
            </span>
            <button className={'moreBtn'}>다운</button>
          </div>
            <span className={'views'}>1M vies 1month ago</span>
          <div>
            <ul className={'action'}>
              <li><button><i className={'active'}>따봉</i><span>1k</span></button></li>
              <li><button><i>반봉</i><span>0</span></button></li>
              <li><button><i>공유</i><span>Share</span></button></li>
              <li><button><i>추가</i><span>Save</span></button></li>
              <li><button><i>깃발</i><span>Report</span></button></li>
            </ul>
          </div>
          <div className={'channel'}>
            <div className={'metadata'}>
              <img src={sampleImg}/>
              <div className={'info'}>
                <span className={'name'}>드림코딩 By 엘리</span>
                <span className={'subscribers'}>1M subcribers</span>
              </div>
            </div>
            <button className={'subscriber'}>SUBSCRIBE</button>
          </div>
        </div>
        <div></div>
        <div></div>
      </section>
        <section  className={'upNext'}>
        <span className={'title'}>Up next</span>
        <ul>
          <li className={'item'}>
            <div className={'img'}><img src={sampleImg}/></div>
            <div className={'info'}>
              <span className={'title'}>asdfsfsdfashfskajdfhsdkjfhsakjhsdkljfhsadfhsadf
              sadfsdafsadfsadf
              sadfasdfa
              sdfasdfsadfsadfasd
              fsadfasdfas
              sadf
              asfsad
              fsadfasdfasasgsgasd</span>
              <span className={'name'}>드림코딩 By 엘리</span>
              <span className={'views'}>78K views</span>
            </div>
            <button className={'moreBtn'}>버튼</button>
          </li>
          <li className={'item'}>
            <div className={'img'}><img src={sampleImg}/></div>
            <div className={'info'}>
              <span className={'title'}>asdfsfsdfashfskajdfhsdkjfhsakjhsdkljfhsadfhsadf
                sadfsdafsadfsadf
                sadfasdfa
                sdfasdfsadfsadfasd
                fsadfasdfas
                sadf
                asfsad
                fsadfasdfasasgsgasd</span>
              <span className={'name'}>드림코딩 By 엘리</span>
              <span className={'views'}>78K views</span>
            </div>
            <button className={'moreBtn'}>버튼</button>
          </li>
          <li className={'item'}>
            <div className={'img'}><img src={sampleImg}/></div>
            <div className={'info'}>
              <span className={'title'}>asdfsfsdfashfskajdfhsdkjfhsakjhsdkljfhsadfhsadf
                sadfsdafsadfsadf
                sadfasdfa
                sdfasdfsadfsadfasd
                fsadfasdfas
                sadf
                asfsad
                fsadfasdfasasgsgasd</span>
              <span className={'name'}>드림코딩 By 엘리</span>
              <span className={'views'}>78K views</span>
            </div>
            <button className={'moreBtn'}>버튼</button>
          </li>



        </ul>
      </section>
      </div>
    </div>
  );
}

export default App;
