import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header language="ar" />
      <div className="bg-black w-full h-40"></div>
      <section
        className=" mx-auto py-16 px-6"
        style={{ direction: "rtl" }} // Ensure RTL text flow
      >
        <h2 className="text-4xl font-bold text-center text-primary mb-8">
          من نحن
        </h2>
        <p className="max-w-3xl mx-auto text-center mb-4">
          تأسست شركة الحلاوي للتجارة في عام 2011 في قطر، ونسعى لتقديم أفضل
          المنتجات والخدمات في مجالات متنوعة مثل المواد الغذائية، الإلكترونيات،
          والسلع المنزلية.
        </p>
        <p className="max-w-3xl mx-auto text-center">
          تلتزم شركتنا بمعايير الجودة العالية، وتوفير منتجات وخدمات تلبي
          احتياجات السوق القطري، مع ضمان رضا العملاء وتقديم حلول مبتكرة وفعالة.
        </p>
      </section>

      {/* Team Section */}
      <section className="min-h-screen bg-[#f3f3f3] py-16 px-6">
        <h3 className="text-3xl font-bold text-center text-primary mb-8">
          فريقنا
        </h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className=" bg-white rounded-xl shadow-lg text-center">
            <div className="bg-[#E5E5E5] h-72 w-full flex justify-center items-center">
              <img src="/profileimage.png" className=" h-full" />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-2">
                ناصر قسم الله يعقوب
              </h4>
              <p className="mb-2">مدير - الصلاحيات الكاملة</p>
              <p>جوال: 70700575 / 33000568</p>
            </div>
          </div>
          <div className=" bg-white rounded-xl shadow-lg text-center">
            <div className="bg-[#E5E5E5] h-72 w-full flex justify-center items-center">
              <img src="/profileimage.png" className=" h-full" />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-2">
                يعقوب قسم الله يعقوب
              </h4>
              <p className="mb-2">مدير - الصلاحيات الإدارية</p>
              <p>جوال: 55570274</p>
            </div>
          </div>
        </div>
      </section>

      <Footer language="ar" />
    </>
  );
}
