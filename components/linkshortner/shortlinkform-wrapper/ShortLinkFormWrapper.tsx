import LinkForm from "@/components/forms/linkform/LinkForm";

import formWrapperStyles from "./ShortLinkFormWrapper.module.scss";

const ShortLinkFormWrapper = () => {
  return (
    <div className={formWrapperStyles.root}>
      <div className={formWrapperStyles.background}>
        <LinkForm />
      </div>
    </div>
  );
};

export default ShortLinkFormWrapper;
