type Props = {
  imageContaineeClassName?: string;
  imageUrl: string;
  title: string;
  price: number;
};

const ProductCard = ({
  imageContaineeClassName,
  imageUrl,
  title,
  price,
}: Props) => {
  return (
    <div>
      <div
        className={`relative h-[230px] lg:h-[400px] bg-border ${imageContaineeClassName}`}
      >
        <img
          className="w-full h-full object-cover"
          loading="lazy"
          src={imageUrl}
          alt={title}
        />
      </div>

      <h3 className="text-sm sm:text-base text-center mt-4">{title}</h3>
      <p className="font-bold sm:text-lg text-center"> {price}</p>
    </div>
  );
};

export default ProductCard;
