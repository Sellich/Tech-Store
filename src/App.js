
import { Alert, Container, Snackbar } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ListItem from './components/ListItem/ListItem';
import SearchInput from './components/SearchInput/SearchInput';
import ShoppingCart from './components/Shopping-Cart/ShoppingCart';
import data from "./techData";

function App() {
  const [products, setProducts] = useState(data);
  const [search, setSearch] = useState('');
  const [openCart, setOpenCart] = useState(false);
  const [order, setOrder] = useState([]);
  const [totalPrice, setTotalPrice] = useState(null);
  const [snackBuy, setSnackBuy] = useState(false);
  const [snackDelete, setSnackDelete] = useState(false);
  const handleChange = (e) => {
    if (!e.target.value) {
      setProducts(data);
      setSearch('');
      return;
    }
    setSearch(e.target.value);
    setProducts(
      products.filter((product) => product.title.toLowerCase().includes(e.target.value.toLowerCase()))
    );
  }

  const addToOrder = ({ title, price }) => {
    let quantity = 1;
    const indexInOrder = order.findIndex((item) => item.id === title);
    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1;
      setOrder(order.map((item) => {
        if (item.title !== title) return item;
        return { title, quantity, id: title, price };
      }))
    } else {
      setOrder([...order, { title, quantity, id: title, price }]);

    }
    setTotalPrice(totalPrice + price);
    setSnackBuy(true);
  }

  const removeOrder = (id) => {
    setOrder(order.filter((product) => product.title !== id));
    setSnackDelete(true);
  }

  return (
    <div>
      <Header openCart={() => setOpenCart(true)} bangeCount={order.length} />
      <Container sx={{ mt: 2, mb: 2 }}>
        <SearchInput onChange={handleChange} value={search} />
        <ListItem products={products} addToOrder={addToOrder} />
      </Container>
      <ShoppingCart openCart={openCart}
        closeCart={() => setOpenCart(false)} order={order} removeOrder={removeOrder} totalPrice={totalPrice} />
      <Snackbar open={snackBuy} onClose={() => setSnackBuy(false)} autoHideDuration={2000}>
        <Alert variant="filled" severity="success">
          Product in cart!
        </Alert>
      </Snackbar>
      <Snackbar open={snackDelete} onClose={() => setSnackDelete(false)} autoHideDuration={2000}>
        <Alert variant="filled" severity="info">
          Product was delete from cart!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
