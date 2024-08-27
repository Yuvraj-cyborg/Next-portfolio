import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundBeams } from "./ui/BackgroundBeam";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36">
      <div className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
        <BackgroundBeams />
      </div>
      {/* Content Layer */}
      <div className="relative z-20 flex justify-center my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            A not so ordinary Web Developer
          </p>
          <TextGenerateEffect
            words="Building Web, brand, and Content."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Yuvraj, ready to dive in my realm of creations.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
