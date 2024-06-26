"use client";


import { useMediaQuery } from "@uidotdev/usehooks";
import React from "react";
import YouTube, { YouTubeEvent } from "react-youtube";


const HomeEntrepreneurVideo = () => {
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");
  const onPlayerReady = (event: YouTubeEvent<any>) => {
    event.target.pauseVideo();
  };

  const opts = {
    height: isMobile ? "200" : "540",
    width: isMobile ? "340" : "1080",
    playerVars: {
      controls: 0,
      autoplay: 0,
      rel: 0,
      modestbranding: 1,
      fs: 1,
      cc_load_policy: 0,
      iv_load_policy: 3,
      start: 0,
      end: 0,
      playsinline: 1,
    },
  };

  return <YouTube videoId="oknvOlg6EeE" opts={opts} onReady={onPlayerReady} />;
};

export default HomeEntrepreneurVideo;
