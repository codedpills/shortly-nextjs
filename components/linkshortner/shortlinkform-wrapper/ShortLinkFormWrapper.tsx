import LinkForm from "@/components/forms/linkform/LinkForm";

import formWrapperStyles from "./ShortLinkFormWrapper.module.scss";

const ShortLinkFormWrapper = ({ createShortLink }) => {
  return (
    <div className={formWrapperStyles.root}>
      <div className={formWrapperStyles.background}>
        <LinkForm onCreateShortLink={createShortLink} />
      </div>
    </div>
  );
};

export default ShortLinkFormWrapper;
