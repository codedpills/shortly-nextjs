import LinkForm from "@/components/forms/linkform/LinkForm";

import formWrapperStyles from "./ShortLinkFormWrapper.module.scss";

type ShortLinkFormPropTypes = {
  createShortLink: (linkUrl: string, callback: () => void) => void;
};

const ShortLinkFormWrapper = ({ createShortLink }: ShortLinkFormPropTypes) => {
  return (
    <div className={formWrapperStyles.root}>
      <div className={formWrapperStyles.background}>
        <LinkForm onCreateShortLink={createShortLink} />
      </div>
    </div>
  );
};

export default ShortLinkFormWrapper;
