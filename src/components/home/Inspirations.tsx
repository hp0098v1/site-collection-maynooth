import { Button } from "@/components/ui/button";

const Inspirations = () => {
  return (
    <div className="container mt-8">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        ایده های الهام بخش
      </h2>
      <p className="text-xs md:text-sm leading-loose line-clamp-2 w-[200px] mx-auto mt-2 mb-8 text-center">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با
        تولید سادگ
      </p>
      <div className="max-md:space-y-8">
        <Inspiration
          title=" میز های ترند"
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگ"
          category="هال"
          imageUrl="/assets/images/home/inspirarion-ideas/living-room.png"
          imageAlt="Living room"
        />
        <Inspiration
          title="تخت خواب های ترند"
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگ"
          category="اتاق خواب"
          imageUrl="/assets/images/home/inspirarion-ideas/bed-room.png"
          imageAlt="Bedroom"
          isReverse={true}
        />
        <Inspiration
          title="بهترین میز های ناهارخوری"
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگ"
          category="سالن پذیرایی"
          imageUrl="/assets/images/home/inspirarion-ideas/dining.png"
          imageAlt="Dining"
        />
        <Inspiration
          title="لوازم محبوب آشپزخانه"
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگ"
          category="آشپزخانه"
          imageUrl="/assets/images/home/inspirarion-ideas/kitchen.png"
          imageAlt="Kitchen"
          isReverse={true}
        />
      </div>
    </div>
  );
};

type InspirationProps = {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt?: string;
  isReverse?: boolean;
};

const Inspiration = ({
  title,
  description,
  category,
  imageUrl,
  imageAlt,
  isReverse = false,
}: InspirationProps) => {
  return (
    <div
      className={`flex flex-col-reverse ${
        isReverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-4`}
    >
      <div className="flex-1 flex flex-col items-center my-auto max-md:max-w-full">
        <h2 className="self-center text-3xl font-medium text-black">{title}</h2>
        <p className="mt-4 text-base italic leading-6 text-center text-zinc-600 max-w-md">
          {description}
        </p>
        <Button variant="outline" className="bg-transparent rounded-none mt-6">
          مشاهده محصولات
        </Button>
      </div>

      <div className="flex-1 flex overflow-visible relative flex-col justify-center items-end text-2xl leading-6 ">
        <img
          src={imageUrl}
          alt={imageAlt || "No Alt"}
          className={`object-cover w-[80%] h-full ${
            isReverse ? "ml-auto" : "mr-auto"
          }`}
        />
        <div
          className={`absolute size-[min(50%,_250px)] flex items-center justify-center bg-white/60 shadow-lg ${
            isReverse ? "left-0" : "right-[0]"
          } `}
        >
          {category}
        </div>
      </div>
    </div>
  );
};

export default Inspirations;
