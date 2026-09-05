import Image from "next/image";

export default function Profile() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <Image
        src="/images/profile.png"
        alt="Vinay Gokada"
        width={160}
        height={160}
        className="mb-6 rounded-full object-cover"
      />

      <h1 className="text-5xl font-bold tracking-tight">
        Hi, I'm Vinay
      </h1>

      <p className="mt-4 text-xl text-gray-600">
        Senior Associate Technology L2
      </p>

      <p className="mt-6 max-w-2xl text-gray-600">
      AEM Lead with 8 years of experience building scalable enterprise solutions and modern digital experiences. Specialized in AEM Cloud, headless architecture, Java, Groovy, and modern front-end integrations, with a passion for solving complex problems and delivering innovative solutions.

      </p>
    </section>
  );
}