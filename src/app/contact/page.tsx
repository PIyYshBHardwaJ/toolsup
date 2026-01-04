export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-6 py-16 text-black">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <p className="text-gray-700 mb-4">
          If you have any questions, suggestions, or feedback regarding Toolup,
          feel free to reach out to us.
        </p>

        <p className="text-gray-700 mb-4">
          We welcome feedback that helps us improve our tools and provide
          a better experience for users.
        </p>

        <p className="text-gray-700">
          📧 Email us at:{" "}
          <a
            href="mailto:contact@toolup.com"
            className="text-blue-600 underline"
          >
            piyush.pb.2005@gmail.com
          </a>
        </p>
      </main>
    </div>
  );
}
