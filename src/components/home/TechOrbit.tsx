import { useEffect, useRef } from "react";
import gsap from "gsap";

// Import SVG icons
import Css from "../svg/Icon/Css";
import Fingma from "../svg/Icon/Fingma";
import Html from "../svg/Icon/Html";
import MongoDb from "../svg/Icon/MongoDb";
import NodeJs from "../svg/Icon/NodeJs";
import Postman from "../svg/Icon/Postman";
import Python from "../svg/Icon/Python";
import Reactjs from "../svg/Icon/Reactjs";
import Ruby from "../svg/Icon/Ruby";
import Sql from "../svg/Icon/Sql";
import Vue from "../svg/Icon/Vue";
import WebFlow from "../svg/Icon/WebFlow";

// Orbit layers with grouped icons
const orbits = [
  [NodeJs, Reactjs, Vue],
  [Ruby, Python, Sql, Css],
  [Html, Postman, Fingma, WebFlow, MongoDb],
];

// Base orbit radius in vw for responsiveness
const orbitBaseSizesVW = [16, 22, 28]; // vw units for base sizes

const TechOrbit: React.FC = () => {
  const orbitRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    orbitRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.to(ref, {
          rotate: 360,
          repeat: -1,
          duration: 20 + index * 5,
          ease: "linear",
          transformOrigin: "center center",
        });
      }
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-4 py-10">
      {/* Header */}
      <div className="text-center max-w-[90vw] sm:max-w-[520px] mt-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
          Our Engineering <span className="text-[#4682B4]">DNA.</span>
        </h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base md:text-lg font-normal max-w-[90vw] sm:max-w-[575px] mx-auto">
          Our services are designed to grow your business while respecting the{" "}
          <span className="font-semibold text-black">
            people behind the code.
          </span>
        </p>
      </div>

      <div className="relative" style={{ transform: "rotateZ(12deg)" }}>
        {/* Orbit Container with tilt */}
        <div
          className="relative w-[90vw] max-w-[520px] h-[90vw] max-h-[520px] sm:max-w-[1040px] sm:max-h-[716px] sm:w-[90vw] sm:h-[62vw] perspective-[1000px]"
          style={{ transform: "rotateX(55deg)" }} // Tilt only
        >
          {/* Orbit Circles */}
          {orbitBaseSizesVW.map((sizeVW, i) => (
            <div
              key={`circle-${i}`}
              className="absolute border-2 border-dashed border-[#4682B4] rounded-full"
              style={{
                width: `calc(${sizeVW}vw * 2)`,
                height: `calc(${sizeVW}vw * 2)`,
                top: `calc(50% - ${sizeVW}vw)`,
                left: `calc(50% - ${sizeVW}vw)`,
              }}
            />
          ))}

          {/* Center Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 rotate-x-0">
            <h3 className="font-semibold text-lg sm:text-xl md:text-2xl text-gray-800">
              Technologies <span className="text-[#4682B4]">Used.</span>
            </h3>
          </div>

          {/* Orbiting icons */}
          {orbits.map((OrbitIcons, orbitIndex) => {
            const radiusVW = orbitBaseSizesVW[orbitIndex];
            const offsetAngle = orbitIndex * 20;

            return (
              <div
                key={`orbit-${orbitIndex}`}
                ref={(el) => {
                  orbitRefs.current[orbitIndex] = el;
                }}
                className="absolute top-1/2 left-1/2"
                style={{ transform: "translate(-50%, -50%)" }}
              >
                {OrbitIcons.map((IconComponent, iconIndex) => {
                  const baseAngle =
                    (360 / OrbitIcons.length) * iconIndex + offsetAngle;
                  const angleInRad = (baseAngle * Math.PI) / 180;

                  // Calculate position using vw for responsiveness
                  const x = radiusVW * Math.cos(angleInRad);
                  const y = radiusVW * Math.sin(angleInRad);

                  return (
                    <div
                      key={`${orbitIndex}-${iconIndex}`}
                      className="absolute w-[12vw] max-w-[50px] h-[12vw] max-h-[50px] rounded-full bg-white p-2 flex items-center justify-center border border-gray-200 shadow-sm"
                      style={{
                        top: `calc(15% + ${y}vw)`,
                        left: `calc(15% + ${x}vw)`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <IconComponent />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechOrbit;
