'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Shop() {
  const router = useRouter();

  useEffect(() => {
    router.push('/shop/all');
  }, [router]);

  return null;
}
