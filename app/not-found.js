import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-secondary text-gray-700">Page Not Found</h2>
      <Link href="/" className="btn-primary">
        Go Back Home
      </Link>
    </div>
  );
}
