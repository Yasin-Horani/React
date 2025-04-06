import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

function Home() {
  return (
    <main>
      <Header text="header from main" />
      <h1>Hallo wereld</h1>
      <Description />
      <Footer />
    </main>
  );
}

export default Home;
