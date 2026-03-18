import { EditIcon } from "../../../../utils/icons";
import { getImageSrc } from "../../../../utils/imageUtils";

const ProfileHeader = () => {
  const highGrainSvg = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.80' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E`;

  return (
    <div className="flex flex-col items-center w-full relative">
      {/* --- BANNER --- */}
      <div className="relative w-full h-[200px] rounded-3xl overflow-hidden bg-[linear-gradient(99.61deg,#6344E7_-22.35%,#F6F7FC_30.1%,#FDE1B9_82.54%)]">
        {/* THE GRAIN LAYER */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("${highGrainSvg}")`,
            // Increase opacity to see it more clearly (64% density/opacity feel)
            opacity: 0.45,
            // Overlay makes it look like physical texture
            mixBlendMode: "overlay",
            // Upscale the noise slightly to make it "sharper"
            filter: "contrast(150%) brightness(100%)",
          }}
        />
      </div>

      {/* --- AVATAR SECTION (Overlap) --- */}
      <div className="absolute -bottom-28 flex flex-col items-center">
        <div className="relative w-[157px] aspect-square rounded-full p-1 bg-[linear-gradient(139.7deg,#FF9000_4.46%,#6344E7_55.5%,#FA4F19_106.54%)]">
          <div className="w-full h-full rounded-full bg-white overflow-hidden">
            <img
              src={getImageSrc("avatar.png")}
              className="w-full h-full object-cover"
              alt="User avatar"
            />
          </div>

          {/* edit button */}
          <div className="absolute right-0 bottom-0">
            <button className="bg-white w-[42px] aspect-square rounded-full cursor-pointer flex items-center justify-center shadow-input">
              <EditIcon className="w-[18px] h-[18px] text-primary-hover" />
            </button>
          </div>
        </div>

        <div className="mt-3 text-center">
          <h1 className="text-[20px] font-bold text-text-primary">
            Andrew Smith
          </h1>
          <p className="text-text-secondary mt-3">a.smith@acmecorp.com</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
