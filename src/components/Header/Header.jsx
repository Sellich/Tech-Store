import { AppBar, Badge, Box, Container, IconButton, Toolbar, Typography } from "@mui/material"
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Header = ({ openCart, bangeCount }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Container >
          <Toolbar >
            <LaptopChromebookIcon sx={{ mr: 2 }} />
            <Typography variant="h6" component="h3" sx={{ flexGrow: 1 }}>
              Tech-Store
            </Typography>
            <IconButton onClick={openCart}>
              <Badge badgeContent={bangeCount} color="success">
                <ShoppingBagIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header;
