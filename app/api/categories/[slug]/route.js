import { NextResponse } from "next/server";
import { FirestoreDatabase } from "@/firebase/config";
import { query, collection, where, getDocs } from "firebase/firestore";

export async function GET(req, {params}) {
    try {
        const slug = params.slug;
        if (!slug) {
            throw new Error("Category slug is required");
        }

        const categoryQuery = query(
            collection(FirestoreDatabase, 'categories'),
            where("slug", "==", slug)
        );
        const categorySnapshot = await getDocs(categoryQuery);

        if (categorySnapshot.empty) {
            throw new Error("Category not found");
        }

        const categoryId = categorySnapshot.docs[0].id;
        console.log(categoryId)
        const productsQuery = query(
            collection(FirestoreDatabase, 'products'),
            where("category", "==", categoryId)
        );
        const productsSnapshot = await getDocs(productsQuery);
        const products = productsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        console.log(products)
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}

