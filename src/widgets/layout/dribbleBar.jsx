import { Typography } from "@material-tailwind/react";

export default function DribbleBar({}) {
  const node = <About />;
  return (
    <div className="relative z-[10000] h-screen w-full bg-[#C9F24F] p-10">
      <button className="relative float-right uppercase text-black sm:hidden md:block">
        close
      </button>
      <section className="flex h-full flex-col items-center justify-evenly px-10 lg:py-32 xl:px-52">
        {node}
        <button className="sm:block md:hidden">
          <Typography variant="h3" className="uppercase">
            Back to Menu
          </Typography>
        </button>
      </section>
    </div>
  );
}
function Community() {
  return (
    <Typography variant="h3">
      CLOSE Connect with a passionate community of like-minded individuals who
      share your love for streetwear
    </Typography>
  );
}
function InsiderAccess() {
  return (
    <Typography variant="h3">
      Gain access to insider news, brand collaborations, and exclusive releases.
      We’ve built strong relationships with top streetwear brands to bring you
      insider perks and opportunities you won’t find anywhere else.
    </Typography>
  );
}

function ExclusiveDrops() {
  return (
    <Typography variant="h3">
      Say goodbye to missing out on limited-edition releases. We curate a
      carefully selected range of the most coveted streetwear drops, ensuring
      you stay ahead of the game.
    </Typography>
  );
}
function About() {
  return (
    <Typography variant="h3">
      Welcome to DSTRKT The new age streetwear marketplace. Step into DSTRKT
      where the latest streetwear drops become your quest, and each purchase is
      a triumph. We are transforming how you shop.
    </Typography>
  );
}
