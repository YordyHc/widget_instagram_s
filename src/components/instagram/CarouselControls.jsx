import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function CarouselControls(hasPrevious, hasNext, onPrevious, onNext) {
  return (
    <>
      <button
        onClick={onPrevious}
        disabled={!hasPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={onNext}
        disabled={!hasNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <FaChevronRight />
      </button>
    </>
  );
}

export default CarouselControls;
