function ListGroup() {
  let items = ["Cippa", "Lippa", "Zippa", "Pippa"];
  //items = [];
  return (
    <>
      <h3>Example List Group</h3>
      {items.length === 0 && <p>No items to display</p>}
      {items.length > 0 && (
        <ul className="list-group">
          {items.map((item, index) => (
            <li className="list-group-item" key={index}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListGroup;
