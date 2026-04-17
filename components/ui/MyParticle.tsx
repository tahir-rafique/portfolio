"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const MyParticle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "transparent",
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      detectRetina: true,
      fpsLimit: 120,
      particles: {
        color: {
          value: "#ff5c73",
        },
        move: {
          direction: "right",
          enable: true,
          outModes: {
            default: "out",
            bottom: "out",
            left: "out",
            right: "out",
            top: "out",
          },
          speed: 5,
          straight: false,
        },
        number: {
          value: 200,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 2,
        },
        links: {
          enable: false, // Links disabled in your config
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default MyParticle;
