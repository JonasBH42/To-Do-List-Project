import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function DraggableBlock() {
  const [isDragging, setDragging] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const springProps = useSpring({
    left: coords.x,
    top: coords.y,
    immediate: isDragging,
  });

  const handleMouseDown = (event) => {
    setDragging(true);
    event.preventDefault();
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    setCoords({ x: event.clientX, y: event.clientY });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <animated.div
      style={{
        ...springProps,
        position: 'absolute',
        userSelect: 'none',
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      Drag me
    </animated.div>
  );
}

function Grid() {
  return (
    <div style={{ position: 'relative', width: 500, height: 500 }}>
      <DraggableBlock />
      <DraggableBlock />
      <DraggableBlock />
    </div>
  );
}

export default Grid;
