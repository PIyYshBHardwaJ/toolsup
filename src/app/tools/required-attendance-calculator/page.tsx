'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function RequiredAttendanceCalculatorPage() {
  const [totalClasses, setTotalClasses] = useState<number>(0);
  const [attendedClasses, setAttendedClasses] = useState<number>(0);
  const [requiredPercentage, setRequiredPercentage] = useState<number>(75);
  const [result, setResult] = useState<number | null>(null);

  const calculateRequiredAttendance = () => {
    if (totalClasses <= 0) return;

    let x =
      (requiredPercentage * totalClasses -
        100 * attendedClasses) /
      (100 - requiredPercentage);

    x = Math.ceil(x);
    setResult(x > 0 ? x : 0);
  };

  return (
    <div className="bg-white text-black">
      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* H1 + INTRO */}
        <section className="mb-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Required Attendance Calculator
          </h1>
          <p className="text-gray-600 max-w-3xl">
            This required attendance calculator helps students find out how many
            more classes they must attend to reach the minimum attendance
            percentage required by their college or university.
          </p>
        </section>

        {/* CALCULATOR */}
        <section className="mb-20 bg-gray-50 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
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

            <div>
              <label className="block font-medium mb-2">
                Required Attendance %
              </label>
              <input
                type="number"
                min="1"
                max="100"
                value={requiredPercentage}
                onChange={(e) => setRequiredPercentage(Number(e.target.value))}
                className="border rounded-lg px-4 py-2 w-full"
              />
            </div>
          </div>

          <button
            onClick={calculateRequiredAttendance}
            className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:opacity-90"
          >
            Calculate Required Classes
          </button>

          {result !== null && (
            <div className="mt-8 bg-white border rounded-xl p-5">
              {result === 0 ? (
                <>
                  <p className="text-lg">
                    🎉 You already meet the required attendance!
                  </p>
                </>
              ) : (
                <>
                  <p className="text-lg">
                    You need to attend at least
                  </p>
                  <p className="text-3xl font-bold mt-1">
                    {result} more classes
                  </p>
                  <p className="text-gray-600 mt-1">
                    consecutively to reach {requiredPercentage}% attendance.
                  </p>
                </>
              )}
            </div>
          )}
        </section>

        {/* WHAT IS REQUIRED ATTENDANCE */}
        <Info title="What is Required Attendance?">
          Required attendance refers to the minimum percentage of classes
          a student must attend to be eligible for exams, as set by their
          college or university.
        </Info>

        {/* FORMULA */}
        <Info title="Required Attendance Formula">
          <code className="block bg-gray-100 p-4 rounded-lg mt-2">
            Classes Needed =
            (Required% × Total Classes − 100 × Attended Classes)
            ÷ (100 − Required%)
          </code>
        </Info>

        {/* HOW TO USE */}
        <Info title="How to Use This Required Attendance Calculator">
          <ol className="list-decimal ml-6 space-y-1">
            <li>Enter total number of classes conducted</li>
            <li>Enter number of classes you attended</li>
            <li>Enter required attendance percentage (default 75%)</li>
            <li>Click calculate to see required classes</li>
          </ol>
        </Info>

        {/* EXAMPLE */}
        <Info title="Example Calculation">
          Total classes = 100, attended = 65, required = 75%
          <br />
          You must attend at least <strong>40 more classes</strong> consecutively.
        </Info>

        {/* IMPORTANT NOTES */}
        <Info title="Important Notes">
          <ul className="list-disc ml-6 space-y-1">
            <li>Most Indian colleges require minimum 75% attendance</li>
            <li>Medical exemptions may alter calculations</li>
            <li>Missing future classes will increase required count</li>
            <li>Always confirm rules with your institution</li>
          </ul>
        </Info>

        {/* FAQ */}
        <Info title="Frequently Asked Questions">
          <p>
            <strong>Can I reduce required classes?</strong><br />
            Only if attendance rules allow condonation.
          </p>
          <p>
            <strong>Does this include labs?</strong><br />
            Yes, if labs are included in total classes.
          </p>
          <p>
            <strong>Is this calculation accurate?</strong><br />
            Yes, it follows standard attendance math.
          </p>
        </Info>

        {/* RELATED TOOLS */}
        <Info title="Related Tools">
          <ul className="list-disc ml-6 text-blue-600">
            <li>
              <Link href="/tools/attendance-percentage-calculator" className="hover:underline">
                Attendance Percentage Calculator
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
