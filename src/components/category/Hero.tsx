import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="container p-0 mt-8 flex flex-col gap-4 sm:gap-6 lg:gap-8 justify-center items-center bg-[url('/assets/images/category/hero-image.png')] bg-center bg-no-repeat h-[220px] sm:h-[300px] lg:h-[460px] text-white">
      <h2 className="text-2xl lg:text-5xl">سالن پذیرایی</h2>
      <div className="flex items-center gap-2">
        <Link className="text-background hover:text-background" to="/">
          خانه
        </Link>
        <span>\</span>
        <Link
          className="text-background hover:text-background"
          to="/category/kitchen"
        >
          سالن پذیرایی
        </Link>
      </div>
    </section>
  );
};

export default Hero;
