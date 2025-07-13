import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function FeatureCard({ imgSrc, videoSrc, heading1, heading2 }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const vidRef = useRef(null);

  const { context } = useGSAP(() => {}, { scope: cardRef.current });

  if (!videoSrc) {
    useGSAP(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.8,
        duration: 0.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: cardRef.current,
          toggleActions: "restart none none reverse",
          start: "top 100%",
        },
      });
    });
  }

  const handleMouseEnter = () => {
    if (vidRef.current && videoSrc) {
      context.add(() => {
        gsap.to(imgRef.current, { opacity: 0, duration: 0.5 });
        gsap.to(vidRef.current, { opacity: 1, duration: 0.5 });
        vidRef.current.currentTime = 0;
        vidRef.current.play();
      });
    }
  };
  const handleMouseLeave = () => {
    if (vidRef.current && videoSrc) {
      context.add(() => {
        gsap.to(imgRef.current, { opacity: 1, duration: 0.5 });
        gsap.to(vidRef.current, { opacity: 0, duration: 0.5 });
        vidRef.current.pause();
      });
    }
  };

  return (
    <div
      {...(videoSrc && imgSrc
        ? {
            "data-scroll": true,
            "data-scroll-speed": 0.5,
            "data-scroll-direction": "horizontal",
          }
        : "")}
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="card cursor-pointer"
    >
      <div className="img-container relative z-[4] overflow-hidden">
        <img
          ref={imgRef}
          src={imgSrc}
          alt="feature-img"
          className="w-full h-auto object-center object-cover relative z-[3]"
        />
        {videoSrc && (
          <video
            loop={true}
            controls={false}
            muted={true}
            ref={vidRef}
            src={videoSrc}
            className="absolute top-0 left-0 z-[2] "
          ></video>
        )}
        <div className="p-2">
          <h2 className="text-3xl h-fit uppercase font-freight tracking-tight whitespace-nowrap leading-7 ">
            {heading1}
          </h2>
          <h2 className="text-3xl h-fit capitalize font-freight tracking-tight whitespace-nowrap leading-6 ">
            {heading2}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
