import React from "react";
import Image from "next/image";
import Button from "../shared/Button";

export default function LandingHero() {
  return (
    <section aria-label="hero-section" className=" flex flex-col gap-10">
      {/* Tahir Image */}
      <div className="relative h-80 w-80 sm:h-120  sm:w-120 mx-auto">
        <Image
          src={"/images/TahirImage.png"}
          fill
          alt="tahir-image"
        />
      </div>

      <div className=" space-y-2">
        <p className=" text-primary font-inter font-bold text-center text-2xl">
          Hello, I'm
        </p>

        <h1 className=" text-center font-black text-5xl  text-text-heading leading-[170%]">
          Tahir Rafique{" "}
          <span className="ml-2 border-l-3 border-primary animate-[pulse_1s_infinite]" />
        </h1>
      </div>

      <p className="text-2xl font-inter text-center">
        A passionate Frontend Engineer with 3 years of experience in designing
        and developing web & mobile applications using tools and technologies
        like React, React Native, Figma, Blender etc.
      </p>

      <div className=" flex justify-center items-center gap-4">
        <Button text="Download CV" variant="secondary" />
        {/* <Button text="Download CV" /> */}
      </div>
    </section>
  );
}
