import Link from 'next/link';

const Products = () => {
  return (
    <div>
      <h2>제품 페이지</h2>
      <Link href={'/products/detail'} />
      <Link href={'/products/bidding'} />
    </div>
  );
};
export default Products;
