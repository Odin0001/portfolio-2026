import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody.tsx";
import AnimatedTitle from "../animations/AnimatedTitle.tsx";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#181818] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"I WAS HERE BEFORE AI WAS A THING SINCE 2020."}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody text="They say in web development, you’re always a student. That’s just a polite way of saying the industry moves so fast your skills become obsolete during your lunch break. After escaping the grip of a Finance degree, I decided to self-teach my way into a life of 'Why is this undefined?' and 'It worked on my machine.' I traded the stability of banking for the thrill of a Next.js build failing for no apparent reason, and honestly, I’ve never felt more alive (or caffeinated)." />

            <AnimatedBody
              delay={0.1}
              text="My toolkit is a mix of frontend flair and backend logic—ranging from Next.js, React, and Vanilla JS to the darker corners of Node, Express, Django, and SQL. I’ve spent enough time with JWT and OAuth to develop a healthy sense of digital paranoia, and I treat Git like a confessional for my coding sins."
            />

            <AnimatedBody
              delay={0.2}
              text="I’ve managed to collect more certificates than I have hobbies, all while building projects that prove I can actually ship code, not just study it. I bring the precision of a banker to the chaotic world of Firebase and MongoDB, ensuring your project is handled with the kind of obsessive detail only a career-switcher can provide. If you want an everlastingly successful project with a banker precision, I’m your guy."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
