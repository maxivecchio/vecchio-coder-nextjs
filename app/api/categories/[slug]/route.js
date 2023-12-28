import { NextResponse } from "next/server";
import { FirestoreDatabase } from "@/firebase/config";
import { query, collection, where, getDocs } from "firebase/firestore";

export async function GET(req, {params}) {
    try {
        const slug = params.slug;
        if (!slug) {
            throw new Error("Category slug is required");
        }
        const q = query(
            collection(FirestoreDatabase, 'products'),
            where("category", "==", slug)
        );
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
