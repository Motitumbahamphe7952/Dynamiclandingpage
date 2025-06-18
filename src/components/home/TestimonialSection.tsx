import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import img from "../../assets/carousal6.png";

interface Testimonial {
  id: number;
  img: string;
  text: string;
  name: string;
  role: string;
  highlighted?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    img: img,
    text: "Interning here was a game-changer for my career. I was trusted with real responsibilities from day one, and the mentorship I received helped me grow both technically and personally.",
    name: "Abinash Tiwari.",
    role: " UI/UX design intern ",
  },
  {
    id: 2,
    img: img,

    text: "The culture here fostered creativity and innovation. I felt supported every step of the way.",
    name: "Sita Sharma.",
    role: " Frontend Developer Intern ",
  },
  {
    id: 3,
    img: img,

    text: "I worked on real projects and collaborated with talented mentors. An amazing experience overall.",
    name: "Ramesh Nepali.",
    role: " Backend Intern ",
  },
  {
    id: 4,
    img: img,

    text: "A unique learning journey—hands-on tasks, team collaboration, and genuine mentorship.",
    name: "Shyam Singh",
    role: " UI/UX design intern ",
  },
  {
    id: 5,
    img: img,

    text: "A unique learning journey—hands-on tasks, team collaboration, and genuine mentorship.",
    name: "Shyam Ram Singh",
    role: " UI/UX design intern ",
  },
  {
    id: 6,
    img: img,

    text: "A unique learning journey—hands-on tasks, team collaboration, and genuine mentorship.",
    name: "Shyam ",
    role: " UI/UX design intern ",
  },
  {
    id: 7,
    img: img,

    text: "A unique learning journey—hands-on tasks, team collaboration, and genuine mentorship.",
    name: " Singh",
    role: " UI/UX design intern ",
  },
];

const TestimonialCard: React.FC<{
  t: Testimonial;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}> = ({ t, onMouseEnter, onMouseLeave }) => (
  <div
    className="
      w-[440px] md:w-[360px] sm:w-[280px] xs:w-full 
      p-4 rounded-lg shadow-md bg-white  text-[#4682B4] flex-shrink-0 
      flex flex-col justify-between border border-gray-200 my-4
    "
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div>
      
      <p className="mt-4 text-gray-700 text-md leading-relaxed">{t.text}</p>
    </div>
    <div className="flex items-center gap-2 mt-4">
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex justify-between w-full">
        <p className="font-semibold text-sm">{t.name}</p>
        <p className="text-xs text-gray-600">{t.role}</p>
      </div>
    </div>
  </div>
);

const TestimonialSection: React.FC = () => {
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  const topTweenRef = useRef<gsap.core.Tween | null>(null);
  const bottomTweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;

    if (topRow && bottomRow) {
      // Top scrolls left
      const topTween = gsap.to(topRow, {
        x: () => `-${topRow.scrollWidth / 2}px`,
        duration: 60,
        ease: "none",
        repeat: -1,
      });
      topTweenRef.current = topTween;

      // Bottom scrolls right
      gsap.set(bottomRow, { x: -bottomRow.scrollWidth / 2 });
      const bottomTween = gsap.to(bottomRow, {
        x: 0,
        duration: 60,
        ease: "none",
        repeat: -1,
      });
      bottomTweenRef.current = bottomTween;

      return () => {
        topTween.kill();
        bottomTween.kill();
      };
    }
  }, []);

  const pauseTop = () => topTweenRef.current?.pause();
  const resumeTop = () => topTweenRef.current?.resume();

  const pauseBottom = () => bottomTweenRef.current?.pause();
  const resumeBottom = () => bottomTweenRef.current?.resume();

  return (
    <section className="py-16 h-full bg-white px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-14 mx-auto max-w-[785px] px-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Engineers of Innovation, Architects of{" "}
          <span className="text-[#4682B4]">Balance.</span>
        </h2>
        <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-[575px] mx-auto">
          Our services are designed to{" "}
          <span className="font-semibold text-black">grow your business</span>{" "}
          while respecting the people behind the code.
        </p>
      </div>

      {/* Top Row */}
      <div className="overflow-hidden mb-6 w-full">
        <div
          ref={topRowRef}
          className="flex gap-4 sm:gap-6 min-w-max will-change-transform hover:cursor-pointer"
          style={{ userSelect: "none" }} // optional: disables text selection while dragging
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <TestimonialCard
              key={`top-${index}`}
              t={t}
              onMouseEnter={pauseTop}
              onMouseLeave={resumeTop}
            />
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="overflow-hidden w-full">
        <div
          ref={bottomRowRef}
          className="flex gap-4 sm:gap-6 min-w-max will-change-transform hover:cursor-pointer"
          style={{ userSelect: "none" }}
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <TestimonialCard
              key={`bottom-${index}`}
              t={t}
              onMouseEnter={pauseBottom}
              onMouseLeave={resumeBottom}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
