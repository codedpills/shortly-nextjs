import { useState, useEffect } from "react";

import { createShortLink } from "@/services/api/shortlinksApi";
import { saveShortLink } from "@/services/firebase/firebaseShortlinks";
import { db } from "@/services/firebase/firebaseShortlinks";

import Container from "react-bootstrap/Container";

import ShortLinkList from "./shortlink-list/ShortLinkList";
import ShortLinkFormWrapper from "./shortlinkform-wrapper/ShortLinkFormWrapper";

import linkShortnerStyles from "./LinkShortner.module.scss";
import { ShortLinks } from "@/types/shortLink";

const LinkShortner = () => {
  const [shortlinks, setShortlinks] = useState<{ id: string }[]>([]);

  useEffect(() => {
    const fetchSavedShortLinks = () => {
      db.collection("shortlinks").onSnapshot(
        (snapshot) => {
          const shortLinksData = snapshot.docs.map((link) => ({
            id: link.id,
            ...link.data(),
          }));
          setShortlinks(shortLinksData);
        },
        (error) => {
          console.log(error);
        }
      );
    };

    fetchSavedShortLinks();
  }, []);

  const handleCreateShortLink = async (
    link: string,
    clearLinkForm: () => void
  ) => {
    const res = await createShortLink(link);
    const linkInfo = res.data.result;
    const newLink = {
      originalUrl: linkInfo.original_link,
      shortenedUrl: linkInfo.full_short_link,
      shortCode: linkInfo.code,
    };

    saveShortLink(newLink);
    clearLinkForm();
  };

  return (
    <div className={linkShortnerStyles.root}>
      <div className={linkShortnerStyles.whitebg}></div>
      <div className={linkShortnerStyles.neutralgraybg}></div>
      <Container className={linkShortnerStyles.wrappercontainer}>
        <ShortLinkFormWrapper createShortLink={handleCreateShortLink} />
      </Container>
      <div className={linkShortnerStyles.shortlinkscontainer}>
        <Container>
          <ShortLinkList shortlinks={shortlinks} />
        </Container>
      </div>
    </div>
  );
};

export default LinkShortner;
