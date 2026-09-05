import Profile from "@/components/Profile";
import PortfolioTile from "@/components/PortfolioTile";

export default function Home() {
  return (
    <main>
      <Profile />

      <section className="px-6 pb-20">
        <h2 className="text-center text-3xl font-bold">Explore</h2>

        <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-2">
          <PortfolioTile
            title="Experience & Work History"
            description="Explore my professional journey and work experience."
            href="/experience"
          />

          <PortfolioTile
            title="Certifications"
            description="View my professional certifications and achievements."
            href="/certifications"
          />

          {/* <PortfolioTile
            title="Social Media"
            description="Find me across different social platforms."
            href="/socialmedia"
          /> */}

          <PortfolioTile
            title="Contact"
            description="Get in touch with me."
            href="/contact"
          />
        </div>
      </section>
    </main>
  );
}