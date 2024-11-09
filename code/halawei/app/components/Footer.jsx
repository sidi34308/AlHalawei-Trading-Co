import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react"; // Import social media icons

export default function Footer({ language = "en" }) {
  // Generate the correct link path based on language
  const getLocalizedPath = (path) =>
    `${path}${language === "ar" ? ".ar" : ".en"}`;

  return (
    <footer
      className="bg-primary text-white py-8 px-9 sm:px-40"
      style={{ direction: "ltr" }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Information */}
        <div>
          <h4 className="text-xl font-bold mb-4">
            {language === "ar" ? "الحلاوي للتجارة" : "Al Halawei Trading"}
          </h4>
          <p style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
            {language === "ar"
              ? "نقدم مجموعة واسعة من المنتجات والخدمات عالية الجودة في قطر."
              : "We offer a wide range of high-quality products and services in Qatar."}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4 ">
            {language === "ar" ? "روابط سريعة" : "Quick Links"}
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                href={getLocalizedPath("/home")}
                className="hover:underline"
              >
                {language === "ar" ? "الرئيسية" : "Home"}
              </Link>
            </li>
            <li>
              <Link
                href={getLocalizedPath("/about")}
                className="hover:underline"
              >
                {language === "ar" ? "من نحن" : "About Us"}
              </Link>
            </li>

            <li>
              <Link
                href={getLocalizedPath("/contact")}
                className="hover:underline"
              >
                {language === "ar" ? "تواصل معنا" : "Contact"}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-xl font-bold mb-4">
            {language === "ar" ? "معلومات الاتصال" : "Contact Information"}
          </h4>
          <ul className="space-y-2">
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <Phone className="w-5 h-5" />
              <span>+974 70700575</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <Mail className="w-5 h-5" />
              <span>info@alhalaweitrading.com</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <MapPin className="w-5 h-5" />
              <span>
                {language === "ar"
                  ? "المنطقة الصناعية، شارع 43، الدوحة، قطر"
                  : "Industrial Area, Street 43, Doha, Qatar"}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="container mx-auto text-center mt-8">
        <div className="flex justify-center space-x-4">
          <Link
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:text-gray-300"
          >
            <Facebook className="w-6 h-6" />
          </Link>
          <Link
            href="https://twitter.com"
            aria-label="Twitter"
            className="hover:text-gray-300"
          >
            <Twitter className="w-6 h-6" />
          </Link>
          <Link
            href="https://instagram.com"
            aria-label="Instagram"
            className="hover:text-gray-300"
          >
            <Instagram className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto text-center mt-8 border-t border-[#df5a0d] pt-4">
        <p>
          &copy; 2024{" "}
          {language === "ar"
            ? "الحلاوي للتجارة - جميع الحقوق محفوظة"
            : "Al Halawei Trading - All Rights Reserved"}
        </p>
      </div>
    </footer>
  );
}
