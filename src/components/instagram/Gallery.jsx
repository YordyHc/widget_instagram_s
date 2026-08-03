import { useMemo, useState } from "react";
import Carousel from "./Carousel";
import CarouselControls from "./CarouselControls";

function Gallery({ posts, onOpenPost }) {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = useMemo(() => {
    const groups = [];

    for (let i = 0; i < posts.length; i += 6) {
      groups.push(posts.slice(i, i + 6));
    }

    return groups;
  }, [posts]);

  const next = () => {
    setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
  };

  const previous = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  if (!pages.length) return null;
  return (
    <div className="relative mx-auto mt-4 mb-7 max-w-7xl">
      <Carousel posts={pages[currentPage]} onOpenPost={onOpenPost} />

      <CarouselControls
        hasPrevious={currentPage > 0}
        hasNext={currentPage < pages.length - 1}
        onPrevious={previous}
        onNext={next}
      />
    </div>
  );
}

export default Gallery;
