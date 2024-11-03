import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header language="en" />
      <div className="bg-black w-full h-40"></div>
      <section className="mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">
          About Us
        </h2>
        <p className="max-w-3xl mx-auto text-center mb-4">
          Al Halawei Trading was founded in 2011 in Qatar, aiming to offer the
          best products and services across various sectors, including food,
          electronics, and household goods.
        </p>
        <p className="max-w-3xl mx-auto text-center">
          Our company is committed to high quality standards, providing products
          and services that meet the needs of the Qatari market, ensuring
          customer satisfaction, and offering innovative, effective solutions.
        </p>
      </section>

      {/* Team Section */}
      <section className="min-h-screen bg-[#f3f3f3] py-16 px-6">
        <h3 className="text-3xl font-bold text-center text-primary mb-8">
          Our Team
        </h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg text-center">
            <div className="bg-[#E5E5E5] h-72 w-full flex justify-center items-center">
              <img src="/profileimage.png" className="h-full" />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-2">
                Nasser Gassam Allah Yaqoub
              </h4>
              <p className="mb-2">Manager - Full Authority</p>
              <p>Phone: 70700575 / 33000568</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg text-center">
            <div className="bg-[#E5E5E5] h-72 w-full flex justify-center items-center">
              <img src="/profileimage.png" className="h-full" />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-2">
                Yaqoub Gassam Allah Yaqoub
              </h4>
              <p className="mb-2">Manager - Administrative Authority</p>
              <p>Phone: 55570274</p>
            </div>
          </div>
        </div>
      </section>

      <Footer language="en" />
    </>
  );
}
