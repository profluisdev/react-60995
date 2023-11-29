import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
export const CardItem = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7e04dd1b/products/PU392398-03/PU392398-03-1.JPG"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Zapatilla
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Zapatilla Puma
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary" variant='contained'>
        Agregar al carrito
      </Button>
    </CardActions>
  </Card>
  )
}
