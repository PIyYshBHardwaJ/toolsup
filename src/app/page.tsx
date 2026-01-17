export const metadata = {
  title: "Toolup – Free Online Calculators & Useful Tools",
  description:
    "Toolup provides free, accurate, and easy-to-use online calculators and tools for students, finance, health, and everyday calculations.",
};


import Footer from "@/components/Footer";



import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">

      {/* BLACK HERO / NAVBAR */}
      <header className="w-full bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            All-in-One Free Online Calculators for Students
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Toolup provides free, accurate, and easy-to-use online calculators
            such as CGPA, percentage, and EMI calculators. Built to help students
            and everyday users save time and calculate with confidence.
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="px-6 py-16 max-w-6xl mx-auto font-sans">

        {/* POPULAR TOOLS */}
        <section className="mb-28">
          <h2 className="text-2xl font-semibold text-black mb-10">
            Popular Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            
            <Link
               href="/tools/cgpa-calculator"
               className="relative bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-xl transition"
>
               <span className="absolute top-4 right-4 text-xs bg-black text-white px-3 py-1 rounded-full">
               Live
               </span>
               <h3 className="text-xl font-semibold text-black mb-3">
               CGPA Calculator
              </h3>
               <p className="text-sm text-gray-600">
                Calculate your CGPA easily for college and university courses.
                </p>
            </Link>

            <Link
               href="/tools/gpa-calculator"
               className="relative bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-xl transition"
>
               <span className="absolute top-4 right-4 text-xs bg-black text-white px-3 py-1 rounded-full">
               Live
               </span>
               <h3 className="text-xl font-semibold text-black mb-3">
               GPA Calculator
              </h3>
               <p className="text-sm text-gray-600">
                Calculate your GPA easily for college and university courses.
                </p>
            </Link>

            <Link
               href="/tools/cgpa-to-percentage-calculator"
               className="relative bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-xl transition"
>
               <span className="absolute top-4 right-4 text-xs bg-black text-white px-3 py-1 rounded-full">
               Live
               </span>
               <h3 className="text-xl font-semibold text-black mb-3">
               CGPA to Percentage Calculator
              </h3>
               <p className="text-sm text-gray-600">
                Convert CGPA to percentage instantly using the standard 9.5 formula.
                </p>
            </Link>

            <Link
               href="/tools/percentage-to-cgpa-calculator"
               className="relative bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-xl transition"
>
               <span className="absolute top-4 right-4 text-xs bg-black text-white px-3 py-1 rounded-full">
               Live
               </span>
               <h3 className="text-xl font-semibold text-black mb-3">
                Percentage To CGPA Calculator
              </h3>
               <p className="text-sm text-gray-600">
                Convert CGPA to percentage instantly using this tool.
                </p>
            </Link>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7">
              <span className="inline-block mb-3 text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                Coming Soon
              </span>
              <h3 className="text-xl font-semibold text-black mb-3">
                EMI Calculator
              </h3>
              <p className="text-sm text-gray-600">
                Calculate loan EMI with interest and tenure details.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7">
              <span className="inline-block mb-3 text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                Coming Soon
              </span>
              <h3 className="text-xl font-semibold text-black mb-3">
                Percentage Calculator
              </h3>
              <p className="text-sm text-gray-600">
                Convert CGPA and marks to percentage instantly.
              </p>
            </div>

          </div>
        </section>

        {/* WHY TOOLUP */}
        <section className="mb-28">
          <h2 className="text-2xl font-semibold text-black mb-8">
            Why Toolup?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
            <div>✔ Free and accurate calculators</div>
            <div>✔ No login or signup required</div>
            <div>✔ Built for Indian students</div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-28">
          <h2 className="text-2xl font-semibold text-black mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 max-w-3xl">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-black mb-1">
                What is Toolup?
              </h3>
              <p className="text-sm text-gray-600">
                Toolup is a free online platform that provides calculators for
                students and everyday calculations.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-black mb-1">
                Is Toolup free to use?
              </h3>
              <p className="text-sm text-gray-600">
                Yes, all calculators on Toolup are completely free with no
                signup required.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-black mb-1">
                Who can use Toolup calculators?
              </h3>
              <p className="text-sm text-gray-600">
                Toolup is mainly designed for students, but anyone can use the
                tools.
              </p>
            </div>
          </div>
        </section>

        <Footer />

        {/* FOOTER
        <footer className="border-t pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Toolup · Free tools for smarter calculations
        </footer> */}

        


      </main>
    </div>
  );
}
