'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const GRADE_POINTS: Record<string, number> = {
  O: 10,
  'A+': 9,
  A: 8,
  'B+': 7,
  B: 6,
  C: 5,
  F: 0,
};

export default function SemesterGradeCalculatorPage() {
  const [subjects, setSubjects] = useState(5);
  const [grades, setGrades] = useState<string[]>(Array(5).fill('A'));
  const [credits, setCredits] = useState<number[]>(Array(5).fill(3));
  const [sgpa, setSgpa] = useState<number | null>(null);

  const handleSubjectChange = (count: number) => {
    setSubjects(count);
    setGrades(Array(count).fill('A'));
    setCredits(Array(count).fill(3));
    setSgpa(null);
  };

  const calculateSGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < subjects; i++) {
      totalPoints += GRADE_POINTS[grades[i]] * credits[i];
      totalCredits += credits[i];
    }

    if (totalCredits === 0) return;
    setSgpa(Number((totalPoints / totalCredits).toFixed(2)));
  };

  return (
    <div className="bg-white text-black">
      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* H1 + INTRO */}
        <section className="mb-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Semester Grade Calculator
          </h1>
          <p className="text-gray-600 max-w-3xl">
            This semester grade calculator helps students calculate their
            SGPA (Semester Grade Point Average) using subject-wise grades
            and credits as followed by most Indian universities.
          </p>
        </section>

        {/* CALCULATOR */}
        <section className="mb-20 bg-gray-50 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-4">
            <label className="font-medium">
              Number of Subjects
            </label>
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
            onClick={calculateSGPA}
            className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:opacity-90"
          >
            Calculate SGPA
          </button>

          {sgpa !== null && (
            <div className="mt-8 bg-white border rounded-xl p-5">
              <p className="text-lg">Your Semester GPA is</p>
              <p className="text-3xl font-bold mt-1">{sgpa}</p>
            </div>
          )}
        </section>

        {/* WHAT IS SGPA */}
        <Info title="What is Semester GPA (SGPA)?">
          SGPA (Semester Grade Point Average) is the average of grade points
          earned in all subjects during a single semester, weighted by credits.
        </Info>

        {/* FORMULA */}
        <Info title="SGPA Formula Used">
          <code className="block bg-gray-100 p-4 rounded-lg mt-2">
            SGPA = (Σ Grade Points × Credits) ÷ (Σ Credits)
          </code>
        </Info>

        {/* HOW TO USE */}
        <Info title="How to Use This Semester Grade Calculator">
          <ol className="list-decimal ml-6 space-y-1">
            <li>Select number of subjects</li>
            <li>Choose grades for each subject</li>
            <li>Enter corresponding credits</li>
            <li>Click calculate to get SGPA</li>
          </ol>
        </Info>

        {/* EXAMPLE */}
        <Info title="Example Calculation">
          Grades O, A, and B+ with credits 4, 3, and 3:
          <br />
          (10×4 + 8×3 + 7×3) ÷ 10 = <strong>8.50</strong>
        </Info>

        {/* IMPORTANT NOTES */}
        <Info title="Important Notes">
          <ul className="list-disc ml-6 space-y-1">
            <li>This calculator is for a single semester only</li>
            <li>Grading systems may vary by university</li>
            <li>Results are rounded to two decimal places</li>
            <li>Verify with official academic records</li>
          </ul>
        </Info>

        {/* FAQ */}
        <Info title="Frequently Asked Questions">
          <p><strong>Is SGPA same as CGPA?</strong><br />No, SGPA is semester-wise.</p>
          <p><strong>Does this work for all colleges?</strong><br />Yes, generally.</p>
          <p><strong>Are lab credits included?</strong><br />Yes, if credit value is entered.</p>
          <p><strong>Is this calculator accurate?</strong><br />Yes, based on inputs.</p>
        </Info>

        {/* RELATED TOOLS */}
        <Info title="Related Tools">
          <ul className="list-disc ml-6 text-blue-600">
            <li>
              <Link href="/tools/cgpa-calculator" className="hover:underline">
                CGPA Calculator
              </Link>
            </li>
            <li>
              <Link href="/tools/percentage-to-cgpa" className="hover:underline">
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
