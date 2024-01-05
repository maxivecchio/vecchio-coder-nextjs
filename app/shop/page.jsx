'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Shop() {
  const router = useRouter();

  useEffect(() => {
    router.push('/shop/all');
  }, [router]);

  return null;
}
