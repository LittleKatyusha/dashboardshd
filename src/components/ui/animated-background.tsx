"use client";

import { useCallback, useState, useEffect } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const [isClient, setIsClient] = useState(false);
  const [particlePositions, setParticlePositions] = useState<Array<{left: string, top: string, delay: number}>>([]);

  useEffect(() => {
    setIsClient(true);
    // Generate fixed positions for particles to avoid hydration mismatch
    const positions = Array.from({ length: 20 }, (_, i) => ({
      left: `${(i * 5) % 100}%`,
      top: `${(i * 7) % 100}%`,
      delay: i * 0.2
    }));
    setParticlePositions(positions);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Particles loaded callback
  }, []);

  // Don't render on server side to prevent hydration mismatch
  if (!isClient) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Enhanced Particles Background */}
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: {
                enable: true,
              },
            },
            modes: {
              push: {
                quantity: 6,
              },
              repulse: {
                distance: 250,
                duration: 0.6,
              },
            },
          },
          particles: {
            color: {
              value: ["#3b82f6", "#6366f1", "#8b5cf6", "#a855f7", "#06b6d4", "#10b981"],
            },
            links: {
              color: "#3b82f6",
              distance: 200,
              enable: true,
              opacity: 0.3,
              width: 1.5,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 120,
            },
            opacity: {
              value: 0.4,
              animation: {
                enable: true,
                speed: 1,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
              animation: {
                enable: true,
                speed: 2,
                sync: false,
              },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      {/* Animated Gradient Mesh */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(99, 102, 241, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 60% 40%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)
            `,
          }}
          animate={{
            background: [
              `
                radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 60%, rgba(99, 102, 241, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 60% 40%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)
              `,
              `
                radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 60% 40%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 40% 60%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)
              `,
              `
                radial-gradient(circle at 40% 20%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 60% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 20% 60%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 80% 40%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)
              `,
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Orbs with Trails */}
      <div className="absolute inset-0">
        {/* Large floating orbs */}
        <motion.div
          className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-2xl"
          animate={{
            x: [0, 150, 0],
            y: [0, -100, 0],
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-20 right-20 w-36 h-36 bg-gradient-to-br from-indigo-400/30 to-pink-600/30 rounded-full blur-2xl"
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
            scale: [1, 0.8, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute bottom-20 left-20 w-56 h-56 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-full blur-2xl"
          animate={{
            x: [0, 180, 0],
            y: [0, -120, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/30 to-indigo-600/30 rounded-full blur-2xl"
          animate={{
            x: [0, -150, 0],
            y: [0, 60, 0],
            scale: [1, 0.9, 1],
            rotate: [0, -360, -720],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Medium floating orbs */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-300/40 to-indigo-500/40 rounded-full blur-xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <motion.div
          className="absolute top-2/3 right-1/3 w-28 h-28 bg-gradient-to-br from-purple-300/40 to-pink-500/40 rounded-full blur-xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 70, 0],
            rotate: [0, -180, -360],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/2 w-20 h-20 bg-gradient-to-br from-cyan-300/40 to-blue-500/40 rounded-full blur-xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 360, 720],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        {/* Small pulsing orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-12 h-12 bg-blue-400/50 rounded-full blur-lg"
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-indigo-400/50 rounded-full blur-lg"
          animate={{
            x: [0, -35, 0],
            y: [0, 20, 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3.2,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-14 h-14 bg-purple-400/50 rounded-full blur-lg"
          animate={{
            x: [0, 25, 0],
            y: [0, -35, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.8,
          }}
        />

        <motion.div
          className="absolute top-3/4 right-1/2 w-8 h-8 bg-cyan-400/50 rounded-full blur-lg"
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8,
          }}
        />
      </div>

      {/* Animated Light Beams */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0,
          }}
        />
        
        <motion.div
          className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Animated Geometric Patterns */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-blue-400/30 rotate-45"
          animate={{
            rotate: [45, 405, 45],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0,
          }}
        />

        <motion.div
          className="absolute top-3/4 right-1/4 w-12 h-12 border-2 border-purple-400/30 rotate-45"
          animate={{
            rotate: [45, -315, 45],
            scale: [1, 0.8, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-indigo-400/30 rotate-45"
          animate={{
            rotate: [45, 405, 45],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Pulsing Center Light */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-15">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Particles Overlay */}
      <div className="absolute inset-0">
        {particlePositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: position.left,
              top: position.top,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + (i % 3) * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: position.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}