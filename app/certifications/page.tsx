import Backbutton from "@/components/Backbutton";

export default function Certifications() {
  return (
    <main className="px-6 py-20">
        <Backbutton />
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold">Certifications</h1>

        <div className="mt-10 space-y-6">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold">
            Adobe Certified Professional - Adobe Experience Manager Assets Developer
            </h2>

            <p className="mt-1 text-sm text-gray-500">Issued Aug 2025</p>

            <p className="mt-4 text-gray-600">
            Adobe
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold">
            Adobe Experience Manager 6.5 - Build Websites and Components
            </h2>

            <p className="mt-1 text-sm text-gray-500">Issued May 2022</p>

            <p className="mt-4 text-gray-600">
              Udemy
            </p>
          </div>



          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold">
            Adobe Professional – Adobe Experience Manager Back-End Developer
            </h2>

            <p className="mt-1 text-sm text-gray-500">Issued May 2020</p>

            <p className="mt-4 text-gray-600">
            Adobe
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}