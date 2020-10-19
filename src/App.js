import React, { useState, useEffect } from "react";
import "./index.css";
import moment from "moment";

function App() {
  const [displayT, setDisplayT] = useState();
  const duration = moment.duration(moment("2020-10-24 18:00").diff(moment()));
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayT(duration);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [duration]);

  return (
    <>
      <div
        style={{
          margin: 5,
          position: "relative",
        }}
      >
        <img
          src={"https://res.cloudinary.com/dgonrnjmq/image/upload/v1594471036/cap-baseball/649/promo_skm7rj.jpg"}
          style={{
            width: "95vw",
            //maxWidth:800
          }}
          alt={"画像"}
        />
        <div
          style={{
            position: "absolute",
            color: "red",
            fontSize: "5.2vw",
            fontWeight: "bold",
            bottom: "12vw",
            left: "7.5vw",
            transform: "rotate(-15deg)",
          }}
        >
          あと{Math.floor(duration.asDays())}日
          <div
            style={{
              fontSize: "3vw",
            }}
          >
            {zeroPadding(duration.hours(), 2)}時間
            {zeroPadding(duration.minutes(), 2)}分
            {zeroPadding(duration.seconds(), 2)}秒
          </div>
        </div>
      </div>
      <div>
        <img
          style={{
            width: "95vw",
          }}
          src={
            "https://res.cloudinary.com/dgonrnjmq/image/upload/v1593469234/cap-baseball/649/NLAA9WRrS4mHjlnZCUUb_ow54ij.png"
          }
        />
      </div>
    </>
  );
}

export default App;

function zeroPadding(NUM, LEN) {
  return (Array(LEN).join("0") + NUM).slice(-LEN);
}
