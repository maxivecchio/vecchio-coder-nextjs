import { NextResponse } from 'next/server';

import { collection, getDocs, query } from 'firebase/firestore';
import { FirestoreDatabase } from '@/firebase/config'

export async function GET(request) {
    const q = query(collection(FirestoreDatabase, 'products'));
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs.map(doc => doc.data());
    return NextResponse.json(docs);
}