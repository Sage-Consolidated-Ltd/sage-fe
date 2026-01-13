interface CoverageProps {
  textColor: string;
  borderColor: string;
  text: string;
  count: string;
}

const CoverageCount = ({
  textColor,
  borderColor,
  text,
  count,
}: CoverageProps) => {
  return (
    <div className={`border-l-5 ${borderColor} w-[210px] px-4`}>
      <p className="text-[20px] text-text-secondary">{text}</p>

      <p
        className={`${textColor} font-bold text-[40px] leading-10 tracking-[-0.5%] mt-4`}
      >
        {count}
      </p>
    </div>
  );
};

export default CoverageCount;
