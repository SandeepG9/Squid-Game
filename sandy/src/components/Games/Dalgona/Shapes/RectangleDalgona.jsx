import React, { useRef, useEffect, useState, useMemo } from "react";

const RectangleDalgona = () => {
  const canvasContainer = useRef(null);
  const [clickState, setClickState] = useState([]);
  const [win, setWin] = useState(false);
  useEffect(() => {
    const canvas = canvasContainer.current;

    if (!canvas) return; // Ensure canvas exists

    const context = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 400;

    // Rectangle dimensions
    const rectWidth = 320;
    const rectHeight = 180;

    // Calculate starting point to center the rectangle
    const startX = (canvas.width - rectWidth) / 2;
    const startY = (canvas.height - rectHeight) / 2;

    // Draw the rectangle
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(startX + rectWidth, startY); // Top side
    context.lineTo(startX + rectWidth, startY + rectHeight); // Right side
    context.lineTo(startX, startY + rectHeight); // Bottom side
    context.closePath(); // Connect back to the starting point
    context.strokeStyle = "rgb(116, 86, 4)";
    context.stroke();

    // Click event handler
    const handleClick = (event) => {
      // Get click position relative to the canvas
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Check if the click is on the line
      context.lineWidth = 11; // Match the line width used for drawing
      if (context.isPointInStroke(x, y)) {
        console.log("x : ", x, "y : ", y);
        if (y === 110 || y === 290 || (x > 40 && x < 41)) {
          setClickState((prevState) => {
            const newClick = [...prevState, Math.floor(x)];
            newClick.sort((a, b) => a - b);

            // Validate the array with every
            const isValid = newClick.every((value, index) => {
              if (index === newClick.length - 1) return true; // Skip last element for comparison
              return (
                newClick[0] === 40 &&
                newClick[newClick.length - 1] === 50 &&
                newClick[index + 1] - value <= 9
              );
            });

            console.log("Is valid:", isValid);
            return newClick;
          });

          context.fillStyle = "red";
          context.fillRect(x - 5, y - 5, 10, 10);
        } else {
          console.log("clicked outside ");
        }
      } else {
        console.log("Clicked outside the line.");
      }
    };
    canvas.addEventListener("click", handleClick);
    return () => {
      canvas.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasContainer}></canvas>
    </div>
  );
};

export default RectangleDalgona;
