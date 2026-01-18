import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] px-4">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-5xl font-bold text-white">404</h1>

        <p className="text-lg text-gray-400">
          Sorry for the inconvenience. This GitHub repository is set to private
          and cannot be accessed at the moment.
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-md
            bg-white text-black font-medium
            hover:bg-gray-200 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
