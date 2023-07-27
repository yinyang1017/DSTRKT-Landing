import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import CharacterCarousel from "./home.character";
import DribbleBar from "@/widgets/layout/dribbleBar";
const SvgImg = () => {
  return (
    <svg
      height="60"
      viewBox="0 0 1024 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H51.9249V137.601H0V0ZM133.015 0L166.712 71.3489L135.587 137.584H55.7068V115.171H93.969L114.582 71.3319L91.584 22.3967H55.7068V0H133.015Z"
        fill="white"
      />
      <path
        d="M208.347 0V31.2769L220.834 57.6109H300.118L323.116 106.359V137.618H270.987V106.359L258.704 80.0246H179.42L156.422 31.2769V0H208.347ZM205.655 97.2909L213.986 115.171H267.41V137.584H162.061V97.2909H205.655ZM323.116 0V40.3106H279.505L270.987 22.4308H212.112V0H323.116Z"
        fill="white"
      />
      <path
        d="M498.329 0V40.3106H454.717L446.199 22.4308H383.559L375.229 40.3106H331.617V0H498.329ZM440.85 25.1068V44.8104L441.055 137.584H388.925V25.1238H440.85V25.1068Z"
        fill="white"
      />
      <path
        d="M506.847 0H558.772V137.601H506.847V0ZM673.558 0V44.8274L652.741 89.0583H600.611L621.429 44.8274V22.4137H562.553V0H673.558ZM652.349 92.7911L673.558 137.601H621.429L610.918 115.188H562.553V92.774H652.349V92.7911Z"
        fill="white"
      />
      <path
        d="M682.076 0H734.001V137.601H682.076V0ZM827.561 92.774L848.771 137.584H796.641L786.13 115.171H737.766V92.757H827.561V92.774ZM848.771 0L806.744 89.0413H754.819L796.641 0H848.771Z"
        fill="white"
      />
      <path
        d="M1024 0V40.3106H980.389L971.871 22.4308H909.23L900.9 40.3106H857.289V0H1024ZM966.505 25.0897V44.8104L923.098 137.584H870.968L914.58 44.8104V25.1068H966.505V25.0897Z"
        fill="white"
      />
    </svg>
  );
};
export function Home() {
  return (
    <>
      <div className="h-screen">
        <div className="relative flex content-center items-center justify-center pt-32">
          <div className="absolute top-0 h-screen w-full bg-gradient-to-b from-[#6360C7] to-[#8782CD] bg-cover bg-center" />
          <div className="max-w-8xl container relative mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="ml-auto mr-auto flex w-full flex-col justify-items-center px-4 text-center lg:w-8/12">
                <SvgImg />
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-6 font-black uppercase"
                >
                  The new dimension on streetwear
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <CharacterCarousel />
      </div>
      <Footer />
    </>
  );
}

export default Home;
