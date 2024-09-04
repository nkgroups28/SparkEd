'use client';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-lvh sticky top-0 left-0 right-0 bottom-0">
      <div className="cube">
        <div className="cube-face cube-face-front"></div>
        <div className="cube-face cube-face-back"></div>
        <div className="cube-face cube-face-left"></div>
        <div className="cube-face cube-face-right"></div>
        <div className="cube-face cube-face-top"></div>
        <div className="cube-face cube-face-bottom"></div>
      </div>
    </div>
  );
};

export default Loader;
