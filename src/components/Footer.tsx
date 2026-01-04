import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-700">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Brand */}
          <div>
            <h3 className="font-semibold text-black mb-2">Toolup</h3>
            <p>
              Free online calculators and useful tools for students, finance,
              health, and everyday needs.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold text-black mb-2">Tools</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/tools/cgpa-calculator" className="hover:underline">
                  CGPA Calculator
                </Link>
              </li>
              <li className="text-gray-400">More tools coming soon</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-black mb-2">Company</h3>
            <ul className="space-y-1">
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-8 text-center text-gray-500">
          © {new Date().getFullYear()} Toolup. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
