import Colors from "@/components/common/Colors";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";

const ProductsFilters = () => {
  return (
    <div className="hidden sm:block space-y-6">
      <div className="flex gap-5 justify-between mt-10 text-base font-bold leading-6 text-center whitespace-nowrap text-zinc-600 max-md:mt-10">
        <div>رنگ ها</div>
        <div>_</div>
      </div>
      <div className="shrink-0 mt-2.5 h-px border border-solid bg-neutral-100 border-neutral-100" />
      {/* Colors */}
      <Colors
        colorComp="color2"
        className="grid grid-cols-4 justify-center gap-6 mt-4"
        colors={[
          "red",
          "green",
          "blue",
          "yellow",
          "skyblue",
          "black",
          "pink",
          "orange",
        ]}
      />

      <div className="flex gap-5 justify-between mt-10 text-base font-bold leading-6 text-center whitespace-nowrap text-zinc-600 max-md:mt-10">
        <div>فیلتر ها</div>
        <div>_</div>
      </div>
      <div className="shrink-0 mt-2.5 h-px border border-solid bg-neutral-100 border-neutral-100" />
      {/* Materil */}
      <div className="my-9 text-base font-bold leading-6 text-black">جنس</div>
      <RadioGroup className="space-y-6" defaultValue="metal">
        <div className="flex gap-5 justify-between text-base leading-6 text-center whitespace-nowrap text-neutral-400">
          <RadioGroupItem
            className="shrink-0 w-4 h-4 border border-solid rounded-none"
            value="metal"
            id="metal"
          />
          <div className="my-auto">فلزی</div>
        </div>
        <div className="flex gap-5 justify-between text-base leading-6 text-center whitespace-nowrap text-neutral-400">
          <RadioGroupItem
            className="shrink-0 w-4 h-4 border border-solid rounded-none"
            value="wooden"
            id="wooden"
          />
          <div className="my-auto">چوبی</div>
        </div>
        <div className="flex gap-5 justify-between text-base leading-6 text-center whitespace-nowrap text-neutral-400">
          <RadioGroupItem
            className="shrink-0 w-4 h-4 border border-solid rounded-none"
            value="fabric"
            id="fabric"
          />
          <div className="my-auto">پارچه</div>
        </div>
        <div className="flex gap-5 justify-between text-base leading-6 text-center whitespace-nowrap text-neutral-400">
          <RadioGroupItem
            className="shrink-0 w-4 h-4 border border-solid rounded-none"
            value="foam"
            id="foam"
          />
          <div className="my-auto">فوم</div>
        </div>
        <div className="flex gap-5 justify-between text-base leading-6 text-center whitespace-nowrap text-neutral-400">
          <RadioGroupItem
            className="shrink-0 w-4 h-4 border border-solid rounded-none"
            value="naturl-skin"
            id="naturl-skin"
          />
          <div className="my-auto">پوست طبیعی</div>
        </div>
        <div className="flex gap-5 justify-between text-base leading-6 text-center whitespace-nowrap text-neutral-400">
          <RadioGroupItem
            className="shrink-0 w-4 h-4 border border-solid rounded-none"
            value="synthetic-fiber"
            id="synthetic-fiber"
          />
          <div className="my-auto">الیاف مصنوعی</div>
        </div>
      </RadioGroup>

      {/* Price */}
      <div className="my-11 text-base font-bold leading-6  text-zinc-600 max-md:mt-10">
        قیمت
      </div>
      <Slider dir="rtl" defaultValue={[30]} max={300} step={1} />
      <div className="flex justify-between items-center mt-2">
        <span>0</span> <span>300</span>
      </div>

      <div className="mt-12 text-base font-bold leading-6 text-zinc-600 max-md:mt-10">
        جدید
      </div>
      <div className="mt-12 text-base font-bold leading-6 text-zinc-600 max-md:mt-10">
        تخفیف دار
      </div>
    </div>
  );
};

export default ProductsFilters;
