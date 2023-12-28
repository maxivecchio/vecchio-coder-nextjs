import { NextResponse } from 'next/server';

import { collection, getDocs, query } from 'firebase/firestore';
import { FirestoreDatabase } from '@/firebase/config'

export async function GET() {
    try {
        const q = query(collection(FirestoreDatabase, 'categories'));
        const querySnapshot = await getDocs(q);
        const docs = querySnapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            };
        });
        return NextResponse.json(docs);
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}
