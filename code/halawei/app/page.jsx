"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppPopup from "./components/WhatsAppPopup";

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ direction: "rtl" }} // Ensure RTL text flow
    >
      <Header />
      <main className="flex-grow">
        <WhatsAppPopup />
        {/* Hero Section with Background Video */}
        <section className="relative flex justify-center items-center flex-col h-screen text-white text-center py-20">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/background.mp4" // Replace with the path to your video file
            autoPlay
            loop
            muted
            playsInline
          ></video>

          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">
              مرحبًا بكم في الحلاوي للتجارة
            </h2>
            <p className="max-w-2xl mx-auto">
              نقدم مجموعة واسعة من المنتجات والخدمات عالية الجودة في قطر.
            </p>
          </div>
        </section>

        {/* About Us Section */}
        <section className="container mx-auto py-16 px-9 sm:px-40 text-center">
          <h3 className="text-3xl font-bold text-primary mb-8">من نحن</h3>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            شركة الحلاوي للتجارة تأسست في قطر، وتلتزم بتوفير منتجات وخدمات
            متنوعة مثل المواد الغذائية، الأجهزة الإلكترونية، معدات الهواتف
            المحمولة، ومواد البناء. نقدم حلولًا تلبي احتياجات السوق المحلي مع
            التركيز على الجودة.
          </p>
        </section>

        {/* Services Section */}
        <section className="container min-h-screen mx-auto py-16 px-9 sm:px-40">
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">
            خدماتنا
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Each service item with smooth hover effect */}
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2"
              >
                <h4 className="text-2xl font-semibold mb-2 text-primary">
                  {service.title}
                </h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-primary min-h-screen py-16 px-9 sm:px-40 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">لماذا تختارنا؟</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 border rounded-lg shadow hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
              <h4 className="text-2xl font-semibold mb-2 text-primary">
                جودة عالية
              </h4>
              <p>نلتزم بأعلى معايير الجودة في كل منتج نوفره لعملائنا.</p>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
              <h4 className="text-2xl font-semibold mb-2 text-primary">
                تنوع المنتجات
              </h4>
              <p>تشكيلة واسعة من المنتجات تلبي احتياجات العملاء المتنوعة.</p>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
              <h4 className="text-2xl font-semibold mb-2 text-primary">
                خدمة عملاء مميزة
              </h4>
              <p>دعم عملاء فعال وسريع لضمان رضا العملاء وراحتهم.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Data for services offered by the company
const servicesData = [
  {
    title: "التجارة في العصائر",
    description: "نقدم عصائر طازجة ومجمدة لتلبية احتياجات العملاء المتنوعة.",
  },
  {
    title: "التجارة في اللحوم",
    description: "تجارة اللحوم الطازجة والمبردة بأعلى معايير الجودة.",
  },
  {
    title: "منتجات الألبان",
    description: "توفر منتجات ألبان متنوعة وصحية للأسواق المحلية.",
  },
  {
    title: "تجارة المواد الغذائية",
    description: "نقدم تشكيلة واسعة من المواد الغذائية عالية الجودة.",
  },
  {
    title: "التجارة في الأجهزة الإلكترونية",
    description: "تجارة الأجهزة الإلكترونية وقطع غيارها.",
  },
  {
    title: "معدات الهواتف المحمولة",
    description: "بيع وتوريد معدات الهواتف المتنقلة بجميع أنواعها.",
  },
  {
    title: "التجارة في مواد البناء",
    description: "توفير مواد البناء لقطاع التشييد والبناء.",
  },
  {
    title: "منتجات التجميل والعناية",
    description: "تجارة مستحضرات التجميل وأدوات الزينة والعناية بالشعر.",
  },
  {
    title: "التعبئة والتغليف",
    description: "خدمات التعبئة والتغليف للمواد الغذائية.",
  },
];
