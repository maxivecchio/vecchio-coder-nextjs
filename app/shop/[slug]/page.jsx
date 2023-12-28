import ProductsList from '@/app/shop/components/ProductsList'

const ShopPage = ({ params }) => {
  return (
    <div className="mt-16">
      <ProductsList slug={params.slug} />
    </div>
  );
};

export default ShopPage;

