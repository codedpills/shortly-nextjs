import firebase from "./firebaseClient";

import { ShortLinkData } from "@/types/shortLink";

export const db = firebase.firestore();

export const saveShortLink = async (linkData: ShortLinkData) => {
  try {
    await db
      .collection("shortlinks")
      .doc()
      .set({
        ...linkData,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
  } catch (error) {
    throw new Error(error);
  }
};
