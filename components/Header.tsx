type HeaderParams = {
  title: string;
  textsub?: string; // Optional title prop
};

function Header(props: HeaderParams) {
  return (
    <>
      <h1>{props.title}</h1>
      <h3>{props.textsub}</h3>
    </>
  );
}

export default Header;
