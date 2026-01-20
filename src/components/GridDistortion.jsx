import { useEffect, useRef } from "react";

function GridDistortion({
  imageSrc,
  grid = 10,
  mouse = 0.1,
  strength = 0.15,
  relaxation = 0.9,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = imageSrc;

    let width, height;
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      width = containerRef.current.offsetWidth;
      height = containerRef.current.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const cellW = width / grid;
      const cellH = height / grid;

      for (let y = 0; y < grid; y++) {
        for (let x = 0; x < grid; x++) {
          const dx = (mouseX - (x * cellW + cellW / 2)) * strength;
          const dy = (mouseY - (y * cellH + cellH / 2)) * strength;

          ctx.drawImage(
            img,
            (x * img.width) / grid,
            (y * img.height) / grid,
            img.width / grid,
            img.height / grid,
            x * cellW + dx * mouse,
            y * cellH + dy * mouse,
            cellW,
            cellH
          );
        }
      }

      requestAnimationFrame(draw);
    };

    img.onload = () => {
      resize();
      draw();
    };

    window.addEventListener("resize", resize);

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX +=
        (e.clientX - rect.left - mouseX) * relaxation;
      mouseY +=
        (e.clientY - rect.top - mouseY) * relaxation;
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [imageSrc, grid, mouse, strength, relaxation]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

export default GridDistortion;
