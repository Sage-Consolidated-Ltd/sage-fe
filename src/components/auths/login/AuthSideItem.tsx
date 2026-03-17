import { getImageSrc } from "../../../utils/imageUtils";

interface AuthSideItemProps {
  img?: string;
}
const AuthSideItem = ({ img = "authimg.svg" }: AuthSideItemProps) => {
  return (
    <div className="py-24 px-16 flex flex-col gap-y-8 text-white justify-between h-full">
      <div>
        <h1 className="font-bold text-[32px] leading-10">
          Precision email marketing for every business.
        </h1>
        <p className="leading-[22px] pt-1">
          Enter your email address to begin your account setup
        </p>
      </div>

      {/* img */}
      <div>
        <div>
          <img src={getImageSrc(img)} alt="" />
        </div>
      </div>

      {/* testimonial slider */}
      <div className=" flex flex-col gap-y-6">
        {/* text */}
        <p className="text-sm">
          “ReniMail has transformed our email marketing. The intuitive
          drag-and-drop builder let our team create engaging campaigns in
          minutes, and we saw open-rates jump by over 25% within the first
          month.”
        </p>

        {/* details */}
        <div className="flex items-center gap-2">
          {/* avatar */}
          <div>
            <div className=" w-10 aspect-square rounded-full overflow-hidden">
              <img
                src={getImageSrc("avatar.png")}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* name/ title */}
          <div className="text-sm leading-3.5">
            <p>Phile Harden</p>
            <p className="text-white/60">CEO and Founder, Aesthetics</p>
          </div>

          {/* indicators */}
        </div>
      </div>
    </div>
  );
};

export default AuthSideItem;
