import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import OrderItem from "./OrderItem";
import OrderList from "./OrderList";


const ShoppingCart = ({ openCart, closeCart, order, removeOrder, totalPrice }) => {

   const orders = order.map((item) =>
      <OrderItem
         id={item.id}
         key={item.id}
         title={item.title}
         quantity={item.quantity}
         removeOrder={removeOrder}
         price={item.price} />)
   return (
      <Drawer
         anchor="right"
         open={openCart}
         onClose={closeCart}

      >

         <List sx={{ width: 300 }} sm={{ width: 200 }}>
            {!order.length ? <ListItem> <ListItemText sx={{ textAlign: 'center' }}> Cart empty </ListItemText> </ListItem> :
               <OrderList orders={orders} totalPrice={totalPrice} />}
         </List>
      </Drawer >
   )
}

export default ShoppingCart;