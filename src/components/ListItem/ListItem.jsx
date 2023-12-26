import { Grid } from "@mui/material";
import Item from "../Item/Item";

const ListItem = ({ products, removeOrder, addToOrder }) => {
  const product = products.map((item) => 
    <Item removeOrder={removeOrder} addToOrder={addToOrder} key={item.id} title={item.title} img={item.img} price={item.price} />
  );

  return (
    <Grid container spacing={2}>
      {product}
    </Grid>

  )
}

export default ListItem;
