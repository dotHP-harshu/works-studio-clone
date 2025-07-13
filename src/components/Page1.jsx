import React, { useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

gsap.registerPlugin(useGSAP);

function Page1() {
  const yellowBack = useRef();
  const mobileMenu = useRef();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  useGSAP(() => {
    const ems = gsap.utils
      .toArray(yellowBack.current.querySelectorAll("em"))
      .reverse();
    const spans = gsap.utils
      .toArray(yellowBack.current.querySelectorAll("h1 span"))
      .reverse();
    const navBar = yellowBack.current.querySelector("nav");
    gsap.set(ems, { opacity: 0 });
    gsap.set(spans, { opacity: 0 });

    const tl = gsap.timeline();
    tl.to(spans, {
      opacity: 1,
      duration: 0.7,
      delay: 0.1,
      stagger: 0.1,
      ease: "back",
    })
      .to(ems, {
        opacity: 1,
        duration: 0.7,
        delay: 0.1,
        stagger: 0.1,
        ease: "back",
      })
      .to(yellowBack.current, {
        height: "55vh",
        background: "white",
        duration: 0.7,
        ease: "power3.inOut",
      })
      .to(navBar, {
        top: 0,
        duration: 0.7,
        ease: "power1.out",
      });
  });

  const { context } = useGSAP(() => {}, { scope: mobileMenu.current });

  const showMobileMenu = () => {
    const height = window.innerHeight - 36;
    setIsOpenMenu(true);
    context.add(() => {
      gsap.to(mobileMenu.current, {
        height: `${height}px`,
        opacity: 1,
        duration: 0.5,
      });
    });
  };
  const hideMobileMenu = () => {
    setIsOpenMenu(false);
    context.add(() => {
      gsap.to(mobileMenu.current, {
        opacity: 0,
        height: 0,
        duration: 0.5,
      });
    });
  };

  return (
    <div
      ref={yellowBack}
      className="yellow section w-full h-screen bg-[#F5E31A] flex items-center justify-center px-[5vw] relative"
    >
      <nav className="w-full fixed -top-full left-0 p-2 px-[2vw] flex justify-between items-center z-[50] bg-white">
        <div className="logo">
          <h1 className="text-sm font-extrabold tracking-tighter">WORK</h1>
        </div>
        <div className="icons hidden max-xs:flex items-center justify-center">
          {!isOpenMenu ? (
            <button
              className="border-none bg-transparent outline-none text-base font-semibold cursor-pointer"
              onClick={showMobileMenu}
            >
              Menu
            </button>
          ) : (
            <button
              className="border-none bg-transparent outline-none text-base font-normal cursor-pointer"
              onClick={hideMobileMenu}
            >
              Close
            </button>
          )}
        </div>
        {/* mobile menu */}
        <div
          ref={mobileMenu}
          className="hidden max-xs:flex fixed bottom-0 left-0 bg-white h-0 w-full z-[10] flex-col justify-between  p-4 opacity-0"
        >
          <ul className="w-full flex flex-col justify-start items-end">
            <li>
              <a
                className="text-base font-sans hover:text-black transition-colors duration-300 tracking-tight font-semibold"
                href="#"
              >
                Project
              </a>
            </li>
            <li>
              <a
                className="text-base font-sans hover:text-black transition-colors duration-300 tracking-tight font-semibold"
                href="#"
              >
                Ideas
              </a>
            </li>
            <li>
              <a
                className="text-base font-sans hover:text-black transition-colors duration-300 tracking-tight font-semibold"
                href="#"
              >
                About
              </a>
            </li>
          </ul>
          <ul className="w-full flex justify-between items-start">
            <li>
              <a
                className="text-base font-sans hover:text-black transition-colors duration-300 tracking-tight font-semibold"
                href="#"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="text-base font-sans hover:text-black transition-colors duration-300 tracking-tight font-semibold"
                href="#"
              >
                About
              </a>
            </li>
          </ul>
          {/* mobile menu */}
        </div>
        {/* desktop menu */}
        <ul className="menu flex gap-4 max-xs:hidden">
          <li>
            <a
              href="#"
              className="text-base font-sans hover:text-black transition-colors duration-300 tracking-tight font-semibold"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-base font-sans text-gray-500 hover:text-black transition-colors duration-300 tracking-tight font-semibold"
            >
              Ideas
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-base font-sans text-gray-500 hover:text-black transition-colors duration-300 tracking-tight font-semibold"
            >
              About
            </a>
          </li>
        </ul>
        {/* desktop menu */}
      </nav>
      <h1 className="text-[4vw] text-center text-black font-freight leading-[3vw] max-sm:text-4xl max-sm:leading-9 ">
        <em>We are a</em> <span> CREATIVE</span>
        <em>studio</em> <span> DEDICATED</span>
        <em>to</em> <span> CULTURAL ADVANCEMENT</span>
        <em>through</em> <span> STRATEGY</span>
        <em>and</em> <span> DESIGN.</span>
      </h1>
    </div>
  );
}

export default Page1;
