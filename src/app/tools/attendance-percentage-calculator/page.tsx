'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function AttendanceCalculatorPage() {
  const [totalClasses, setTotalClasses] = useState<number>(0);
  const [attendedClasses, setAttendedClasses] = useState<number>(0);
  const [attendance, setAttendance] = useState<number | null>(null);

  const calculateAttendance = () => {
    if (totalClasses <= 0 || attendedClasses < 0) return;
    const percent = (attendedClasses / totalClasses) * 100;
    setAttendance(Number(percent.toFixed(2)));
  };

  return (
    <div className="bg-white text-black">
      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* H1 + INTRO */}
        <section className="mb-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Attendance Percentage Calculator
          </h1>
          <p className="text-gray-600 max-w-3xl">
            This attendance percentage calculator helps students quickly
            calculate their attendance based on total classes conducted
            and classes attended, as required by most colleges and universities.
          </p>
        </section>

        {/* CALCULATOR */}
        <section className="mb-20 bg-gray-50 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block font-medium mb-2">
                Total Classes Conducted
              </label>
              <input
                type="number"
                min="0"
                value={totalClasses}
                onChange={(e) => setTotalClasses(Number(e.target.value))}
                className="border rounded-lg px-4 py-2 w-full"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Classes Attended
              </label>
              <input
                type="number"
                min="0"
                value={attendedClasses}
                onChange={(e) => setAttendedClasses(Number(e.target.value))}
                className="border rounded-lg px-4 py-2 w-full"
              />
            </div>
          </div>

          <button
            onClick={calculateAttendance}
            className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:opacity-90"
          >
            Calculate Attendance
          </button>

          {attendance !== null && (
            <div className="mt-8 bg-white border rounded-xl p-5">
              <p className="text-lg">Your Attendance Percentage is</p>
              <p className="text-3xl font-bold mt-1">{attendance}%</p>
            </div>
          )}
        </section>

        {/* WHAT IS ATTENDANCE */}
        <Info title="What is Attendance Percentage?">
          Attendance percentage shows how many classes a student has attended
          out of the total classes conducted, expressed as a percentage.
        </Info>

        {/* FORMULA */}
        <Info title="Attendance Percentage Formula">
          <code className="block bg-gray-100 p-4 rounded-lg mt-2">
            Attendance % = (Classes Attended ÷ Total Classes) × 100
          </code>
        </Info>

        {/* HOW TO USE */}
        <Info title="How to Use This Attendance Calculator">
          <ol className="list-decimal ml-6 space-y-1">
            <li>Enter total classes conducted</li>
            <li>Enter number of classes attended</li>
            <li>Click calculate</li>
            <li>View your attendance percentage instantly</li>
          </ol>
        </Info>

        {/* EXAMPLE */}
        <Info title="Example Calculation">
          If total classes are 80 and you attended 68 classes:
          <br />
          (68 ÷ 80) × 100 = <strong>85%</strong>
        </Info>

        {/* IMPORTANT NOTES */}
        <Info title="Important Notes">
          <ul className="list-disc ml-6 space-y-1">
            <li>Most colleges require 75% attendance or more</li>
            <li>Attendance rules may vary by institution</li>
            <li>Medical leaves may be handled separately</li>
            <li>Always verify with official college records</li>
          </ul>
        </Info>

        {/* FAQ */}
        <Info title="Frequently Asked Questions">
          <p>
            <strong>Is 75% attendance mandatory?</strong><br />
            In most Indian universities, yes.
          </p>
          <p>
            <strong>Does this calculator include lab attendance?</strong><br />
            It can, if labs are included in total classes.
          </p>
          <p>
            <strong>Is this calculator accurate?</strong><br />
            Yes, it uses the standard attendance formula.
          </p>
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
