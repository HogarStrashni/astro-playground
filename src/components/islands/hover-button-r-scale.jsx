import { ArrowRight } from "lucide-react";

const HoverButtonReactScale = () => {
  return (
    <button className="group relative overflow-hidden rounded-full border-2 py-2 pl-5">
      <span className="mr-12 overflow-clip bg-gradient-to-r from-white from-50% to-slate-700 to-50% bg-[length:200%_100%] bg-clip-text bg-[left] font-bold text-transparent delay-75 duration-[0.25s] group-hover:bg-[right]">
        Hello World
      </span>
      <span className="relative">
        <ArrowRight className="absolute right-3 top-1 h-4 w-4 text-slate-700" />
      </span>
      <span className="absolute right-1 top-1 -z-10 h-8 w-8 rounded-full bg-green-500 duration-500 group-hover:scale-[10]"></span>
    </button>
  );
};

export default HoverButtonReactScale;
