import { useState } from "react";

type Props = {
  images: string[];
};

const Images = ({ images }: Props) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-8 bg-hero-background rounded-tr-[70%] rounded-bl-[70%] px-4 h-[350px] lg:h-[500px]">
      <img
        loading="lazy"
        className="h-[240px] lg:h-[340px] object-contain"
        src={selectedImage}
        alt="selected image"
      />

      <div className="flex justify-center items-center gap-8">
        {images.map((imageUrl, index) => (
          <img
            loading="lazy"
            className="w-16 h-16 object-cover cursor-pointer p-2 border-primary border rounded-md"
            onClick={() => setSelectedImage(imageUrl)}
            key={`images-${index}`}
            src={imageUrl}
            alt={`image-${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Images;
