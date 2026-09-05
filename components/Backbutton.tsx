import Link from "next/link";

export default function Backbutton() {
  return (
    <Link
      href="/"
      className="
        inline-flex items-center gap-2
        rounded-lg border border-gray-200
        px-4 py-2
        text-sm font-medium text-gray-600
        shadow-sm
        transition-all duration-200
        hover:-translate-x-1
        hover:border-gray-300
        hover:bg-gray-50
        hover:text-gray-900
        hover:shadow-md
      "
    >
      <span className="text-lg">&lt;</span>
    </Link>
  );
}