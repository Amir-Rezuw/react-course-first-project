import { ReactNode } from "react";

const RightToLeft = ({
  className: styles,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={`${styles} text-right `}
      style={{ direction: "rtl" }}
    >
      {children}
    </div>
  );
};

export default RightToLeft;
