import { Link } from "react-router-dom";

type Props = {
  imageContainerClassName?: string;
  imageUrl: string;
  title: string;
  price: number;
  badge?: number | string;
  hasAction?: boolean;
};

const ProductCard = ({
  imageContainerClassName,
  imageUrl,
  title,
  price,
  badge,
  hasAction = false,
}: Props) => {
  return (
    <Link className="block" to={"/products/1"}>
      <div
        className={`group relative h-[230px] lg:h-[400px] bg-border ${imageContainerClassName}`}
      >
        {badge && (
          <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-sm px-2">
            {badge}
          </div>
        )}
        <img
          className="w-full h-full object-cover"
          loading="lazy"
          src={imageUrl}
          alt={title}
        />
        {hasAction && (
          <div className="flex items-center gap-2 absolute bottom-2 left-[50%] translate-x-[-50%]">
            <Action imageUrl="/assets/icons/like.svg" imageAlt="like" />
            <Action imageUrl="/assets/icons/cart.svg" imageAlt="cart" />
            <Action imageUrl="/assets/icons/eye-open.svg" imageAlt="eye" />
          </div>
        )}
      </div>

      <h3 className="text-sm sm:text-base text-center mt-4">{title}</h3>
      <p className="font-bold sm:text-lg text-center"> {price}</p>
    </Link>
  );
};

type ActionProps = {
  imageUrl: string;
  imageAlt: string;
};

const Action = ({ imageUrl, imageAlt }: ActionProps) => {
  return (
    <button className="hidden group-hover:block size-8 p-2 cursor-pointer bg-background text-foreground hover:bg-primary hover:text-primary-foreground">
      <img
        className="w-full h-full object-cover"
        loading="lazy"
        src={imageUrl}
        alt={imageAlt}
      />
    </button>
  );
};

export default ProductCard;
