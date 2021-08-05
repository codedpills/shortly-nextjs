import { ShortLinks } from "@/types/shortLink";

import ShortLinkItem from "../shortlink-item/ShortLinkItem";

type ShortLinkListProp = {
  shortlinks: ShortLinks;
};

const ShortLinkList = ({ shortlinks }: ShortLinkListProp) => {
  const linksList = shortlinks?.map((linkInfo) => {
    return <ShortLinkItem key={linkInfo.id} shortLinkInfo={linkInfo} />;
  });
  return <div>{linksList}</div>;
};

export default ShortLinkList;
