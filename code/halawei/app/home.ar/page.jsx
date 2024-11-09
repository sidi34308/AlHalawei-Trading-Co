"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppPopup from "../components/WhatsAppPopup";

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ direction: "rtl" }} // Ensure RTL text flow
    >
      <Header language="ar" />
      <main className="flex-grow">
        <WhatsAppPopup />

        {/* Hero Section with Background Video */}
        <section className="relative flex justify-center items-center flex-col h-screen text-white text-center py-20">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/background.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>

          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-7">
              مرحبًا بكم في الحلاوي للتجارة
            </h2>
            <p className="max-w-3xl mx-auto">
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

        <section className="flex flex-col md:flex-row w-full bg-[#f4f4f4] items-center  mb-12">
          <div className="md:w-1/2 p-8 md:px-20 text-center md:text-right">
            <h3 className="text-8xl font-bold text-primary mb-8">
              لحوم طازجة بجودة مضمونة
            </h3>
            <p className="text-xl leading-relaxed">
              اكتشف أجود أنواع اللحوم الطازجة المتوفرة لدينا لتلبية جميع
              احتياجاتك. نحن نقدم لعملائنا اللحوم التي تتميز بالجودة العالية
              والنكهة الأصيلة لضمان تجربة طعام مميزة.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/all.png"
              alt="Products"
              className="max-w-full w-auto h-auto "
            />
          </div>
        </section>

        {/* High-Quality Meat Products Section */}
        <section className=" mx-auto py-16 px-9 sm: text-center">
          <div className="flex flex-col md:flex-row w-full items-center my-40 bg-primary rounded-3xl">
            <div className="md:w-1/2 p-8 md:px-20 text-center md:text-right">
              <h4 className="text-4xl mb-8 text-white font-bold">لحم الضأن</h4>
              <p className="text-lg text-white leading-relaxed">
                اكتشف أفضل أنواع لحم الضأن الحلال في قطر من شركة الحلاوي، مع
                خيارات من مصادر محلية ومستورد يتم تجهيزها وفقاً لأعلى المعايير
                الإسلامية. يتميز لحم الضأن من الحلاوي بجودته العالية التي تضفي
                مذاقاً أصيلاً ومميزاً على الأطباق القطرية والعربية، مثل
                &quot;المكبوس&quot; والمشويات. يتم الحصول على اللحم من مراعي
                موثوقة تلتزم بمعايير الرفق بالحيوان والاستدامة، مما يضمن تجربة
                طهي لذيذة وصحية.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/img1.png"
                alt="Lamb Products"
                className="max-w-full w-auto h-auto  rounded-3xl"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full items-center my-40 rounded-3xl">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/img3.png"
                alt="Cow Meat Products"
                className="max-w-full w-auto h-auto rounded-3xl"
              />
            </div>
            <div className="md:w-1/2 p-8 md:px-20 text-center md:text-right">
              <h4 className="text-4xl text-primary mb-8 font-bold">
                لحم البقر
              </h4>
              <p className="text-lg leading-relaxed">
                توفر شركة الحلاوي لحم البقر الفاخر في قطر، سواء كان محليًا أو
                مستورداً، بانتقاء دقيق لأعلى جودة ونكهة استثنائية. تُعزز لحومنا
                الأطباق اليومية ووجبات المناسبات، مما يجعلها خيارًا مثاليًا
                للطهاة والمطاعم الذين يسعون لتقديم أفضل طعم وجودة لزبائنهم.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full items-center my-40 bg-primary rounded-3xl">
            <div className="md:w-1/2 p-8 md:px-20 text-center md:text-right">
              <h4 className="text-4xl mb-8  text-white font-bold">لحم الجمل</h4>
              <p className="text-lg text-white leading-relaxed">
                تتميز شركة الحلاوي بتوفير لحم الإبل عالي الجودة للمناسبات
                القطرية التقليدية، مع ضمان الذبح الحلال والالتزام بأعلى معايير
                الصحة والسلامة. يتم اختيار لحم الإبل بعناية لتلبية تفضيلات الطهي
                القطرية، مما يجعله الخيار المثالي للأسر والمناسبات الخاصة.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/img2.png"
                alt="Camel Meat Products"
                className="max-w-full w-auto h-auto   rounded-3xl"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full items-center my-40 rounded-3xl">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/img4.png"
                alt=" Meat Products"
                className="max-w-full w-auto h-auto rounded-3xl"
              />
            </div>
            <div className="md:w-1/2 p-8 md:px-20 text-center md:text-right">
              <h4 className="text-4xl mb-8  text-primary font-bold">
                المنتجات المجمدة
              </h4>
              <p className="text-lg  leading-relaxed">
                الحلاوي تقدم مجموعة متنوعة من الأطعمة المجمدة عالية الجودة التي
                تشمل الخضروات واللحوم والمأكولات البحرية. نحرص على تجميد
                المنتجات في ذروة نضارتها للحفاظ على طعمها وقيمتها الغذائية، مما
                يجعلها حلاً مريحًا وصحيًا للأسر والشركات على حد سواء.
              </p>
            </div>
          </div>

          {/* Add similar sections for other meat products as needed */}
        </section>
        <div className="flex flex-col  w-full items-center mb-20 rounded-3xl ">
          <div className="w-full flex justify-center">
            <img
              src="/countries.png"
              alt=" Meat Products"
              className="max-w-full w-auto h-auto"
            />
          </div>
          <div className="md:w-1/2 p-10 md:px-20 text-center md:text-right">
            <h4 className="text-4xl mb-8  text-primary font-bold">
              لحوم عالية الجودة من السودان، الصومال، الهند، وباكستان
            </h4>
            <p className="text-lg  leading-relaxed">
              تفتخر شركة الحلاوي بتقديم مجموعة واسعة من اللحوم عالية الجودة
              المستوردة من عدة دول مثل السودان، الصومال، الهند، وباكستان. نحرص
              على اختيار اللحوم من مصادر موثوقة ووفقاً لأعلى معايير الجودة
              والشروط الحلال، لتلبية احتياجات زبائننا الكرام. تضم مجموعتنا لحوم
              الضأن، البقر، والدجاج التي تأتي من أفضل المراعي في هذه الدول، مما
              يضمن طراوة ونكهة مميزة في كل وجبة.
            </p>
          </div>
        </div>
        <section className="container min-h-screen mx-auto py-16 px-9 sm:px-40">
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">
            خدماتنا كذلك تتضمن
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <section className="bg-primary py-16 px-9 sm:px-40 text-center">
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
      <Footer language="ar" />
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
