'use client'

import {useRouter} from 'next/navigation'

export default function Shop() {
  const router = useRouter()
  router.push('/shop/all')
}
