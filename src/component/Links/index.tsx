import Link, { LinkProps } from "next/link";
import React, { ReactElement, ReactNode } from "react";

interface LinksProps extends LinkProps {
  rel?: string;
  title?: string;
  target?: string;
  className?: string;
  styles?: React.CSSProperties;
  children?: ReactNode | ReactElement | ReactElement[] | undefined;
}

const Links = (props: LinksProps) => <Link {...props} />;

export default Links;
