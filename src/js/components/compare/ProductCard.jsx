const ProductCard = ({
  product,
  addToCompare,
  removeFromCompare,
  selected
}) => (
  <semantic.Item key={product.name}>
    <semantic.Item.Image size="small" src={product.image} />
    <semantic.Item.Content verticalAlign="middle">
      <semantic.Item.Header>{product.name}</semantic.Item.Header>
      <semantic.Item.Description>Average Review Score: {product.avgRating}</semantic.Item.Description>
      <semantic.Item.Description>Total Reviews: {product.totalrevs}</semantic.Item.Description>
      <semantic.Item.Description>Positive Comments: {product.posC}</semantic.Item.Description>
      <semantic.Item.Description>Negative Comments: {product.negC}</semantic.Item.Description>
      <semantic.Item.Extra>
        {selected && selected.includes(product) ? (
          <semantic.Button color="red" onClick={() => removeFromCompare(product)}>
            Remove
          </semantic.Button>
        ) : (
          <semantic.Button color="blue" onClick={() => addToCompare(product)}>
            Compare
          </semantic.Button>
        )}
      </semantic.Item.Extra>
    </semantic.Item.Content>
  </semantic.Item>
);

export default ProductCard;
