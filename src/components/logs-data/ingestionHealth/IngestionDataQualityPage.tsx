import Button from "../../props/Button";
import {
  ChevronLeft1Icon,
  ImportIcon,
  MoreIcon,
  Plus1Icon,
  RunIcon,
  TrendIcon,
  ZapIcon,
} from "../../../utils/icons";
import { useNavigate } from "react-router-dom";
import CoverageCount from "../../dashboard/dash-components/CoverageCount";
import DataQualityTable from "../logs-dataComponents/IngestionHealthComponents/DataQualityTable";

const IngestionDataQualityPage = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  return (
    <div className=" bg-surface py-[27px] px-[30px] rounded-[18px] relative flex flex-col gap-8 ">
      {/* ===============Header=============== */}
      <div className="flex flex-col gap-4">
        <div className="text-text-muted text-base leading-6">
          Logs & Data /
          <span className="text-text-muted text-base">
            {" "}
            Ingestion Health /{" "}
          </span>
          <span className="text-text-primary text-base">Data Quality</span>
        </div>
        {/* ====== Back Navigation========*/}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-[18px] hover:opacity-80 transition-all cursor-pointer"
        >
          <ChevronLeft1Icon /> Ingestion Health
        </button>
        {/* ====== Back Navigation========*/}

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1 max-w-[596px]">
            <p className="text-text-primary text-xl ">Data Quality </p>
            <p className="text-text-secondary text-xs">
              Identify parsing failures, missing fields, duplicates, and
              ingestion anomalies that can affect detection accuracy.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div>
              <Button
                paddingX="px-4"
                paddingY="py-2"
                height="min-h-[0px]"
                icon={<ZapIcon className="text-white" />}
              >
                Run Quality Scan
              </Button>
            </div>

            <div>
              <Button
                paddingX="px-4"
                paddingY="py-2"
                height="min-h-[0px]"
                variant="white"
                icon={<ImportIcon />}
              >
                Download Report
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* ===============Header=============== */}

      {/* =========Quality score & Data quality metrices================ */}
      <div className="flex items-center gap-6">
        {/* =======Quality score========== */}
        <div className="bg-surface py-[27px] px-[30px] rounded-[18px] relative shadow-card w-[613px] h-[378px] flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-text-secondary">
              Quality Score
            </p>

            <div className="bg-success rounded-sm py-1 px-2 text-surface tracking-[0.5%] leading-4 text-xs font-semibold flex items-center gap-1">
              <TrendIcon />
              <p>Good</p>
            </div>
          </div>

          {/* border */}
          <div className="border border-border"></div>
          {/* border */}

          <CoverageCount text="Score" borderColor="border-success" textColor="">
            <p className="tracking-[-0.5%] leading-10"> 82 / 100</p>
          </CoverageCount>

          {/* Integrated Trend Graph Section */}
          <div className="flex-grow flex items-end relative h-[140px] mt-2">
            <svg
              viewBox="0 0 100 40"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34A853" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#34A853" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Area Fill - Matches the curve in score.png */}
              <path
                d="M0,32 L15,28 L35,24 L55,23 L75,18 L90,12 L100,5 L100,40 L0,40 Z"
                fill="url(#scoreGradient)"
              />

              {/* Main Trend Line */}
              <path
                d="M0,32 L15,28 L35,24 L55,23 L75,18 L90,12 L100,5"
                fill="none"
                stroke="#34A853"
                strokeWidth="0.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* border */}
          <div className="border border-border"></div>
          {/* border */}

          <div className="text-text-secondary text-xs">
            <p>Most data sources are healthy. Some parsing issues detected.</p>
          </div>
        </div>
        {/* =======Quality score========== */}

        {/* =======Data Quality Metrics========== */}
        <div className="bg-surface py-[27px] px-[30px] rounded-[18px] relative shadow-card w-[1198px] h-[378px] flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-text-secondary">
              Data Quality Metrics
            </p>

            <MoreIcon />
          </div>

          {/* border */}
          <div className="border border-border"></div>
          {/* border */}

          {/* ========coverage count========== */}
          <div className="flex items-center justify-between py-5 ">
            <div className="flex flex-col gap-12">
              <CoverageCount
                text="Parsing Errors"
                borderColor="border-error"
                textColor=""
              >
                <span className="text-2xl tracking-[-0.5%] leading-10 font-bold  text-error">
                  412 errors (↑ 8% today)
                </span>
              </CoverageCount>

              <CoverageCount
                text="Missing Fields"
                borderColor="border-selection"
                textColor=""
              >
                <p className="flex items-center gap-2">
                  {" "}
                  <span className="text-2xl tracking-[-0.5%] leading-10 font-bold  text-selection">
                    6.2% of events missing
                  </span>
                  <span className="rounded-lg bg-text-secondary text-surface py-0.5 px-1.5 text-sm font-normal">
                    src.ip
                  </span>
                </p>
              </CoverageCount>
            </div>

            <div className="flex flex-col gap-12">
              <CoverageCount
                text="Unmapped Logs"
                borderColor="border-text-muted"
                textColor=""
              >
                <span className="text-2xl tracking-[-0.5%] leading-10 font-bold  text-text-muted">
                  14,032 raw logs not mapped to schema
                </span>
              </CoverageCount>

              <CoverageCount
                text="Duplicate Events"
                borderColor="border-selection"
                textColor=""
              >
                <span className="text-2xl tracking-[-0.5%] leading-10 font-bold  text-selection">
                  0.41% duplicates detected
                </span>
              </CoverageCount>
            </div>
          </div>
          {/* ========coverage count========== */}
        </div>

        {/* =======Data Quality Metrics========= */}
      </div>
      {/* ===========Quality score & Data quality metrices=============== */}

      {/* ==========================table============== */}
      <DataQualityTable />
      {/* ==========================table============== */}

      {/* =========AI Analysis============== */}
      <div className="flex flex-col gap-4 bg-surface py-[27px] px-[30px] rounded-[18px] relative shadow-card ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <p className="text-xl font-bold text-text-secondary">AI Analysis</p>
            <div className="flex items-center gap-1">
              <RunIcon className="text-primary-hover" />
              <p className="text-sm text-text-secondary">Apply Suggested Fix</p>
            </div>
            <div className="flex items-center gap-1">
              <Plus1Icon className="text-warning" />
              <p className="text-sm text-text-secondary">View Diff</p>
            </div>
          </div>
          <MoreIcon />
        </div>

        {/* border */}
        <div className="border border-border"></div>
        {/* border */}

        <div className=" bg-default rounded-[18px] border border-border p-5 h-[131px]">
          <p className="font-fira-code w-[933px] leading-6">
            Your Palo Alto firewall logs contain 210 parsing errors. A field
            name appears to have changed (
            <span className="text-success ">src_ip </span>→{" "}
            <span className="text-primary">source.ip</span>). Updating your
            parser will fix this.
          </p>
        </div>
      </div>
      {/* ===========AI Analysis============= */}
    </div>
  );
};

export default IngestionDataQualityPage;
