import { fontK2dMedium, fontKantumruy_ProBold } from "../Fonts";

type SectionTitlePropsType = {
  title: string;
  preTitle?: string;
  color: 'light' | 'dark'
};

const SectionTitle = ({ title, preTitle, color = 'dark' }: SectionTitlePropsType) => {
  return (
    <>
      {preTitle && <p className={`text-center capitalize font-semibold text-sm ${fontKantumruy_ProBold.className} ${color === 'light' ? "text-redesignWhite" : ""}`}>{preTitle}</p>}
      <h2
        className={`text-center text-darkText text-6xl capitalize ${color === 'light' ? "text-redesignWhite" : ""} ${fontK2dMedium.className}`}
      >
        {title}
      </h2>
    </>
  );
};

export default SectionTitle;
