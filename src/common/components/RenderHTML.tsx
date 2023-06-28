import { FC } from "react";

const RenderHTML: FC<{ html: string; className?: string }> = ({
  html,
  className = "",
}) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    ></div>
  );
};

export default RenderHTML;
