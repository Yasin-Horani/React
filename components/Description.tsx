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

  export default Description;