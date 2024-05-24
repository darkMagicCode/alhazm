import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const VideoFallback = (props) => {
  const { src, fallback, onPlayChange, ...rest } = props;
  const [videoSrc, setVideoSrc] = useState(src);
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setVideoSrc(src);
    setVideoError(false);
  }, [src]);
  useEffect(() => {
    if (onPlayChange === true) {

      handleVideoPlay()
    }
    else if (onPlayChange === false) {
      handleVideoPause()
    }
  }, [onPlayChange]);
  const handleVideoPlay = () => {
    setIsPlaying(true);

    videoRef.current.play(); // Manually start the video playback
  };

  const handleVideoPause = () => {
    setIsPlaying(false);

    videoRef.current.pause(); // Manually pause the video playback
  };

  return (
    <>
      {!videoError ? (
        <>
          <video
            {...rest}
            ref={videoRef}
            src={videoSrc}
            onError={() => setVideoError(true)}
            controls
            autoPlay={isPlaying}
          />
          {/* <button onClick={isPlaying ? handleVideoPause : handleVideoPlay}>
            {isPlaying ? 'Pause' : 'Play'}
          </button> */}
        </>
      ) : (
        <Image
          {...rest}
          src={fallback}
          alt="Fallback Image"
        />
      )}
    </>
  );
};

export default VideoFallback;
