import { ListItem, ListItemButton, ListItemText } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

const OrderItem = ({ title, removeOrder, quantity, id, price }) => {
   return (
      <ListItem>
         <ListItemText>
            {title} x{quantity} ${price * quantity}
         </ListItemText>
         <ListItemButton>
            <DeleteIcon onClick={() => removeOrder(id)} />
         </ListItemButton>
      </ListItem>
   )
}

export default OrderItem;