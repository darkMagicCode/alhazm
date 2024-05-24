import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useState } from "react";
import { LiteYoutubeEmbed } from "../../node_modules/react-lite-yt-embed/dist/index";
import ImageFallback from "./ImageFallback";
import VideoFallback from "./VideoFallback";

function VideoPopupV({ id, thumbnail, width = 700, height = 394 }) {
  const [showPopup, setShowPopup] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayChange = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="animate relative  flex overflow-hidden rounded-2xl">
      {showPopup ? (
        <div>
          <LiteYoutubeEmbed id={id} defaultPlay={true} />
        </div>
      ) : (
        <div className="relative inline-block w-full">
          <VideoFallback
            className="w-full"
            src={thumbnail}
            width={width}
            height={height}
            alt=""
            onPlayChange={isVideoPlaying}
          />
          <button
            onClick={handlePlayChange}
            className="intro-play-btn absolute top-1/2 left-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-2xl text-body lg:h-[90px] lg:w-[90px]"
          >
            <FeatherIcon icon={isVideoPlaying ? "pause" : "play"} size={32} />
          </button>
        </div>
      )}
    </div>
  );
}

export default VideoPopupV;
