import { ArrowRight } from "lucide-react";
import { useRef, type PropsWithChildren, useState } from "react";

const HoverButtonReactScale = ({ children }: PropsWithChildren) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const width = buttonRef.current && (buttonRef.current?.clientWidth - 16) / 16;

  const [hover, setHover] = useState(false);

  return (
    <button
      ref={buttonRef}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`group relative min-h-10 min-w-10 overflow-hidden rounded-full border-2 ${children ? "py-2 pl-5" : "box-content"}`}
    >
      {children && (
        <span
          className={`overflow-clip bg-gradient-to-r from-white from-50% to-slate-700 to-50% bg-[length:200%_100%] bg-clip-text bg-[left] font-bold text-transparent delay-75 duration-[0.25s] group-hover:bg-[right] ${children ? "mr-12" : undefined}`}
        >
          {children}
        </span>
      )}
      <ArrowRight className="absolute right-3 top-3 h-4 w-4 text-slate-700" />
      <span
        className="absolute right-1 top-1 -z-10 h-8 w-8 rounded-full bg-green-500"
        style={{
          transform: `scale(${hover ? width : 1})`,
          transitionDuration: "500ms",
        }}
      ></span>
    </button>
  );
};

export default HoverButtonReactScale;
