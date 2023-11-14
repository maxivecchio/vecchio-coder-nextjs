import Link from 'next/link'
import {AiOutlineStar} from 'react-icons/ai'
import products from "@/app/data/productos";
import ProductCard from '@/app/components/ProductCard';

export default function ProductoCard() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
