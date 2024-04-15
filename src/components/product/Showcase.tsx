import Colors from "@/components/common/Colors";
import Images from "@/components/product/Images";
import { Button } from "@/components/ui/button";

const images = [
  "/assets/images/product/preview.png",
  "/assets/images/product/badge-1.png",
  "/assets/images/product/badge-2.png",
  "/assets/images/product/badge-3.png",
];

const colors = ["red", "green", "blue", "yellow", "orange"];

const Showcase = () => {
  return (
    <div className="grid grid-cols-1 gap-8 items-center mt-8 md:grid-cols-2">
      {/* Images */}
      <div className="">
        <Images images={images} />
      </div>

      {/* Description */}
      <div className="px-4">
        <h2 className="text-2xl font-bold">مبل راحتی</h2>
        <p className="text-sm md:text-base mt-2 lg:mt-4 max-w-md">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی
          با تولید ساد
        </p>
        <p className="font-bold mt-4 lg:mt-6">250</p>

        <div className="flex items-center gap-2 mt-4 lg:mt-6">
          <p>رنگ ها: </p>
          <Colors colors={colors} />
        </div>
        <div className="flex flex-col items-start gap-2 mt-4 lg:mt-6 lg:flex-row lg:gap-8">
          <Button className="rounded-none w-[200px]">افزودن به سبد</Button>
          <Button
            variant="outline"
            className="rounded-none bg-transparent w-[200px]"
          >
            افزودن به مورد علاقه
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
