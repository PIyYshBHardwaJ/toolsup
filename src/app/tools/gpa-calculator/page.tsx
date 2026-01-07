
'use client';
import { useState } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';

const GRADE_POINTS: Record<string, number> = {
  O: 10,
  'A+': 9,
  A: 8,
  'B+': 7,
  B: 6,
  C: 5,
  F: 0,
};

export default function GpaCalculatorPage() {
  const [subjects, setSubjects] = useState(5);
  const [grades, setGrades] = useState<string[]>(Array(5).fill('A'));
  const [credits, setCredits] = useState<number[]>(Array(5).fill(3));
  const [gpa, setGpa] = useState<number | null>(null);

  const handleSubjectChange = (count: number) => {
    setSubjects(count);
    setGrades(Array(count).fill('A'));
    setCredits(Array(count).fill(3));
    setGpa(null);
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < subjects; i++) {
      totalPoints += GRADE_POINTS[grades[i]] * credits[i];
      totalCredits += credits[i];
    }

    if (totalCredits === 0) return;
    setGpa(Number((totalPoints / totalCredits).toFixed(2)));
  };

  return (
    <div className="bg-white text-black">
      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* H1 + INTRO */}
        <section className="mb-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            GPA Calculator for College Students
          </h1>
          <p className="text-gray-600 max-w-3xl">
            This GPA calculator helps students calculate their <strong>Grade Point Average</strong>
            for a single semester using subject-wise grades and credit values.
            It follows grading systems used by most Indian universities.
          </p>
        </section>

        {/* CALCULATOR */}
        <section className="mb-20 bg-gray-50 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <label className="font-medium">Number of Subjects</label>
            <select
              value={subjects}
              onChange={(e) => handleSubjectChange(Number(e.target.value))}
              className="border px-3 py-2 rounded-lg bg-white"
            >
              {[...Array(15)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border rounded-xl overflow-hidden">
              <thead className="bg-white">
                <tr>
                  <th className="p-3 border">Subject</th>
                  <th className="p-3 border">Grade</th>
                  <th className="p-3 border">Credits</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {Array.from({ length: subjects }).map((_, i) => (
                  <tr key={i} className="text-center">
                    <td className="p-3 border">{i + 1}</td>
                    <td className="p-3 border">
                      <select
                        value={grades[i]}
                        onChange={(e) => {
                          const g = [...grades];
                          g[i] = e.target.value;
                          setGrades(g);
                        }}
                        className="border px-2 py-1 rounded"
                      >
                        {Object.keys(GRADE_POINTS).map((g) => (
                          <option key={g}>{g}</option>
                        ))}
                      </select>
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
                        className="border rounded px-2 py-1 w-20 text-center"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={calculateGPA}
            className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:opacity-90"
          >
            Calculate GPA
          </button>

          {gpa !== null && (
            <div className="mt-8 bg-white border rounded-xl p-5">
              <p className="text-lg">Your GPA is</p>
              <p className="text-3xl font-bold mt-1">{gpa}</p>
            </div>
          )}
        </section>

        {/* WHAT IS GPA */}
        <Info title="What is GPA?">
          GPA (Grade Point Average) represents a student’s academic performance
          in a single semester. It is calculated by dividing total grade points
          by total credit units.
        </Info>

        {/* FORMULA */}
        <Info title="GPA Formula Used">
          <code className="block bg-gray-100 p-4 rounded-lg mt-2">
            GPA = (Σ Grade Points × Credits) ÷ (Σ Credits)
          </code>
        </Info>

        {/* MARKS TABLE */}
        <Info title="Marks to Grade Conversion Table">
          <div className="overflow-x-auto">
            <table className="w-full text-center border rounded-xl">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border">Marks %</th>
                  <th className="p-3 border">Grade</th>
                  <th className="p-3 border">Grade Point</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['90–100', 'O', 10],
                  ['80–89', 'A+', 9],
                  ['70–79', 'A', 8],
                  ['60–69', 'B+', 7],
                  ['50–59', 'B', 6],
                  ['40–49', 'C', 5],
                  ['Below 40', 'F', 0],
                ].map((r, i) => (
                  <tr key={i}>
                    <td className="p-3 border">{r[0]}</td>
                    <td className="p-3 border">{r[1]}</td>
                    <td className="p-3 border">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Info>

        {/* HOW TO USE */}
        <Info title="How to Use This GPA Calculator">
          <ol className="list-decimal ml-6 space-y-1">
            <li>Select number of subjects</li>
            <li>Choose grade for each subject</li>
            <li>Enter credit value</li>
            <li>Click calculate</li>
          </ol>
        </Info>

        {/* EXAMPLE */}
        <Info title="Example Calculation">
          Grades A, B+, and O with credits 3, 3, and 4:
          (8×3 + 7×3 + 10×4) ÷ 10 = <strong>8.50</strong>
        </Info>

        {/* NOTES */}
        <Info title="Important Notes">
          <ul className="list-disc ml-6 space-y-1">
            <li>This calculator is for a single semester GPA</li>
            <li>Grading systems may differ by institution</li>
            <li>Values are rounded to two decimals</li>
            <li>Always verify official results</li>
          </ul>
        </Info>

        {/* FAQ */}
        <Info title="Frequently Asked Questions">
          <p><strong>Is GPA different from CGPA?</strong><br />Yes. GPA is semester-wise, CGPA is cumulative.</p>
          <p><strong>Can GPA be converted to CGPA?</strong><br />Yes, by averaging semester GPAs with credits.</p>
          <p><strong>Does GPA affect placements?</strong><br />Yes, many companies set minimum GPA criteria.</p>
        </Info>

        {/* RELATED */}
        <Info title="Related Tools">
          <ul className="list-disc ml-6 text-blue-600">
            <ul className="list-disc ml-6 text-blue-600">
             <li>
               <Link href="/tools/cgpa-calculator" className="hover:underline">
                CGPA Calculator
               </Link>
              </li>
            </ul>


            <li>Percentage Calculator</li>
            <li>Marks to CGPA Converter</li>
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
