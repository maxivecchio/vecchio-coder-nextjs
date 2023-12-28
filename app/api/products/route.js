import { NextResponse } from 'next/server';

import { collection, getDocs, getDoc, query, addDoc, doc, updateDoc } from 'firebase/firestore';
import { FirestoreDatabase } from '@/firebase/config'

export async function GET() {
    try {
      const productsQuery = query(collection(FirestoreDatabase, 'products'));
      const productsSnapshot = await getDocs(productsQuery);
      const products = await Promise.all(productsSnapshot.docs.map(async (productDoc) => {
        const productData = productDoc.data();
        const categoryRef = doc(FirestoreDatabase, 'categories', productData.category);
        const categorySnapshot = await getDoc(categoryRef);
        if (!categorySnapshot.exists()) {
          return {
            id: productDoc.id,
            ...productData,
            category: { id: null, name: 'Unknown', slug: 'unknown' }
          };
        }
        return {
          id: productDoc.id,
          ...productData,
 zz          
        };
      }));
      return NextResponse.json(products);
    } catch (error) {
      return NextResponse.json({ success: false, error: error.message });
    }
  }

export async function POST(req) {
    try {
        const productData = await req.json();
        const productsCollectionRef = collection(FirestoreDatabase, 'products');
        await addDoc(productsCollectionRef, productData);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}
