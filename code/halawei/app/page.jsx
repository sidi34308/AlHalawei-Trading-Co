"use client"; // Mark this file as a client component

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLanguageSelect = (lang) => {
    // Navigate to the selected language's homepage
    router.push(`/home.${lang}`);
  };

  return (
    <div
      className="relative h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/bg.png")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay for better text visibility */}
      <div className="relative z-10 text-white text-center p-4">
        <h1 className="text-6xl font-bold mb-4">أهلاً وسهلاً</h1>
        <h1 className="text-6xl font-bold mb-4">Welcome</h1>

        <div>
          <button
            onClick={() => handleLanguageSelect("en")}
            className="mr-4 px-6 py-2  text-white rounded-lg  hover:opacity-50 transition-opacity duration-300 ease-in-out "
          >
            English
          </button>
          <button
            onClick={() => handleLanguageSelect("ar")}
            className="px-6 py-2  text-white rounded-lg  hover:opacity-50 transition-opacity duration-300 ease-in-out"
          >
            العربية
          </button>
        </div>
      </div>
    </div>
  );
}
