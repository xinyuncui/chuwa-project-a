import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const ProductCard = ({ product }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleViewDetails = () => {
    navigate('/detail', { state: { product } }); // Navigate to `/detail` page with product data
  };

  return (
    <Card
      style={{
        width: '242px',
        height: '303px',
        margin: '10px auto',
        boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
        cursor: 'pointer', // Indicate clickable card
      }}
      onClick={handleViewDetails} // Add click event to navigate
    >
      <CardMedia
        component="img"
        height="70%" // Adjust image height to take 70% of the card
        image={product.imageUrl}
        alt={product.name} // Product name as alt text
        style={{ objectFit: 'contain', padding: '5px' }} // Add padding for a clean look
      />
      <CardContent style={{ textAlign: 'left', padding: '10px' }}>
        <Typography variant="subtitle2" style={{ fontSize: '14px', fontWeight: 'normal', marginBottom: '5px' }}>
          {product.name}
        </Typography>
        <Typography variant="h6" color="primary" style={{ fontSize: '16px', marginBottom: '5px' }}>
          ${product.price}
        </Typography>
      </CardContent>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ width: '48%', fontSize: '12px', height: '30px' }} // Shrink button size
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click event
            alert('Added to cart'); // Add to cart functionality
          }}
        >
          Add
        </Button>
        <Button
          variant="outlined"
          size="small"
          style={{ width: '48%', fontSize: '12px', height: '30px' }} // Shrink button size
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click event
            window.location.href = `/edit-product/${product._id}`; // Navigate to edit product page
          }}
        >
          Edit
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;