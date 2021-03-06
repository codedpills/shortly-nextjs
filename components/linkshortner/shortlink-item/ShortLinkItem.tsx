import { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ShortLinkData } from "@/types/shortLink";

import shortLinkItemStyles from "./ShortLinkItem.module.scss";

type ShortLinkItemProp = {
  shortLinkInfo: ShortLinkData;
};

const ShortLinkItem = ({
  shortLinkInfo = { originalUrl: "very long link", shortenedUrl: "short link" },
}: ShortLinkItemProp) => {
  const { originalUrl, shortenedUrl } = shortLinkInfo;
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortenedUrl || "");
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
      }, 1500);
    } catch (error) {
      setCopySuccess(false);
    }
  };

  return (
    <Card className={shortLinkItemStyles.card} data-testid="Shortlink_item">
      <Row>
        <Col xs={12} md={7}>
          <div className={shortLinkItemStyles.originalUrl}>{originalUrl}</div>
        </Col>
        <Col xs={12} md={3}>
          <div className={shortLinkItemStyles.shortenedUrl}>{shortenedUrl}</div>
        </Col>
        <Col xs={12} md={2}>
          <Button
            className={`btn btn-custom-primary-small btn-block ${
              copySuccess && shortLinkItemStyles.activebtn
            }`}
            onClick={copyToClipboard}
          >
            {!copySuccess ? "Copy" : "Copied"}
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default ShortLinkItem;
