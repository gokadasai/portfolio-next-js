import Backbutton from "@/components/Backbutton";

export default function Contact() {
  return (
    <main className="px-6 py-20">
      <Backbutton />
      <div className="mx-auto max-w-2xl">
        <h1 className="mt-6 text-4xl font-bold">Contact</h1>

        <p className="mt-4 text-gray-600">
          Feel free to reach out to me through email or LinkedIn.
        </p>

        <div className="mt-8 space-y-4">
          {/* Gmail */}
          <a
            href="mailto:gokadasai@gmail.com"
            className="block rounded-xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold">Gmail</h2>

            <p className="mt-1 text-gray-600">gokadasai@gmail.com</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vinay-gokada-919195ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold">LinkedIn</h2>

            <p className="mt-1 text-gray-600">Connect with me on LinkedIn</p>
          </a>
        </div>
      </div>
    </main>
  );
}
