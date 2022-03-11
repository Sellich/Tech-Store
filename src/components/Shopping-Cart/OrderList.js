import { Divider, ListItem, ListItemText, Typography } from "@mui/material";

const OrderList = ({ orders, totalPrice }) => {
   return (
      <div>
         {orders}
         <Divider />
         <ListItem >
            <ListItemText disableTypography primary={<Typography variant="h6" > Total Price: ${totalPrice} </Typography>}>
            </ListItemText>
         </ListItem>
      </div>
   )
}

export default OrderList;