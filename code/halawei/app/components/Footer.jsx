import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react"; // Import social media icons

export default function Footer() {
  return (
    <footer
      className="bg-primary text-white py-8 px-9 sm:px-40"
      style={{ direction: "ltr" }} // Ensure RTL text flow
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Information */}
        <div>
          <h4 className="text-xl font-bold mb-4">الحلاوي للتجارة</h4>
          <p>نقدم مجموعة واسعة من المنتجات والخدمات عالية الجودة في قطر.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4">روابط سريعة</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                من نحن
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                خدماتنا
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-xl font-bold mb-4">معلومات الاتصال</h4>
          <ul className="space-y-2">
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <Phone className="w-5 h-5" />
              <span>+974 55570274</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <Mail className="w-5 h-5" />
              <span>info@alhalawei.com</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <MapPin className="w-5 h-5" />
              <span>المنطقة الصناعية، شارع 43، الدوحة، قطر</span>
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
        <p>&copy; 2024 الحلاوي للتجارة - جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}
