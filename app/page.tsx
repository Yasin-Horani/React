import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

function Home() {
  let hiedeDescription = true;
  return (
    <main>
      <Header title="Title" textSub="text sub" />
      {hiedeDescription && <Description />}  {/* if true, show description*/}
      <Footer />
    </main>
  );
}

export default Home;
