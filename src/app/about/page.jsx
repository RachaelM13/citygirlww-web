import Image from "next/image";
export default function About() {
  return (
    <main>
      <Image
        src="/g23.png"
        alt="logo"
        width={580}
        height={580}
        style={{ marginTop: "120px" }}
      />
    </main>
  );
}
