import Link from 'next/link'

export default function Layout({ children }) {
    return (
  <div>
    <div className="w-full bg-black/10 p-4 mt-[64px] flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <Link href="/shop/all">All Products</Link>
        <div className="flex items-center justify-center gap-2 sm:gap-4">
        <Link href="/shop/hoodies">Hoodies</Link>
        <Link href="/shop/jackets">Jackets</Link>
        </div>
        <div className="flex items-center justify-center gap-2 sm:gap-4">
        <Link href="/shop/jeans">Jeans</Link>
        <Link href="/shop/t-shirts">T-Shirts</Link>
        </div>
  </div>
      {children}
  </div>
    );
  }
  