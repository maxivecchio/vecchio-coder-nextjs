import { collection, getDocs, deleteDoc, query, where, updateDoc, getDoc, doc } from 'firebase/firestore';
import { FirestoreDatabase } from '@/firebase/config';
import { NextResponse } from 'next/server';

async function findProductBySlug(slug) {
    const q = query(collection(FirestoreDatabase, 'products'), where("slug", "==", slug));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
        throw new Error('Product not found');
    }
    return querySnapshot.docs[0];
}

async function getProductSlug(params) {
    const slug = params.slug;
    if (!slug) {
        throw new Error("Product slug is required");
    }
    return slug;
}

export async function GET(request, {params}) {
    try {
        const productSlug = await getProductSlug(params);
        const productDoc = await findProductBySlug(productSlug);
        const productData = productDoc.data();

        const categoryRef = doc(FirestoreDatabase, 'categories', productData.category);
        const categorySnapshot = await getDoc(categoryRef);
        if (!categorySnapshot.exists()) {
            productData.category = { id: null, name: 'Unknown', slug: 'unknown' };
        } else {
            const categoryData = categorySnapshot.data();
            productData.category = {
                id: categorySnapshot.id,
                name: categoryData.name,
                slug: categoryData.slug
            };
        }
        return NextResponse.json(productData);
    } catch (error) {
        return new NextResponse(error.message, { status: 404 });
    }
}

export async function PUT(request, {params}) {
    try {
        const productSlug = await getProductSlug(params);
        const doc = await findProductBySlug(productSlug);
        const productDocRef = doc.ref;
        
        await updateDoc(productDocRef, await request.json());
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}

export async function DELETE(request, {params}) {
    try {
        const productSlug = await getProductSlug(params);
        const doc = await findProductBySlug(productSlug);
        await deleteDoc(doc.ref);

        return NextResponse.json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}