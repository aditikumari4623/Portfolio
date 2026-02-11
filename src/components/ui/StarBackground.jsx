import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      generateStars();
      generateMeteors();
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const count = Math.floor((window.innerWidth * window.innerHeight) / 12000);

    const newStars = Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 4 + 2,
    }));

    setStars(newStars);
  };

  const generateMeteors = () => {
    const newMeteors = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      x: Math.random() * 120 - 20,
      y: Math.random() * 60,
      delay: Math.random() * 8,

      // ⭐ slower meteors
      duration: Math.random() * 3 + 4, // 4s to 7s
    }));

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* ⭐ Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse-subtle"
          style={{
            width: `${star.size + 1}px`,
            height: `${star.size + 1}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            boxShadow: "0 0 6px 2px rgba(255,255,255,0.6)",
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {/* ☄️ Meteors */}
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute meteor animate-meteor"
          style={{
            top: `${meteor.y}%`,
            left: `${meteor.x}%`,
            transform: isMobile ? "rotate(200deg)" : "rotate(215deg)",
            animationDelay: `-${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        />
      ))}
    </div>
  );
};
