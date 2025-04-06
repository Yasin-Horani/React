import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

function Home() {
  return (
    <main>
      <Header title="Title" textSub="text sub" />
      <Link href="/about">about</Link>
      <Description />
      <Footer />
    </main>
  );
}

export default Home;
   