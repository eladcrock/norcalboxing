import type { ImgHTMLAttributes } from "react";
import yelpLogo from "@/assets/yelp-logo.svg";

const YelpIcon = ({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={yelpLogo} alt="Yelp" className={className} {...props} />
);

export default YelpIcon;
