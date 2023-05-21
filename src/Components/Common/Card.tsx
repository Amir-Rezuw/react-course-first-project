import { ReactNode } from "react";

const Card = ({
  className: styles,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <div className={`${styles} shadow-primary rounded-xl overflow-hidden`}>
      {children}
    </div>
  );
};

export default Card;
