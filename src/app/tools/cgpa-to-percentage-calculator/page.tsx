'use client';
import { useState } from 'react';
import Footer from "@/components/Footer";
import Link from 'next/link';

export default function CgpaToPercentagePage() {
  const [cgpa, setCgpa] = useState<number | ''>('');
  const [percentage, setPercentage] = useState<number | null>(null);

  const calculatePercentage = () => {
    if (cgpa === '' || cgpa < 0 || cgpa > 10) return;
    const result = Number((cgpa * 9.5).toFixed(2));
    setPercentage(result);
  };

  return (
    <div className="bg-white text-black">
      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* H1 + INTRO */}
        <section className="mb-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            CGPA to Percentage Calculator For College Students
          </h1>
          <p className="text-gray-600 max-w-3xl">
            This CGPA to Percentage calculator helps students convert their
            CGPA into percentage using the standard conversion formula followed
            by many Indian universities.
          </p>
        </section>

        {/* CALCULATOR */}
        <section className="mb-20 bg-gray-50 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="mb-6">
            <label className="font-medium block mb-2">
              Enter Your CGPA
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="10"
              value={cgpa}
              onChange={(e) => {
                setCgpa(Number(e.target.value));
                setPercentage(null);
              }}
              className="border px-4 py-2 rounded-lg w-40"
              placeholder="e.g. 8.5"
            />
          </div>

          <button
            onClick={calculatePercentage}
            className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:opacity-90"
          >
            Convert to Percentage
          </button>

          {percentage !== null && (
            <div className="mt-8 bg-white border rounded-xl p-5">
              <p className="text-lg">Your Percentage is</p>
              <p className="text-3xl font-bold mt-1">{percentage}%</p>
            </div>
          )}
        </section>

        {/* WHAT IS CGPA */}
        <Info title="What is CGPA?">
          CGPA (Cumulative Grade Point Average) represents the overall academic
          performance of a student calculated using grade points and credits.
        </Info>

        {/* FORMULA */}
        <Info title="CGPA to Percentage Formula">
          <code className="block bg-gray-100 p-4 rounded-lg mt-2">
            Percentage = CGPA × 9.5
          </code>
        </Info>

        {/* EXAMPLE */}
        <Info title="Example Conversion">
          If your CGPA is <strong>8.0</strong>, then:
          <br />
          8.0 × 9.5 = <strong>76%</strong>
        </Info>

        {/* HOW TO USE */}
        <Info title="How to Use This Calculator">
          <ol className="list-decimal ml-6 space-y-1">
            <li>Enter your CGPA</li>
            <li>Click on convert</li>
            <li>View your percentage instantly</li>
          </ol>
        </Info>

        {/* IMPORTANT NOTES */}
        <Info title="Important Notes">
          <ul className="list-disc ml-6 space-y-1">
            <li>The 9.5 factor is commonly used in Indian universities</li>
            <li>Some colleges may follow different formulas</li>
            <li>Results are rounded to two decimal places</li>
            <li>Always verify with official guidelines</li>
          </ul>
        </Info>

        {/* FAQ */}
        <Info title="Frequently Asked Questions">
          <p><strong>Is this formula universal?</strong><br />No, it varies.</p>
          <p><strong>Can I use this for all semesters?</strong><br />Yes, for overall CGPA.</p>
          <p><strong>Is this officially accepted?</strong><br />Depends on institution.</p>
        </Info>

        {/* RELATED TOOLS */}
        <Info title="Related Tools">
          <ul className="list-disc ml-6 text-blue-600 space-y-1">
            <li>
              <Link href="/tools/cgpa-calculator" className="hover:underline">
                CGPA Calculator
              </Link>
            </li>
            <li>
              <Link href="/tools/gpa-calculator" className="hover:underline">
                GPA Calculator
              </Link>
            </li>
          </ul>
        </Info>

        <Footer />
      </main>
    </div>
  );
}

function Info({ title, children }: { title: string; children: any }) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="text-gray-700">{children}</div>
    </section>
  );
}
