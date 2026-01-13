import React from "react";
import Card from "../../props/Card";
import { getImageSrc } from "../../../utils/imageUtils";
import { DownTrendIcon } from "../../../utils/icons";
import { Link } from "react-router-dom";

const IdentityCard = () => {
  return (
    <>
      <Card className="flex flex-col gap-y-6">
        <Card.Header>
          <div className="flex items-center gap-1.5">
            <div>
              <img src={getImageSrc("sh.svg")} alt="shield image" />
            </div>
            <p className="text-[#030001] text-[20px]">
              Identity & Access Health
            </p>
          </div>

          <div className="flex items-center gap-1 bg-warning text-white text-xs py-1 px-2 rounded-sm font-semibold">
            <DownTrendIcon />
            <p>77%</p>
          </div>
        </Card.Header>

        <Card.Body>
          <p className="text-sm">
            Unprotected assets are more likely to be compromised. Recommended
            coverage target is 95%+.
          </p>

          <div className="flex flex-col gap-y-3 mt-6">
            <div className="flex items-center gap-x-1.5">
              <div className="w-[7px] h-[19px] bg-error"></div>
              <p className="text-sm">14 accounts without MFA</p>
            </div>

            <div className="flex items-center gap-x-1.5">
              <div className="w-[7px] h-[19px] bg-warning"></div>
              <p className="text-sm">“8 dormant accounts</p>
            </div>

            <div className="flex items-center gap-x-1.5">
              <div className="w-[7px] h-[19px] bg-error"></div>
              <p className="text-sm">22 with elevated privileges</p>
            </div>
          </div>
        </Card.Body>

        <Card.Footer>
          <Link to={""} className="text-sm underline text-text-secondary">
            View Identity Risks
          </Link>
        </Card.Footer>
      </Card>
    </>
  );
};

export default IdentityCard;
