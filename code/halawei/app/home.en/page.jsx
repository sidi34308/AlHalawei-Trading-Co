"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppPopup_en from "../components/WhatsAppPopup_en";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ direction: "ltr" }}>
      <Header language="en" />
      <main className="flex-grow">
        <WhatsAppPopup_en />

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
              Welcome to Al Halawei Trading
            </h2>
            <p className="max-w-3xl mx-auto">
              We offer a wide range of high-quality products and services in
              Qatar.
            </p>
          </div>
        </section>

        {/* About Us Section */}
        <section className="container mx-auto py-16 px-9 sm:px-40 text-center">
          <h3 className="text-3xl font-bold text-primary mb-8">About Us</h3>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            Al Halawei Trading was established in Qatar, committed to providing
            a variety of products and services including food items, electronic
            devices, mobile accessories, and building materials. We offer
            solutions that meet the local market&#39;s needs with a focus on
            quality.
          </p>
        </section>
        {/* Services Section */}

        <section className="flex flex-col md:flex-row w-full bg-[#f4f4f4] items-center  mb-12">
          <div className="md:w-1/2 p-8 md  :px-20 text-center md:text-left">
            <h3 className="text-5xl font-bold text-primary sm:text-8xl mb-8">
              Fresh Meat with Guaranteed Quality
            </h3>
            <p className="sm:text-xl leading-relaxed">
              Discover the finest types of fresh meat available to meet all your
              needs. We provide our customers with meat that is distinguished by
              its high quality and authentic flavor, ensuring a unique dining
              experience.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/all2.png"
              alt="Products"
              className="max-w-full w-auto h-auto "
            />
          </div>
        </section>

        {/* High-Quality Meat Products Section */}
        <section className=" mx-auto py-16 px-9 sm: text-center">
          <div className="flex flex-col md:flex-row w-full items-center my-40 bg-primary rounded-3xl">
            <div className="md:w-1/2 p-8 md:px-20 text-center md:text-left">
              <h4 className="text-4xl mb-8 text-white font-bold">Lamb</h4>
              <p className="text-lg text-white leading-relaxed">
                Discover the best halal lamb in Qatar from Al-Halawi, with
                options from local and imported sources, prepared according to
                the highest Islamic standards. Al-Halawi lamb is known for its
                high quality, offering an authentic and unique flavor to Qatari
                and Arab dishes such as &quot;Maqboos&quot; and grilled meats.
                The meat comes from trusted pastures that adhere to animal
                welfare and sustainability standards, ensuring a delicious and
                healthy cooking experience.
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
            <div className="md:w-1/2 p-8 md:px-20 text-center md:text-left">
              <h4 className="text-4xl text-primary mb-8 font-bold">Beef</h4>
              <p className="text-lg leading-relaxed">
                Al-Halawi offers premium beef in Qatar, whether local or
                imported, selected for the highest quality and exceptional
                flavor. Our beef enhances daily dishes and special occasion
                meals, making it the ideal choice for chefs and restaurants
                seeking to provide the best taste and quality to their
                customers.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full items-center my-40 bg-primary rounded-3xl">
            <div className="md:w-1/2 p-8 md:px-20 text-center md:text-left">
              <h4 className="text-4xl mb-8  text-white font-bold">
                Camel Meat
              </h4>
              <p className="text-lg text-white leading-relaxed">
                Al-Halawi offers high-quality camel meat for traditional Qatari
                events, ensuring halal slaughter and adhering to the highest
                health and safety standards. Camel meat is carefully selected to
                meet Qatari cooking preferences, making it the perfect choice
                for families and special occasions.
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
            <div className="md:w-1/2 p-8 md:px-20 text-center md:text-left">
              <h4 className="text-4xl mb-8  text-primary font-bold">
                Frozen Products
              </h4>
              <p className="text-lg  leading-relaxed">
                Al-Halawi offers a wide variety of high-quality frozen foods,
                including vegetables, meats, and seafood. We ensure that our
                products are frozen at their peak freshness to preserve their
                taste and nutritional value, making them a convenient and
                healthy solution for both families and businesses.
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
          <div className="md:w-1/2 p-10 md:px-20 text-center md:text-left">
            <h4 className="text-4xl mb-8  text-primary font-bold">
              High-Quality Meat from Sudan, Somalia, India, and Pakistan
            </h4>
            <p className="text-lg  leading-relaxed">
              Al-Halawi is proud to offer a wide range of high-quality meats
              imported from countries such as Sudan, Somalia, India, and
              Pakistan. We ensure the meat is selected from trusted sources and
              adheres to the highest quality standards and halal requirements,
              meeting the needs of our valued customers. Our collection includes
              lamb, beef, and chicken from the best pastures in these countries,
              ensuring tenderness and a unique flavor in every meal.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <section className="container min-h-screen mx-auto py-16 px-9 sm:px-40">
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">
            Our Services
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
          <h3 className="text-3xl font-bold text-white mb-8">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 border rounded-lg shadow hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
              <h4 className="text-2xl font-semibold mb-2 text-primary">
                High Quality
              </h4>
              <p>
                We adhere to the highest standards in every product we provide
                to our clients.
              </p>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
              <h4 className="text-2xl font-semibold mb-2 text-primary">
                Product Variety
              </h4>
              <p>Wide range of products to meet diverse customer needs.</p>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
              <h4 className="text-2xl font-semibold mb-2 text-primary">
                Excellent Customer Service
              </h4>
              <p>
                Effective and responsive support to ensure client satisfaction.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer language="en" />
    </div>
  );
}

// Data for services offered by the company
const servicesData = [
  {
    title: "Juice Trading",
    description:
      "We offer fresh and frozen juices to meet diverse customer needs.",
  },
  {
    title: "Meat Trading",
    description:
      "Fresh and chilled meat trade with the highest quality standards.",
  },
  {
    title: "Dairy Products",
    description:
      "Supplying a variety of healthy dairy products to the local market.",
  },
  {
    title: "Food Trading",
    description: "A wide selection of high-quality food items.",
  },
  {
    title: "Electronics Trading",
    description: "Trading electronic devices and their spare parts.",
  },
  {
    title: "Mobile Accessories",
    description: "Supply of various types of mobile equipment.",
  },
  {
    title: "Building Materials",
    description: "Providing construction materials for the building sector.",
  },
  {
    title: "Beauty and Care Products",
    description: "Trading cosmetics and beauty tools and hair care products.",
  },
  {
    title: "Packaging Services",
    description: "Food packaging services.",
  },
];
