import Container from "react-bootstrap/Container";

import ShortLinkList from "./shortlink-list/ShortLinkList";
import ShortLinkFormWrapper from "./shortlinkform-wrapper/ShortLinkFormWrapper";

import linkShortnerStyles from "./LinkShortner.module.scss";

const sampleLinks = [
  {
    id: "sdklk34",
    originalUrl: "https://longlink.com/welsfdsdfdsfdsk",
    shortenedUrl: "https://shrtly/sdlfk",
  },
  {
    id: "34dsfjsdl",
    originalUrl: "https://longlink.com/834rsdfjksdhfdf",
    shortenedUrl: "https://shrtly/3433sd",
  },
  {
    id: "8908sdf",
    originalUrl: "https://longlink.com/09809sdfsde444",
    shortenedUrl: "https://shrtly/898ssd",
  },
];

const LinkShortner = () => {
  return (
    <div className={linkShortnerStyles.root}>
      <div className={linkShortnerStyles.whitebg}></div>
      <div className={linkShortnerStyles.neutralgraybg}></div>
      <Container className={linkShortnerStyles.wrappercontainer}>
        <ShortLinkFormWrapper />
      </Container>
      <div className={linkShortnerStyles.shortlinkscontainer}>
        <Container>
          <ShortLinkList shortlinks={sampleLinks} />
        </Container>
      </div>
    </div>
  );
};

export default LinkShortner;
