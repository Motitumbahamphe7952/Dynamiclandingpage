import { useParams, useNavigate } from "react-router-dom";
import img from "../../assets/heroimage.jpg";
import carousel from "../../assets/carousal1.jpg";
import carousel1 from "../../assets/carousal2.jpg";
import carousel2 from "../../assets/carousal3.jpg";
import carousel3 from "../../assets/carousal4.png";
import carousel5 from "../../assets/carousal6.png";

const images = [
  { id: 1, src: img },
  { id: 2, src: carousel },
  { id: 3, src: carousel1 },
  { id: 4, src: carousel2 },
  { id: 5, src: carousel3 },
  { id: 6, src: carousel5 },
  { id: 7, src: img },
  { id: 8, src: img },
  { id: 9, src: img },
  { id: 10, src: img },
  { id: 11, src: img },
  { id: 12, src: img },
];

export default function CarouselDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentId = parseInt(id || "1", 10);
  const currentImage = images.find((img) => img.id === currentId);

  const handlePrevious = () => {
    if (currentId > 1) {
      navigate(`/carousel/${currentId - 1}`);
    }
  };

  const handleNext = () => {
    if (currentId < images.length) {
      navigate(`/carousel/${currentId + 1}`);
    }
  };

  if (!currentImage) {
    return <div className="text-center text-red-500">Image not found</div>;
  }

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">Carousel Image Details</h1>
      <p className="mt-2">You selected image ID: {currentImage.id}</p>

      <img
        src={currentImage.src}
        alt={`Slide ${currentImage.id}`}
        className="w-[377px] h-[200px] md:h-[480px] object-cover mx-auto mt-4"
      />

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentId === 1}
          className={`px-4 py-2 rounded bg-black text-white ${
            currentId === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-800"
          }`}
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={currentId === images.length}
          className={`px-4 py-2 rounded bg-black text-white ${
            currentId === images.length
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-800"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
