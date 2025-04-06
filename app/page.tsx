import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

function Home() {
  return (
    <main>
      <Header title="Title" textSub="text sub" />
      <Link href="/about">
        <strong>About</strong>
      </Link>
      <br />
      <Link href="/hooksPage">
        <strong>Hooks</strong>
      </Link>
      <Description />
      <Footer />
    </main>
  );
}

export default Home;
