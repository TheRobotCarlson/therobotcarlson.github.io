import { useEffect, useState } from "react";
import images from "./images.json";

const slides = [
  "megan_brian_pitch_sm_2.jpg",
  "mirrorcube.png",
  "south_suburban_humane.jpg",
  "sec_pitch.jpeg",
  "guy_adami_2.jpg",
  "nootrax.jpg",
  "abu_simbel.jpg",
  "mexico.jpg",
];
export function Carousel() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setSlide((x) => (x + 1) % slides.length),
      6000,
    );
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="carousel">
      <img
        src={images[slides[slide] as keyof typeof images].src}
        srcSet={images[slides[slide] as keyof typeof images].srcSet}
        sizes="(max-width: 700px) 740px, 700px"
        width={images[slides[slide] as keyof typeof images].width}
        height={images[slides[slide] as keyof typeof images].height}
        fetchPriority="high"
        alt="Brian's activities"
      />
      <button
        className="prev"
        aria-label="Previous image"
        onClick={() => setSlide((slide + slides.length - 1) % slides.length)}
      >
        ‹
      </button>
      <button
        className="next"
        aria-label="Next image"
        onClick={() => setSlide((slide + 1) % slides.length)}
      >
        ›
      </button>
    </div>
  );
}
