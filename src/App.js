import React, { useState } from 'react';
import './index.css';
import moment from 'moment';

function App() {
  const [displayT, setDisplayT] = useState();
  const duration = moment.duration( moment('2020-08-15 09:00').diff(moment()) );;
  setInterval(
    ()=>{
      setDisplayT(duration);
    },1000
  )
  return (
    <div
      style={{
        margin:5,
        position:'relative'
      }}
    >
      <img
        src={'./images/promo.jpg'}
        style={{
          width:'95vw',
          //maxWidth:800
        }}
        alt={'画像'}
      />
      <div
        style={{
          position:'absolute',
          color:'red',
          fontSize:'5.2vw',
          fontWeight:'bold',
          bottom: '12vw',
          left:'7.5vw',
          transform:'rotate(-15deg)'
        }}
      >
        あと{Math.floor(duration.asDays())}日
        <div
          style={{
            fontSize:'3vw'
          }}
        >
        {duration.hours()}時間
        {duration.minutes()}分
        {duration.seconds()}秒
        </div>
      </div>
      
    </div>
  );
}

export default App;
