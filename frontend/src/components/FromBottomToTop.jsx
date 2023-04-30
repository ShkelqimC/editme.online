import React, { useEffect, useState } from "react";

const FromBottomToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToTop = 250;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToTop) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    isVisible && (
      <div className="text-blue cursor-pointer z-50 hover:text-coral" onClick={goToBtn}>
        <span className="fixed bottom-10 right-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 bg-coral rounded-full hover:bg-blue "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </div>
    )
  );
};

export default FromBottomToTop;
