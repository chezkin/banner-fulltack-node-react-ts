import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Product } from '../../types/ProductInterface';

interface ProductCardProps {
  product: Product;
}

const CardProduct: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card sx={{ width: '250px', height: '500px', margin: 2 }}>
      <CardMedia
        sx={{
          top: 0,
          objectFit: 'cover',
          maxWidth: '100%',
          display: 'inline-block',
          verticalAlign: 'bottom'
        }}
        component="img"
        height="35%"
        image={product.image.url} // Replace with your product image URL
        alt={product.image.alt}
      />
      <CardContent sx={{
        flexDirection: 'column',
        background: '#f0f0f0',
        height: '60%',
        display: 'flex',
        padding: '16px',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'left'
      }}>
        <Box sx={{ height: '100px' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ margin: '4px' }} >
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary"
            sx={{ display: 'flex', margin: '4px' ,
            lineHeight: '1.5',
            fontSize: '1rem',
            fontFamily: 'Public Sans,sans-serif'}}>
            {product.description}
          </Typography>
          {product.salePrice !== undefined && (
            <Typography variant="h6" color="text.secondary" gutterBottom sx={{ margin: '4px' }} >
              ${product.salePrice.toFixed(2)}
            </Typography>
          )}
          {product.discountPercentage > 0 && (
            <Typography color="error" variant="body2" gutterBottom sx={{ margin: '4px' }} >
              {product.discountPercentage}% off
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
export default CardProduct;
