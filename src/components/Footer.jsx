import React, { useRef } from "react";
import { IoArrowForward } from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

function Footer() {
  const footerHeadingRef = useRef();
  const buttonRef = useRef();
  useGSAP(() => {
    const ems = gsap.utils
      .toArray(footerHeadingRef.current.querySelectorAll("em"))
      .reverse();
    const spans = gsap.utils
      .toArray(footerHeadingRef.current.querySelectorAll("span"))
      .reverse();

    const buttonChars = gsap.utils.toArray(
      buttonRef.current.querySelectorAll("span")
    );

    gsap.set(spans, { opacity: 0 });
    gsap.set(ems, { opacity: 0 });
    gsap.set(buttonChars, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerHeadingRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
    tl.to(ems, { opacity: 1, duration: 0.7, stagger: 0.1 })
      .to(
        spans,
        { opacity: 1, duration: 0.7, delay: 0.2, stagger: 0.1 },
        "<+0.2"
      )
      .from(buttonRef.current, {
        y: 200,
        duration: 0.5,
      })
      .to(buttonChars, {
        opacity: 1,
        duration: 0.2,
        stagger: 0.1,
      });
  });
  return (
    <>
      <div className="w-full h-[80vh] flex justify-center items-center gap-6 flex-col">
        <h1
          ref={footerHeadingRef}
          className="text-[4vw] text-center text-black font-freight leading-[3vw] max-sm:text-4xl max-sm:leading-9 w-[75%] "
        >
          <em>We believe in the </em>
          <span>POWER</span> <em>to</em> <span>INTENTIONAL</span>{" "}
          <span>CREATIVITY.</span>
        </h1>
        <div className="w-fit h-fit overflow-hidden">
          <button
            ref={buttonRef}
            className="outline-none border-none px-4 py-1 rounded-md bg-gray-200 text-gray-500 cursor-pointer"
          >
            {"Patner with us".split("").map((word, i) => (
              <span key={i}>{word}</span>
            ))}
          </button>
        </div>
      </div>
      <footer className="p-4 text-base font-semibold font-sans bg-[#F5E31A] flex items-start justify-between ">
        <div className="max-sm:hidden">
          <p>New York City</p>
          <p>7:12 AM</p>
        </div>
        <div className=" flex flex-col gap-4 max-sm:w-full">
          {/* link container */}
          <div className="flex gap-6 items-start max-sm:flex-col max-sm:w-full">
            <div className="flex flex-col items-start gap-1">
              <a className="capitalize " href="#">
                Projects
              </a>
              <a className="capitalize " href="#">
                Ideas
              </a>
              <a className="capitalize " href="#">
                About
              </a>
            </div>
            <div className="flex flex-col items-start gap-1">
              <a className="capitalize " href="#">
                Instagram
              </a>
              <a className="capitalize " href="#">
                Linkedin
              </a>
              <a className="capitalize " href="#">
                X(twitter)
              </a>
            </div>
            <div className="flex flex-col items-start gap-1">
              <a className=" " href="#">
                hello@works.studio
              </a>
              <p className="capitalize ">@2025</p>
            </div>
            {/* link container */}
          </div>
          {/* input box */}
          <div className="relative">
            <input
              placeholder="Enter Email to Subscribe"
              type="email"
              className="w-full border-b-[1px] border-black p-1 placeholder:text-base placeholder:text-black outline-none"
            />
            <IoArrowForward className="text-lg absolute top-1/2 right-2 -translate-y-1/2" />
          </div>
          {/* input box */}
        </div>
      </footer>
    </>
  );
}

export default Footer;
