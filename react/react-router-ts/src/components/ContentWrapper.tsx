import { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

function ContentWrapper({ children, className = "" }: Props): ReactElement {
  return <main className={`content ${className}`}>{children}</main>;
}

export default ContentWrapper;
