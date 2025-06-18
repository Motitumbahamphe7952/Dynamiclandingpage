import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeartBackground = ({ className = "" }) => {
  const heartRef = useRef<SVGSVGElement | null>(null);
  const stop1 = useRef<SVGStopElement | null>(null);
  const stop2 = useRef<SVGStopElement | null>(null);

  useEffect(() => {
    gsap.to(heartRef.current, {
      scaleX: 1.1,
      scaleY: 0.9,
      duration: 0.3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    const colors = [
      ["#3b82f6", "#f97316"],
      ["#f97316", "#3b82f6"],
      ["#3b82f6", "#f97316"],
    ];

    let current = 0;
    const intervalId = setInterval(() => {
      const next = (current + 1) % colors.length;
      gsap.to(stop1.current, { stopColor: colors[next][0], duration: 1 });
      gsap.to(stop2.current, { stopColor: colors[next][1], duration: 2 });
      current = next;
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`absolute inset-x-0 top-0 flex justify-center pointer-events-none z-0 ${className}`}
    >
      <svg
        ref={heartRef}
        viewBox="0 0 512 512"
        className="w-[800px] h-[800px] opacity-20 drop-shadow-[0_0_40px_rgba(0,0,0,0.25)]"
        style={{ transform: "rotate(25deg)" }}
      >
        <defs>
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" ref={stop1} stopColor="#3b82f6" />
            <stop offset="100%" ref={stop2} stopColor="#f97316" />
          </linearGradient>
        </defs>
        <path
          d="M471.7 73.3c-54.5-46.4-136-38.3-186.4 13.7L256 116.7l-29.3-29.7C176.4 35 95 27 40.3 73.3c-62.6 53.3-66.1 149.8-9.9 207.4l193.5 199.8c6.2 6.4 14.4 9.6 22.6 9.6s16.4-3.2 22.6-9.6l193.5-199.8c56.2-57.6 52.7-154.1-9.9-207.4z"
          fill="url(#heartGradient)"
        />
      </svg>
    </div>
  );
};

export default HeartBackground;
