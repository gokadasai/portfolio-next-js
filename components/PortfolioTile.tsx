import Link from "next/link";

type PortfolioTileProps = {
  title: string;
  description: string;
  href: string;
};

export default function PortfolioTile({
  title,
  description,
  href,
}: PortfolioTileProps) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-2 text-gray-600">{description}</p>
    </Link>
  );
}