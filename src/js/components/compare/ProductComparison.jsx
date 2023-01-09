const style = {
  h1: {
    marginTop: "3em"
  },
  h2: {
    margin: "4em 0em 2em"
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em"
  },
  last: {
    marginBottom: "300px"
  }
};

const products = [
  {
    id: "1",
    name: "Cherry",
    image: "https://www.canr.msu.edu/uploads/236/58624/cherries.jpg",
    price: "£1.99",
    colors: ["red", "green", "blue"],
    condition: "Fresh",
    description: "Two Cherries",
    vendors: ["Fresh Fruits Market", "Fruit Ninja"]
  },
  {
    id: "2",
    name: "Orange",
    image: "https://www.canr.msu.edu/uploads/236/58624/cherries.jpg",
    price: "£2.99",
    colors: ["green", "blue"],
    condition: "Frozen",
    description: "Giant Orange",
    vendors: ["Families Market"]
  },
  {
    id: "3",
    name: "Nuts",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71Y0nx6ayfL._SX425_.jpg",
    price: "£0.99",
    colors: ["red"],
    condition: "Frozen",
    description: "Mixed Nuts",
    vendors: ["Amazon Distributor"]
  },
  {
    id: "4",
    name: "Strawberry",
    image:
      "https://5.imimg.com/data5/CK/LM/MY-46960546/fresh-red-strawberry-500x500.jpg",
    price: "£1.49",
    colors: ["blue"],
    condition: "Fresh",
    description: "Just Strawberry",
    vendors: ["Big Basket"]
  }
];


const ProductComparison = ({ products }) => {
  const [selectedItems, setSelectedItems] = React.useState([]);

  const addToCompare = (item) => {
    setSelectedItems((selectedItems) => [...selectedItems, item]);
  };

  const removeFromCompare = (item) => {
    const filteredItems = selectedItems.filter(
      (product) => product.id !== item.id
    );
    setSelectedItems((selectedItems) => filteredItems);
  };

  


            
  return (
    <div>
      
      {selectedItems.length > 0 && (
        <semantic.Table definition>
          <semantic.Table.Header>
            <semantic.Table.Row>
              <semantic.Table.HeaderCell></semantic.Table.HeaderCell>
              {selectedItems.map((el) => (
                <semantic.Table.HeaderCell key={el.id}>{el.name}</semantic.Table.HeaderCell>
              ))}
            </semantic.Table.Row>
          </semantic.Table.Header>
          <semantic.Table.Body>
            <semantic.Table.Row>
              <semantic.Table.Cell>
                <semantic.Label color="orange" ribbon>
                  Average Review Score
                </semantic.Label>
              </semantic.Table.Cell>
              {selectedItems.map((el) => (
                <semantic.Table.Cell key={el.id}>{el.avgRating}</semantic.Table.Cell>
              ))}
            </semantic.Table.Row>
            <semantic.Table.Row>
              <semantic.Table.Cell>
                <semantic.Label color="teal" ribbon>
                  Total Reviews
                </semantic.Label>
              </semantic.Table.Cell>
              {selectedItems.map((el) => (
                <semantic.Table.Cell key={el.id}>{el.totalrevs}</semantic.Table.Cell>
              ))}
            </semantic.Table.Row>
            <semantic.Table.Row>
              <semantic.Table.Cell>
                <semantic.Label color="teal" ribbon>
                  Positive Comments
                </semantic.Label>
              </semantic.Table.Cell>
              {selectedItems.map((el) => (
                <semantic.Table.Cell key={el.id}>{el.posC}</semantic.Table.Cell>
              ))}
            </semantic.Table.Row>
            <semantic.Table.Row>
              <semantic.Table.Cell>
                <semantic.Label color="pink" ribbon>
                  Negative Comments
                </semantic.Label>
              </semantic.Table.Cell>
              {selectedItems.map((el) => (
                <semantic.Table.Cell key={el.id}>{el.negC}</semantic.Table.Cell>
              ))}
            </semantic.Table.Row>
          </semantic.Table.Body>
        </semantic.Table>
      )}
      <semantic.Grid columns={selectedItems.length} stackable padded divided>
        <semantic.Item.Group>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              selected={selectedItems}
              addToCompare={addToCompare}
              removeFromCompare={removeFromCompare}
            />
          ))}
        </semantic.Item.Group>
      </semantic.Grid>
    </div>

    
  );

  
};

ReactDOM.render(
    <div className="widgets">
        
        <ProductComparison products={dataDB}></ProductComparison>
    </div>,

    document.getElementById('rootCompare')
)


export default ProductComparison;
