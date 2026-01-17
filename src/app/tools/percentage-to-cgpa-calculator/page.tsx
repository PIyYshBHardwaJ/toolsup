'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function PercentageToCgpaPage() {
  const [percentage, setPercentage] = useState<number | ''>('');
  const [cgpa, setCgpa] = useState<number | null>(null);

  const calculateCGPA = () => {
    if (percentage === '' || percentage < 0 || percentage > 100) return;
    // Common Indian university formula
    const result = percentage / 9.5;
    setCgpa(Number(result.toFixed(2)));
  };

  return (
    <div className="bg-white text-black">
      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* H1 + INTRO */}
        <section className="mb-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Percentage to CGPA Calculator
          </h1>
          <p className="text-gray-600 max-w-3xl">
            This percentage to CGPA calculator helps students convert their
            exam percentage into CGPA using the standard conversion formula
            followed by most Indian universities and colleges.
          </p>
        </section>

        {/* CALCULATOR */}
        <section className="mb-20 bg-gray-50 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="mb-6">
            <label className="font-medium block mb-2">
              Enter Percentage
            </label>
            <input
              type="number"
              min="0"
              max="100"
              placeholder="e.g. 78.5"
              value={percentage}
              onChange={(e) => setPercentage(Number(e.target.value))}
              className="border px-4 py-2 rounded-lg w-full max-w-xs"
            />
          </div>

          <button
            onClick={calculateCGPA}
            className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:opacity-90"
          >
            Convert to CGPA
          </button>

          {cgpa !== null && (
            <div className="mt-8 bg-white border rounded-xl p-5">
              <p className="text-lg">Your CGPA is</p>
              <p className="text-3xl font-bold mt-1">{cgpa}</p>
            </div>
          )}
        </section>

        {/* WHAT IS CGPA */}
        <Info title="What is CGPA?">
          CGPA (Cumulative Grade Point Average) is a numerical representation
          of a student’s academic performance. It standardizes marks into a
          scale, usually from 0 to 10.
        </Info>

        {/* FORMULA */}
        <Info title="Percentage to CGPA Formula">
          <code className="block bg-gray-100 p-4 rounded-lg mt-2">
            CGPA = Percentage ÷ 9.5
          </code>
        </Info>

        {/* CONVERSION TABLE */}
        <Info title="Percentage to CGPA Conversion Table">
          <div className="overflow-x-auto">
            <table className="w-full text-center border rounded-xl">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border">Percentage</th>
                  <th className="p-3 border">Approx CGPA</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['90%', '9.47'],
                  ['80%', '8.42'],
                  ['70%', '7.37'],
                  ['60%', '6.32'],
                  ['50%', '5.26'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td className="p-3 border">{r[0]}</td>
                    <td className="p-3 border">{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Info>

        {/* HOW TO USE */}
        <Info title="How to Use This Calculator">
          <ol className="list-decimal ml-6 space-y-1">
            <li>Enter your percentage marks</li>
            <li>Click on convert button</li>
            <li>View your calculated CGPA</li>
          </ol>
        </Info>

        {/* EXAMPLE */}
        <Info title="Example Calculation">
          If your percentage is 76:
          <br />
          CGPA = 76 ÷ 9.5 = <strong>8.00</strong>
        </Info>

        {/* IMPORTANT NOTES */}
        <Info title="Important Notes">
          <ul className="list-disc ml-6 space-y-1">
            <li>This uses the standard CBSE-style conversion</li>
            <li>Some universities follow different formulas</li>
            <li>CGPA is rounded to two decimal places</li>
            <li>Always verify official conversion rules</li>
          </ul>
        </Info>

        {/* FAQ */}
        <Info title="Frequently Asked Questions">
          <p><strong>Is this formula used everywhere?</strong><br />No, but it is widely accepted in India.</p>
          <p><strong>Can CGPA exceed 10?</strong><br />No.</p>
          <p><strong>Is this applicable for all streams?</strong><br />Yes, in general.</p>
          <p><strong>Is this calculator accurate?</strong><br />Yes, based on the given formula.</p>
        </Info>

        {/* RELATED TOOLS */}
        <Info title="Related Tools">
          <ul className="list-disc ml-6 text-blue-600">
            <li>
              <Link href="/tools/gpa-calculator" className="hover:underline">
                GPA Calculator
              </Link>
            </li>
            <li>
              <Link href="/tools/cgpa-calculator" className="hover:underline">
                CGPA Calculator
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
