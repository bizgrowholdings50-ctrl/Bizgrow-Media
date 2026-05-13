import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  const importantLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/our-media-services" },
    { name: "Case Studies", href: "/blogs" },
    { name: "Booking", href: "/contact-us" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  const servicesLinks = [
    { name: "Studio Production", href: "/studio-production" },
    { name: "Authority Builder", href: "/authority-builder" },
    { name: "Content Engine", href: "/content-engine" },
    { name: "Growth Engine", href: "/growth-engine" },
  ];

  const socialMedia = [
    {
      Icon: FaFacebookF,
      href: "https://www.facebook.com/profile.php?id=61577206013332",
      label: "Facebook",
    },
    {
      Icon: FaTiktok,
      href: "https://www.tiktok.com/@bizgrowholdings",
      label: "TikTok",
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/bizgrowdigital_uk/",
      label: "Instagram",
    },
    {
      Icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/bizgrowdigital/posts/?feedView=all",
      label: "LinkedIn",
    },
    {
      Icon: FaYoutube,
      href: "https://www.youtube.com/@bizgrowholdings/featured",
      label: "YouTube",
    },
  ];

  return (
    <footer className="relative bg-[#12066a] text-white pt-24 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#997819]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-10">
          {/* Column 1: Brand Identity */}
          <div className="space-y-2 text-left">
            <div className="relative -mt-10 inline-block">
              <Image
                src="/footer-logo.png"
                alt="BizGrow Digital Logo"
                width={150}
                height={80}
                className="brightness-110 -ml-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                priority
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-medium max-w-sm">
              <span className="text-white font-bold">BizGrow Media</span> is a
              results-driven media solutions company. We equip businesses with
              modern web development and data-driven marketing strategies to
              achieve measurable growth.
            </p>
            <div className="text-2xl font-black text-white tracking-tighter uppercase  ">
              BIZGROW <span className="text-[#997819]">MEDIA</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="text-left">
            <h3 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8">
              Navigation
            </h3>
            <ul className="space-y-4">
              {importantLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-bold uppercase tracking-widest flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[2px] bg-[#997819] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Expertise (Services) */}
          <div className="text-left">
            <h3 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8">
              Expertise
            </h3>
            <ul className="grid grid-cols-1 gap-4">
              {servicesLinks.slice(0, 8).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-[0.15em]"
                  >
                    <span className="w-0 group-hover:w-6 h-[2px] bg-[#997819] mr-0 group-hover:mr-3 transition-all duration-500 ease-out"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-500">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact + Map + Social */}
          <div className="space-y-8 text-left">
            <div>
              <h3 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8">
                Get In Touch
              </h3>
              <div className="space-y-5">
                <a href="tel:+447903332433" className="flex items-center group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#997819] transition-all duration-500 mr-4 border border-white/10 group-hover:border-transparent">
                    <FaPhoneAlt className="text-sm group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-gray-300 text-sm font-bold group-hover:text-white transition-colors">
                    +44 7903 332433
                  </span>
                </a>
                <a
                  href="mailto:info@bizgrow-digital.co.uk"
                  className="flex items-center group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#997819] transition-all duration-500 mr-4 border border-white/10 group-hover:border-transparent">
                    <FaEnvelope className="text-sm group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-gray-300 text-sm font-bold group-hover:text-white transition-colors truncate">
                    info@bizgrowstudios.co.uk
                  </span>
                </a>
              </div>
            </div>

            <div className="relative group w-full h-44 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.850672221615!2d-0.1277583!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xed10390f77744dc!2sLondon!5e0!3m2!1sen!2suk!4v1700000000000"
                className="w-full h-full border-0 grayscale invert contrast-[1.2] opacity-60 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
                title="BizGrow Office Location"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex items-center gap-3">
              {socialMedia.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={`Follow us on ${label}`}
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#997819] hover:text-white hover:border-[#997819] hover:-translate-y-1 transition-all duration-500"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.4em]">
            © 2026 BizGrow Media. Crafted for Excellence.
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;