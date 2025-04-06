type HeaderParams = {
  title: string;
  textSub?: string; // Optional title prop
};

function Header({ title, textSub }: HeaderParams) {
  return (
    <>
      <h1>{title}</h1>
      <h3>{textSub}</h3>
    </>
  );
}

export default Header;
