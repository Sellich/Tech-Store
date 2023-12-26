import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const Item = ({ img, price, title, addToOrder }) => {
  return (
    <>
      <Grid item xs={12} lg={4}>
        <Card variant="outlined">
          <CardMedia
            component="img"
            image={img}
            alt="pc"
          />
          <CardContent>
            <Typography >
              {title}
            </Typography>
            <Typography variant='h6' sx={{ mt: 2 }}>
              ${price}
            </Typography>
          </CardContent>
          <CardActions >
            <Button size="large"
              onClick={() =>
                addToOrder({ price, title })

              }> BUY </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  )
}

export default Item;
