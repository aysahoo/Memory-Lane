import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    setProgress((audio.currentTime / audio.duration) * 100 || 0);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = clickX / width;
    audio.currentTime = audio.duration * percentage;
  };

  useEffect(() => {
    const audio = audioRef.current;
    const onEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, []);

  return (
    <div className="w-full bg-black/30 backdrop-blur-md p-3 rounded-xl">
      <div className="flex items-center gap-3">
        <button
          onClick={togglePlayback}
          className="bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-white" />
          ) : (
            <Play className="w-4 h-4 text-white" />
          )}
        </button>

        <div
          ref={progressRef}
          className="flex-1 h-2 bg-white/20 rounded-full cursor-pointer relative"
          onClick={handleSeek}
        >
          <div
            className="h-full bg-white/70 rounded-full transition-all duration-150 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        className="hidden"
      />
    </div>
  );
};

export default AudioPlayer;
