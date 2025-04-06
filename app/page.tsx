type HeaderParams = {
  text: string;
};

function Header(props: HeaderParams) {
  return <h1>{props.text}</h1>;
}
function Footer() {
  return <h1>Footer</h1>;
}
function List() {
  return (
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
}

function Description() {
  // react fragment <></>
  return (
    <>
      <h2>List of items</h2>
      <List />
    </>
  );
}

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
