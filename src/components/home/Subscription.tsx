import { Button } from "@/components/ui/button";

const Subscription = () => {
  return (
    <section className="relative container flex justify-center items-center my-20 bg-[url('/assets/images/home/subscribe-image.png')] bg-center bg-no-repeat min-h-[500px]">
      <div className="absolute inset-0 size-full bg-white/50"></div>
      <div className="relative z-10 flex flex-col justify-center items-center text-center max-w-xl">
        <h2 className="self-center text-3xl font-medium ">تخفیف 30 درصدی</h2>
        <p className="mt-8 mb-12 text-base leading-6 text-center max-w-md">
          با عضویت در لیست پستی ما، برای اولین خرید خود 30٪ تخفیف دریافت کنید و
          برخی از بهترین معاملات ممکن را دریافت کنید.
        </p>

        <div className="flex border rounded-full  h-10 pr-4">
          <input
            type="email"
            placeholder="ایمیل خود را وارد کنید."
            className="bg-transparent block w-[200px] md:w-[320px] h-full outline-none placeholder:text-black/50"
          />
          <Button className="block rounded-full h-full" size="lg">
            ارسال
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
