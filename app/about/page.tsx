import Link from "next/link";

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>This is the about page of our application.</p>
      <Link href="/"><strong>go to home</strong></Link>
    </div>
  );
}

export default About;
