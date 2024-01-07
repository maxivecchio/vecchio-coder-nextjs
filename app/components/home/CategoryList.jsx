import Link from 'next/link'
const CategoryList = () => {
  return (
    <div className="container py-16 mx-auto">
      <h2 className="text-2xl sr-only font-medium text-foregound mb-14">
        Categorías
      </h2>
      <div className="grid text-white grid-cols-1 sm:grid-cols-2 grid-rows-8 h-[70vh] gap-2">
        <div className="col-span-1 row-span-2 sm:row-span-3 bg-cover hover:opacity-80 bg-no-repeat bg-center hover:cursor-pointer bg-[url(/images/category/hoodie.jpg)]">
          <Link href="/shop/hoodies" className="w-full h-full bg-black/50 flex flex-col items-center justify-center">
            <p className="text-xl text-foregound text-center">Category</p>
            <p className="text-2xl font-medium text-foregound text-center">
              Hoodies
            </p>
          </Link>
        </div>
        <div className="col-span-1 row-span-2 sm:row-span-4 bg-cover hover:opacity-80 bg-no-repeat bg-center hover:cursor-pointer bg-[url(/images/category/jackets.webp)]">
          <Link href="/shop/jackets" className="w-full h-full bg-black/50 flex flex-col items-center justify-center">
            <p className="text-xl text-foregound text-center">Category</p>
            <p className="text-2xl font-medium text-foregound text-center">
              Jackets
            </p>
          </Link>
        </div>
        <div className="col-span-1 row-span-2 sm:row-span-4 bg-cover hover:opacity-80 bg-no-repeat bg-center hover:cursor-pointer bg-[url(/images/category/jeans.jpg)]">
        <Link href="/shop/jeans" className="w-full h-full bg-black/50 flex flex-col items-center justify-center">
            <p className="text-xl text-foregound text-center">Category</p>
            <p className="text-2xl font-medium text-foregound text-center">
              Jeans
            </p>
          </Link>
        </div>
        <div className="col-span-1 row-span-2 sm:row-span-3 bg-cover hover:opacity-80 bg-no-repeat bg-center hover:cursor-pointer bg-[url(/images/category/tshirt.jpg)]">
        <Link href="/shop/t-shirts" className="w-full h-full bg-black/50 flex flex-col items-center justify-center">
            <p className="text-xl text-foregound text-center">Category</p>
            <p className="text-2xl font-medium text-foregound text-center">
              T-Shirts
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
