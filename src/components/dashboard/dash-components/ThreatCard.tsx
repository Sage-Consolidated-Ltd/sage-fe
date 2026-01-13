import React from "react";
import Card from "../../props/Card";
import { getImageSrc } from "../../../utils/imageUtils";
import { Link } from "react-router-dom";
import CoverageCount from "./CoverageCount";

const ThreatCard = () => {
  return (
    <>
      <Card className="flex flex-col gap-y-6">
        <Card.Header>
          <div className="flex items-center gap-1.5">
            <div>
              <img src={getImageSrc("sh.svg")} alt="shield image" />
            </div>
            <p className="text-[#030001] text-[20px]">
              Threat Intelligence Feeds
            </p>
          </div>

          <div className="flex items-center gap-1 bg-success text-white text-xs py-1 px-2 rounded-sm font-semibold">
            <p>245,000 / 24h</p>
          </div>
        </Card.Header>

        <Card.Body>
          <p className="text-sm">
            Feeds enrich detections with global threat context. Ensure all feeds
            are active for full coverage.
          </p>

          <div className="mt-7 flex flex-wrap">
            <CoverageCount
              text="Active"
              count="13"
              textColor="text-success"
              borderColor="border-success"
            />
            <CoverageCount
              text="Inactive"
              count="3"
              textColor="text-text-muted"
              borderColor="border-text-muted"
            />
          </div>
        </Card.Body>

        <Card.Footer>
          <Link to={""} className="text-sm underline text-text-secondary">
            Manage Feeds
          </Link>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ThreatCard;
