export async function generateMetadata ({params, searchParams}, parent) {
  return {
    title: `MVShop - ${params.slug}`
  }
}

import ProductsList from '@/app/shop/components/ProductsList'

const ShopPage = ({ params }) => {
  return (
    <div className="mt-16 p-4">
      <ProductsList slug={params.slug} />
    </div>
  );
};

export default ShopPage;

