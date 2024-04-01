import { ArrowRight } from "lucide-react";
import type { PropsWithChildren } from "react";

const HoverButtonReact = ({ children }: PropsWithChildren) => {
  return (
    <button className="group relative rounded-full border-2 py-2 pl-5">
      <span className="mr-12 overflow-clip bg-gradient-to-r from-white from-50% to-slate-700 to-50% bg-[length:200%_100%] bg-clip-text bg-[left] font-bold text-transparent delay-75 duration-[0.25s] group-hover:bg-[right]">
        {children}
      </span>
      <span className="relative">
        <ArrowRight className="absolute right-3 top-1 h-4 w-4 text-slate-700" />
      </span>
      <div className="absolute inset-0 -z-10 flex justify-end rounded-full">
        <span className="relative right-1 top-1 h-8 w-4 rounded-l-full bg-green-500 delay-[0.45s] duration-150 group-hover:right-0 group-hover:top-0 group-hover:h-10 group-hover:w-5 group-hover:delay-0 group-hover:duration-75"></span>
        <span className="h-10 w-0 bg-green-500 duration-500 group-hover:w-full group-hover:delay-75"></span>
        <span className="relative right-1 top-1 h-8 w-4 rounded-r-full bg-green-500 delay-[0.45s] duration-150 group-hover:right-0 group-hover:top-0 group-hover:h-10 group-hover:w-5 group-hover:delay-0 group-hover:duration-75"></span>
      </div>
    </button>
  );
};

export default HoverButtonReact;
