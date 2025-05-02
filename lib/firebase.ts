import 'server-only';
import { cert, initializeApp, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

const decodedPrivateKey = Buffer.from(process.env.FIREBASE_PRIVATE_KEY_BASE64!, 'base64').toString('utf-8');

export const firebaseCert = cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: decodedPrivateKey,
})

if (!getApps().length) {
    initializeApp({
        credential: firebaseCert,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    });
}

export const db = getFirestore();

export const storage = getStorage().bucket(process.env.FIREBASE_STORAGE_BUCKET!);
// export const storageUrl = `https://firebasestorage.googleapis.com/v0/b/${process.env.FIREBASE_STORAGE_BUCKET}/o/`;