import { Link } from "react-router-dom";

interface AuthFooterProps {
  single: boolean;
}
const AuthFooter = ({ single = true }: AuthFooterProps) => {
  return (
    <div
      className={`flex text-sm sm:text-base text-text-primary items-center ${single ? "justify-center" : "justify-between flex-wrap gap-2"}`}
    >
      <p>
        ©{" "}
        <Link to="/" className="underline ">
          Sage Consolidated
        </Link>
        , 2025 All rights Reserved.
      </p>
      {!single && (
        <div className="flex gap-x-4">
          <Link to="/privacy" className="underline">
            Privacy
          </Link>
          <Link to="/terms" className="underline">
            Terms
          </Link>
        </div>
      )}
    </div>
  );
};

export default AuthFooter;
