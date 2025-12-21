.product-image-container {
  height: 512px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Default: full image, no background */
.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* When background is required */
.product-image-container.with-bg {
  background-color: #f2f2f2;
}

/* Show full image when bg exists */
.product-image-container.with-bg .product-image {
  object-fit: contain;
}



