import { useRef, useEffect } from 'react';
import './HorizontallyScrollable.css';

export const HorizontallyScrollable = ({ children, className = '' }) => {
  const scrollRef = useRef();
  const isDragging = useRef(false); // track if dragging is active

  const handleMouseDown = (evt) => {
    const oldX = evt.pageX;
    const scrollLeft = scrollRef.current.scrollLeft;
    isDragging.current = true; // set dragging to true

    // Disable text selection while dragging
    document.body.style.userSelect = 'none';

    const handleMouseMove = (evt) => {
      if (!isDragging.current) return;
      const newX = evt.pageX;
      const offset = newX - oldX;

      scrollRef.current.scrollLeft = scrollLeft - offset;
    };

    const handleMouseUp = () => {
      isDragging.current = false; // dragging ends
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);

      // Enable text selection again after dragging
      document.body.style.userSelect = 'auto';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Add touch support for mobile
  const handleTouchStart = (evt) => {
    const oldX = evt.touches[0].pageX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleTouchMove = (evt) => {
      const newX = evt.touches[0].pageX;
      const offset = newX - oldX;

      scrollRef.current.scrollLeft = scrollLeft - offset;
    };

    const handleTouchEnd = () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };

    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  };

  // const scroll = (direction) => {
  //   const scrollAmount = 100; // Amount to scroll per click
  //   scrollRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
  // };

  // Clean up event listeners when component unmounts
  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseDown);
      window.removeEventListener('touchmove', handleTouchStart);
      window.removeEventListener('touchend', handleTouchStart);
    };
  }, []);

  return (
    <div className="horizontally-scrollable-container">
      {/* <button onClick={() => scroll('left')} className="scroll-arrow left-arrow">
        &#9664; {/* Left arrow icon */}
      {/* </button> */} 
      <div
        className={`scrollable ${className}`}
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart} // Enable touch scrolling
        style={{ overflow: 'auto', cursor: 'grab' }} // Add grab cursor
      >
        {children}
      </div>
      {/* /* <button onClick={() => scroll('right')} className="scroll-arrow right-arrow">
        &#9654; {/* Right arrow icon */
      /* </button> */} 
      
    </div>
  );
};

export default HorizontallyScrollable;
