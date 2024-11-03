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
            solutions that meet the local market's needs with a focus on
            quality.
          </p>
        </section>

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
