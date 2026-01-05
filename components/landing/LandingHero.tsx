import React from "react";
import Image from "next/image";

export default function LandingHero() {
  return (
    <section aria-label="hero-section" className=" flex flex-col gap-10">
      {/* Tahir Image */}
      <div className="relative h-80 w-80 sm:h-120  sm:w-120 mx-auto">
        <Image
          src={"/images/TahirImage.png"}
          fill
          alt="tahir-image"
          className=" absolute"
        />
      </div>

      <div className=" space-y-2">
        <p className=" text-text-heading font-inter font-bold text-center text-2xl">
          Hello, I'm
        </p>

        <h1 className=" text-center font-bold text-5xl  text-text-heading leading-[170%]">
          Tahir Rafique
        </h1>
      </div>

      <p className="text-2xl font-inter text-center">
        A passionate Frontend Engineer with 11 years of experience in designing
        and developing web & mobile applications using tools and technologies
        like React, React Native, Figma, Blender etc.
      </p>


      <div>
        
      </div>
    </section>
  );
}
