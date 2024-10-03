import React, { useState } from 'react';
import Star from "@/components/Star";

const StarRating = () => {
  const [rating, setRating] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number|null>(null);

  return (
    <section className="flex flex-col items-center">
      <div>
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            tabIndex={0}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setRating(index + 1)}>
            <Star
              starId={index}
              marked={
                hoveredIndex != null
                  ? index <= hoveredIndex
                  : index < rating
              }
            />
          </span>
        ))}
    </div>
      <input
        type="submit"
        className="mt-10 h-10 px-6 font-semibold rounded-md bg-black text-white"
        value="Submit review"
      />
    </section>
  );
};

StarRating.displayName = "StarRating";
export default StarRating;
