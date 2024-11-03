import Footer from "../components/Footer";
import Header from "../components/Header";
export default function Contact() {
  return (
    <>
      <Header language="ar" />

      <div className="w-full h-40 bg-black"></div>
      <section
        className=" mx-auto py-16 "
        style={{ direction: "rtl" }} // Ensure RTL text flow
      >
        <h2 className="text-4xl font-bold text-center text-primary mb-8">
          تواصل معنا
        </h2>
        <div className=" grid px-9 sm:px-40 grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg">
              العنوان: المنطقة الصناعية، شارع 43، الدوحة، قطر
            </p>
            <p className="text-lg">الهاتف: +974 55570274</p>
            <p className="text-lg">البريد الإلكتروني: info@alhalawei.com</p>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="الاسم"
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="رسالتك"
              className="w-full p-2 border rounded"
              rows="4"
            ></textarea>
            <button className="bg-primary text-white p-2 rounded">إرسال</button>
          </form>
        </div>
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.2920990897693!2d51.53222731500206!3d25.26757843464286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45dfc4ed87e919%3A0xa50328d6069cbb6a!2sIndustrial%20Area%2043rd%20St!5e0!3m2!1sen!2sqa!4v1617752726311!5m2!1sen!2sqa"
            width="100%"
            height="500"
            allowFullScreen=""
            loading="lazy"
            className="border"
          ></iframe>
        </div>
      </section>
      <Footer language="ar" />
    </>
  );
}
