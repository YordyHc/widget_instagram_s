import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function CarouselControls({ hasPrevious, hasNext, onPrevious, onNext }) {
  return (
    <>
      <button
        onClick={onPrevious}
        disabled={!hasPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#00000099] text-white py-4 px-3 shadow transition hover:bg-black disabled:hidden"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={onNext}
        disabled={!hasNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#00000099] text-white py-4 px-3 shadow transition hover:bg-black disabled:cursor-not-allowed disabled:hidden"
      >
        <FaChevronRight />
      </button>
    </>
  );
}

export default CarouselControls;
