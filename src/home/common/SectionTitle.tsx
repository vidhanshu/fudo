import React, { FC } from "react";

const SectionTitle: FC<{
  label: string;
  title: string;
  labelClass?: string;
  titleClass?: string;
  className?: string;
}> = ({ labelClass = "", titleClass = "", className = "", label, title }) => {
  return (
    <div className={className}>
      <p className={`typo-label-section ${labelClass}`}>{label}</p>
      <h1 className={`typo-title-section mt-2 max-w-xl ${titleClass}`}>
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
