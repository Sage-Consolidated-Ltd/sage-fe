import { TrendIcon } from "../../../utils/icons";
import { getImageSrc } from "../../../utils/imageUtils";
import Button from "../../props/Button";
import ScoreGauge from "./ScoreGauge";

interface dashboardProps {
  count: number;
}

const OverallSecurity = ({ count }: dashboardProps) => {
  return (
    <div
      className={`relative rounded-[18px] py-4.5 px-6 bg-[linear-gradient(99.61deg,#6344E7_-22.35%,#F6F7FC_30.1%,#FDE1B9_82.54%)]`}
    >
      {/* header */}
      <div className="flex items-center gap-1.5">
        <div>
          <img src={getImageSrc("sh.svg")} alt="shield image" />
        </div>
        <p className="text-[#030001] text-[20px]">Overall Security Score</p>
      </div>

      {/* others */}
      <div className="flex items-center justify-between gap-[88px]">
        {/* gauge */}
        <div>
          <div className="relative w-fit">
            <ScoreGauge score={90} size={160} strokeWidth={16} />

            <div className="absolute top-1/2 left-10 flex flex-col items-center justify-center text-center text-[#030001]">
              <p className="text-[20px] ">90%</p>
              <div className="flex items-center gap-[5px]">
                <TrendIcon className="text-[#38A169]" />
                <p className="text-xs">+4 points</p>
              </div>
            </div>
          </div>

          <p className="text-xs mt-7">
            Your posture has improved by +4 points this week.
          </p>
        </div>

        {/* security score */}
        <div className="text-[#030001] flex flex-col gap-y-3.5 relative z-10">
          <p className="">
            Security score is calculated from vulnerabilities, configuration
            health, threat coverage, and response readiness.
          </p>

          <p className="bg-white py-1 px-2 text-sm rounded-sm w-fit">
            Improve by addressing 3 critical misconfigurations.
          </p>

          <div className="w-fit">
            <Button format="capitalized" textSize="text-sm" font="font-normal">
              View Recommendations
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute right-5 top-7">
        <img src={getImageSrc("illust.png")} alt="" />
      </div>
    </div>
  );
};

export default OverallSecurity;
