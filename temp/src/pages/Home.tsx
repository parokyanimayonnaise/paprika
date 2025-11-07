import { useRef, useState } from "react";
import FadeIn from "../components/FadeIn";
import { CircleSvg } from "../assets/CircleSvg";
import { PlaySvg } from "../assets/PlaySvg";
import VideoBackground from "../components/VideoBackground";

type Music = {
  title: string;
  music: string;
};

const Home = () => {
  const listOfMusics: Music[] = [
    {
      title: "1man2cupBT",
      music: "1man2cupBT.wav",
    },
    {
      title: "CreepinBT",
      music: "CreepinBT.wav",
    },
    {
      title: "I_LikeBT",
      music: "I_LikeBT.wav",
    },
    {
      title: "InterludeBT",
      music: "InterludeBT.wav",
    },
    // * samples
    {
      title: "MdusaBT",
      music: "MdusaBT.wav",
    },
    {
      title: "NonsenseBT",
      music: "NonsenseBT.wav",
    },
    {
      title: "PullUpBT",
      music: "PullUpBT.wav",
    },
    {
      title: "rickyyaoBT",
      music: "rickyyaoBT.wav",
    },
    {
      title: "RockBT",
      music: "RockBT.wav",
    },
    {
      title: "SnakeneckBT",
      music: "SnakeneckBT.wav",
    },
    {
      title: "TrashBeatBT",
      music: "TrashBeatBT.wav",
    },
    {
      title: "WakeUpBT",
      music: "WakeUpBT.wav",
    },
    {
      title: "YesPleaseBT",
      music: "YesPleaseBT.wav",
    },
  ];

  const [musicPlaying, setMusicPlaying] = useState<Music | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const onButtonClick = (music: Music) => {
    let isSameMusic = false;
    if (musicPlaying) {
      isSameMusic = musicPlaying?.title === music.title;
    }

    if (isSameMusic) {
      // Stop current audio
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setMusicPlaying(null);
    } else {
      // Stop any audio that might be playing
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      // Create and play new audio
      audioRef.current = new Audio(`/sounds/${music.music}`);
      audioRef.current.play();

      setMusicPlaying(music);
    }
  };

  return (
    <div className="flex flex-col h-screen min-h-[30rem] bg-[linear-gradient(to_bottom,_#ef4444_10%,_#f97316_40%,_#1a0000_90%)]">
      <div className="flex flex-col justify-center items-center gap-24">
        <VideoBackground
          source="/smoke-orig.webm"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <VideoBackground
          source="/fire-orig.webm"
          className="absolute bottom-0 w-full h-1/2 object-cover opacity-50"
        />

        <div className="flex flex-col gap-16 text-white p-16 rounded-4xl z-20">
          <FadeIn direction="down">
            <p className="text-4xl font-semibold text-center">Yes, Please!</p>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-4 max-w-[calc(8*140px)] mx-auto">
            {listOfMusics.map((music, index) => (
              <FadeIn delay={index * 0.2} key={index}>
                <div className="hover:bg-black/25 rounded-4xl px-8 py-4 flex flex-col gap-4 items-center w-[140px]">
                  <div
                    className="relative flex justify-center items-center select-none"
                    onClick={() => onButtonClick(music)}
                  >
                    {musicPlaying?.title === music.title ? (
                      <CircleSvg className="absolute z-20" />
                    ) : (
                      <PlaySvg className="absolute z-20" />
                    )}
                    <img
                      src="/paprika-orig.png"
                      alt="Wave Image"
                      width={100}
                      height={50}
                    />
                  </div>
                  <p className="text-sm">{music.title}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
