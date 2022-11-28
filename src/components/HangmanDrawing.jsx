const HEAD = (
  <div className="w-14 h-14 border-8 border-neutral rounded-full absolute top-12 -right-6"></div>
);

const BODY = (
  <div className="w-2 h-32 absolute top-24 right-0 bg-neutral"></div>
);

const RIGHT_ARM = (
  <div className="w-24 h-2 absolute top-32 -right-24 origin-bottom-left -rotate-[30deg] bg-neutral"></div>
);

const LEFT_ARM = (
  <div className="w-24 h-2 absolute top-32 right-2 origin-bottom-right rotate-[30deg] bg-neutral"></div>
);

const RIGHT_LEG = (
  <div className="w-24 h-2 absolute top-[217px] -right-[89px] origin-bottom-left rotate-[60deg] bg-neutral"></div>
);

const LEFT_LEG = (
  <div className="w-24 h-2 absolute top-[215px] right-0 origin-bottom-right -rotate-[60deg] bg-neutral"></div>
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

const HangmanDrawing = ({ numberOfGuesses }) => {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="h-12 w-2 bg-neutral absolute right-0"></div>
      <div className="h-2 w-56 bg-neutral ml-[108px]"></div>
      <div className="h-96 w-2 bg-neutral ml-[108px]"></div>
      <div className="h-2 w-56 bg-neutral"></div>
    </div>
  );
};

export default HangmanDrawing;
