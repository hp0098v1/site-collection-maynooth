import Colors from "@/components/common/Colors";
import { Button } from "@/components/ui/button";

const Offer = () => {
  return (
    <section className="hidden md:block bg-hero-background mt-8">
      <div className="container grid grid-cols-2 py-8">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold">محصولی جذاب</h2>
          <p className="text-xs md:text-sm leading-loose line-clamp-2 w-[200px] mt-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی
            با تولید سادگ
          </p>
          <p className="font-bold sm:text-lg mt-8">400</p>
          <Colors className="mt-8" colors={["red", "blue", "green"]} />
          <div className="flex gap-4 mt-8">
            <Button variant="outline" className="bg-transparent rounded-none">
              افزودن به سبد خرید
            </Button>
            <Button variant="ghost">بقیه محصولات</Button>
          </div>
        </div>
        <div className="relative w-full h-full">
          <img
            className="absolute top-12 left-1/2 translate-x-[-50%] w-[400px]"
            loading="lazy"
            src="/assets/images/home/sale-50.png"
            alt="sale 50"
          />
          <img
            className="relative z-10 object-cover min-h-[400px]"
            loading="lazy"
            src="/assets/images/home/sale-50-image.png"
            alt="Sofa"
          />
        </div>
      </div>
    </section>
  );
};

export default Offer;
