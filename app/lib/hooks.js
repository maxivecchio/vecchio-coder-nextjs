import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FirestoreDatabase, storage } from "@/firebase/config";
import { v4 as uuidv4 } from "uuid";

import { getDocs, collection, where, query } from 'firebase/firestore'

export function generateSlug(string) {
    return string
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/&/g, '-and-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-');
}

export async function uploadImage(file) {
    if (!file) return;
    const storageRef = ref(storage, "images/" + uuidv4());
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
}

export const slugExists = async (slug) => {
    const q = query(collection(FirestoreDatabase, "products"), where("slug", "==", slug));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
};

export const generateUniqueSlug = async (title) => {
    let slug = generateSlug(title);
    let originalSlug = slug;
    let counter = 2;
    while (await slugExists(slug)) {
        slug = `${originalSlug}-${counter}`;
        counter++;
    }
    console.log(slug)
    return slug;
};

export const handleUpload = async (file) => {
    const url = await uploadImage(file);
    if (url) {
        return url;
    }
};

export function formatNumberToUSStyle(number) {
    if (number) {
        const hasDecimals = number % 1 !== 0;
        return number.toLocaleString("en-US", {
            minimumFractionDigits: hasDecimals ? 2 : 0,
            maximumFractionDigits: hasDecimals ? 2 : 0,
        });
    }
}