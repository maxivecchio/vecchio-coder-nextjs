import { NextResponse } from 'next/server';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { FirestoreDatabase } from '@/firebase/config';

export async function GET(request, { params }) {
    try {
        const q = query(collection(FirestoreDatabase, 'products'), where("slug", "==", params.slug));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            throw new Error('Product not found');
        }
        const docs = querySnapshot.docs.map(doc => doc.data());
        return NextResponse.json(docs);
    } catch (error) {
        return new NextResponse(error.message, { status: 404 });
    }
}
