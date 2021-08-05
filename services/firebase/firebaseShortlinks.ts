import firebase from './firebaseClient';

import { ShortLinkData } from '@/types/shortLink';

export const db = firebase.firestore();

export const saveShortLink = async (linkData: ShortLinkData) => {
    try {
        await db.collection("shortlinks").doc().set(linkData);
    } catch (error) {
        throw new Error(error);
    }
}
