import { FOOTER_SOCIAL_ICONS, FOOTER_LINKS, FooterLink } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground ">
      <div className="grid grid-cols-1 sm:grid-cols-3 container py-4 sm:py-8">
        {/* Compoany */}
        <div className="flex flex-col justify-center items-center sm:items-start sm:justify-start text-center sm:text-start">
          <img
            className="w-[120px]"
            loading="lazy"
            src="/logo-light.png"
            alt="logo"
          />
          <div className="mt-3 mb-4">
            <p className="text-2xs sm:text-xs">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            </p>
            <p className="text-2xs sm:text-xs">
              لورم ایپسوم متن ساختگی با تولید سادگ
            </p>
            <p className="text-2xs sm:text-xs">لورم ایپسوم متن ساختگی با</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            {FOOTER_SOCIAL_ICONS.map((item) => (
              <a
                className="cursor-pointer"
                key={`footer-social-icon-${item.id}`}
              >
                <img src={item.src} alt={item.alt} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 items-center justify-center sm:justify-start gap-8 mt-6 sm:mt-0">
          <FooterLinks
            title={FOOTER_LINKS.information.title}
            links={FOOTER_LINKS.information.links}
          />
          <FooterLinks
            className="hidden sm:block"
            title={FOOTER_LINKS.element.title}
            links={FOOTER_LINKS.element.links}
          />
          <FooterLinks
            title={FOOTER_LINKS.help.title}
            links={FOOTER_LINKS.help.links}
          />
        </div>
      </div>
      {/* Copyright */}
      <p className="text-2xs sm:text-xs text-center my-2">
        کليه حقوق محصولات و محتوای اين سایت متعلق به Maynooth می باشد
      </p>
    </footer>
  );
};

type Props = { className?: string } & FooterLink;

const FooterLinks = ({ className, title, links }: Props) => {
  return (
    <div className={className}>
      <p className="text-sm sm:text-base font-bold text-center w-full mb-4">
        {title}
      </p>
      <div className="space-y-1">
        {links.map((link) => (
          <p
            className="text-xs sm:text-sm text-center w-full"
            key={`footer-link-${title}-${link.id}`}
          >
            {link.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
