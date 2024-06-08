import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  const linkStyle = {
    fontSize: "25px",
    fontFamily: "Inria Serif",
    textTransform: "uppercase",
    fontWeight: "Normal",
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#FFFDC8",
        width: "100%",
        height: "150px",
      }}
    >
      <Link href="/" style={linkStyle}>
        HOME
      </Link>
      <Link href="/about" style={linkStyle}>
        ABOUT
      </Link>
      <Image src="/pghcgwwcirclelogo.png" alt="logo" height={175} width={175} />
      <Link href="/social" style={linkStyle}>
        SOCIALS
      </Link>
      <Link href="/merch" style={linkStyle}>
        MERCH
      </Link>
    </nav>
  );
}
