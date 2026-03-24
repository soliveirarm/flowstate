import { useState } from "react"
import { Pause, Play } from "lucide-react"
import { RadioOption } from "./RadioOption"
import { Button } from "./Button"
import stations from "../utils/stations.json"
import YouTube from "react-youtube"
import { useTogglePlay } from "../hooks/useTogglePlay"
import { useChangeVolume } from "../hooks/useChangeVolume"

export const Radio = ({ isOpen }) => {
  const [selectedStation, setSelectedStation] = useState(stations[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [player, setPlayer] = useState()
  const [videoVolume, setVideoVolume] = useState(100)

  const onPlayerReady = (e) => {
    setPlayer(e.target)
    setIsPlaying(false)
  }
  const togglePlay = () => {
    if (!player) return

    if (isPlaying) player.pauseVideo()
    else player.playVideo()

    setIsPlaying((prev) => !prev)
  }

  const changeVolume = (e) => {
    setVideoVolume(e.target.value)
    player.setVolume(videoVolume)
  }

  useChangeVolume(isOpen, setVideoVolume, player, videoVolume)

  const opts = {
    width: "0",
    height: "0",
  }

  useTogglePlay(isOpen, togglePlay)

  return (
    <div
      className={`${isOpen ? "flex" : "hidden"}  flex-col gap-6 bg-gray-100 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-4 absolute bottom-18 left-8 max-w-md`}
    >
      <div>
        <h3 className="text-xl text-gray-900 dark:text-violet-100 font-bold mb-1">
          Radio
        </h3>
        <p>
          Credits:{" "}
          <a
            href="https://www.youtube.com/@LofiGirl/"
            target="_blank"
            className="text-violet-400 dark:text-violet-300 underline"
          >
            Lofi Girl
          </a>
        </p>
      </div>

      <YouTube
        videoId={selectedStation.id}
        onReady={onPlayerReady}
        opts={opts}
        style={{ position: "absolute" }}
      />

      <div className="grid grid-cols-2 gap-4">
        {stations.map((station) => (
          <RadioOption
            key={station.id}
            name={station.name}
            isSelected={station === selectedStation}
            onClick={() => setSelectedStation(station)}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Button
          className={!player ? "-disabled" : ""}
          Icon={!isPlaying ? Play : Pause}
          onClick={togglePlay}
          disabled={!player}
        />
        <input
          type="range"
          name="radio-volume"
          id="radio-volume"
          className="w-full cursor-pointer"
          value={videoVolume}
          onChange={changeVolume}
          onKeyUp={changeVolume}
        />
      </div>
    </div>
  )
}
