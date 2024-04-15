import { CATEGORIES } from "@/constants";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  return (
    <section className="hidden md:grid container p-0 grid-cols-4 my-20">
      {CATEGORIES.map((category) => (
        <Category
          key={`category-${category.id}`}
          title={category.title}
          imageUrl={category.imageUrl}
        />
      ))}
    </section>
  );
};

type CategoryProps = {
  title: string;
  imageUrl: string;
};

const Category = ({ title, imageUrl }: CategoryProps) => {
  const navigate = useNavigate();

  const navigateToCategory = () => navigate("/category/1");

  return (
    <div
      className={`relative min-h-[300px] flex justify-center items-center w-full h-full`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <img
        className="absolute inset-0 size-full bg-cover -z-10"
        src={imageUrl}
        alt="BG"
      />
      <div
        onClick={navigateToCategory}
        className="flex justify-center items-center w-[160px] h-[100px] bg-white/60"
      >
        {title}
      </div>
    </div>
  );
};

export default Categories;
