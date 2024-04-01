import { ArrowRight } from "lucide-react";

const HoverButtonReact = () => {
  return (
    <button className="group relative rounded-full border-2 py-2 pl-5">
      <span className="mr-12 overflow-clip bg-gradient-to-r from-white from-50% to-slate-700 to-50% bg-[length:200%_100%] bg-clip-text bg-[left] font-bold text-transparent delay-75 duration-[0.25s] group-hover:bg-[right]">
        Hello World
      </span>
      <span className="relative">
        <ArrowRight className="absolute right-3 top-1 h-4 w-4 text-slate-700" />
      </span>
      <div className="absolute inset-1 -z-10 flex justify-end overflow-hidden rounded-full delay-0 duration-200 group-hover:inset-0 group-hover:delay-100">
        <span className="h-full w-4 rounded-l-full bg-green-500"></span>
        <span className="h-full w-0 bg-green-500 duration-500 group-hover:w-full"></span>
        <span className="h-full w-4 rounded-r-full bg-green-500"></span>
      </div>
    </button>
  );
};

export default HoverButtonReact;
