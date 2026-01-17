'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function CreditBasedCGPACalculatorPage() {
  const [semesters, setSemesters] = useState(4);
  const [sgpas, setSgpas] = useState<number[]>(Array(4).fill(8));
  const [credits, setCredits] = useState<number[]>(Array(4).fill(20));
  const [cgpa, setCgpa] = useState<number | null>(null);

  const handleSemesterChange = (count: number) => {
    setSemesters(count);
    setSgpas(Array(count).fill(8));
    setCredits(Array(count).fill(20));
    setCgpa(null);
  };

  const calculateCGPA = () => {
    let totalWeightedPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < semesters; i++) {
      totalWeightedPoints += sgpas[i] * credits[i];
      totalCredits += credits[i];
    }

    if (totalCredits === 0) return;
    setCgpa(Number((totalWeightedPoints / totalCredits).toFixed(2)));
  };

  return (
    <div className="bg-white text-black">
      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* H1 + INTRO */}
        <section className="mb-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Credit-Based CGPA Calculator
          </h1>
          <p className="text-gray-600 max-w-3xl">
            This credit-based CGPA calculator helps students calculate their
            overall CGPA (Cumulative Grade Point Average) using semester-wise
            SGPA and corresponding credits, as followed by most Indian universities.
          </p>
        </section>

        {/* CALCULATOR */}
        <section className="mb-20 bg-gray-50 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-4">
            <label className="font-medium">
              Number of Semesters
            </label>
            <select
              value={semesters}
              onChange={(e) => handleSemesterChange(Number(e.target.value))}
              className="border px-3 py-2 rounded-lg bg-white"
            >
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border rounded-xl overflow-hidden">
              <thead className="bg-white">
                <tr>
                  <th className="p-3 border">Semester</th>
                  <th className="p-3 border">SGPA</th>
                  <th className="p-3 border">Credits</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {Array.from({ length: semesters }).map((_, i) => (
                  <tr key={i} className="text-center">
                    <td className="p-3 border">{i + 1}</td>
                    <td className="p-3 border">
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="10"
                        value={sgpas[i]}
                        onChange={(e) => {
                          const s = [...sgpas];
                          s[i] = Number(e.target.value);
                          setSgpas(s);
                        }}
                        className="border rounded px-2 py-1 w-24 text-center"
                      />
                    </td>
                    <td className="p-3 border">
                      <input
                        type="number"
                        min="1"
                        value={credits[i]}
                        onChange={(e) => {
                          const c = [...credits];
                          c[i] = Number(e.target.value);
                          setCredits(c);
                        }}
                        className="border rounded px-2 py-1 w-24 text-center"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={calculateCGPA}
            className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:opacity-90"
          >
            Calculate CGPA
          </button>

          {cgpa !== null && (
            <div className="mt-8 bg-white border rounded-xl p-5">
              <p className="text-lg">Your Cumulative GPA is</p>
              <p className="text-3xl font-bold mt-1">{cgpa}</p>
            </div>
          )}
        </section>

        {/* WHAT IS CGPA */}
        <Info title="What is CGPA (Cumulative Grade Point Average)?">
          CGPA is the overall academic performance indicator that represents
          the average of SGPAs across multiple semesters, weighted by the
          credits of each semester.
        </Info>

        {/* FORMULA */}
        <Info title="CGPA Formula Used">
          <code className="block bg-gray-100 p-4 rounded-lg mt-2">
            CGPA = (Σ SGPA × Semester Credits) ÷ (Σ Total Credits)
          </code>
        </Info>

        {/* HOW TO USE */}
        <Info title="How to Use This CGPA Calculator">
          <ol className="list-decimal ml-6 space-y-1">
            <li>Select number of semesters completed</li>
            <li>Enter SGPA for each semester</li>
            <li>Enter total credits for each semester</li>
            <li>Click calculate to get CGPA</li>
          </ol>
        </Info>

        {/* EXAMPLE */}
        <Info title="Example Calculation">
          Semester SGPAs 8.2, 8.6, 9.0 with credits 20, 22, 24:
          <br />
          (8.2×20 + 8.6×22 + 9.0×24) ÷ 66 = <strong>8.63</strong>
        </Info>

        {/* IMPORTANT NOTES */}
        <Info title="Important Notes">
          <ul className="list-disc ml-6 space-y-1">
            <li>Ensure credit values are accurate</li>
            <li>CGPA is cumulative across semesters</li>
            <li>Maximum SGPA value is usually 10</li>
            <li>University grading rules may differ</li>
          </ul>
        </Info>

        {/* FAQ */}
        <Info title="Frequently Asked Questions">
          <p><strong>Is CGPA different from SGPA?</strong><br />Yes, CGPA is cumulative.</p>
          <p><strong>Can I include failed semesters?</strong><br />Yes, include their SGPA.</p>
          <p><strong>Does this work for all Indian colleges?</strong><br />Mostly yes.</p>
          <p><strong>Is the calculation accurate?</strong><br />Yes, based on inputs.</p>
        </Info>

        {/* RELATED TOOLS */}
        <Info title="Related Tools">
          <ul className="list-disc ml-6 text-blue-600">
            <li>
              <Link href="/tools/semester-grade-calculator" className="hover:underline">
                Semester Grade Calculator
              </Link>
            </li>
            <li>
              <Link href="/tools/percentage-to-cgpa-calculator" className="hover:underline">
                Percentage to CGPA Calculator
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
