import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header />
      <section className="h-screen mx-auto py-16">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">
          من نحن
        </h2>
        <p className="max-w-3xl mx-auto text-center mb-4">
          تأسست شركة الحلاوي للتجارة في عام 2011 في قطر، ونسعى لتقديم أفضل
          المنتجات والخدمات.
        </p>
        <p className="max-w-3xl mx-auto text-center">
          تلتزم شركتنا بالعمل بأعلى معايير الجودة، مع التركيز على تلبية احتياجات
          عملائنا وتوفير الحلول المناسبة.
        </p>
      </section>
      <Footer />
    </>
  );
}
