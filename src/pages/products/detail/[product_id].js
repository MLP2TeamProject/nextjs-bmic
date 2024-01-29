import React from 'react';
import { useRouter } from 'next/router';

const ProductDetail = () => {
  const router = useRouter();
  const { product_id } = router.query;

  return <div></div>;
};

export default ProductDetail;
