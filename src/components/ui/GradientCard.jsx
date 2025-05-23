import { useRef, useState } from "react";

const GradientCard = ({ children, colors }) => {
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 150, y: 150 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    const rect = cardRef.current.getBoundingClientRect();
    setPos({ x: rect.width / 2, y: rect.height / 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="max-w-[350px] h-full rounded-lg relative group"
    >
      <div
        className="absolute inset-0 z-20 transition-opacity duration-300 group-hover:opacity-100 opacity-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at ${pos.x}px ${pos.y}px,
            ${colors[0]} 0%,
            ${colors[1]} 60%)`,
          mixBlendMode: "multiply",
        }}
      />
      {children}
    </div>
  );
};

export default GradientCard;
