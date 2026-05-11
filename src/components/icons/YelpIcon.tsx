import type { SVGProps } from "react";

/**
 * Yelp "badge" mark: a round outline with the Yelp burst inside.
 * Uses currentColor so it inherits the surrounding text color.
 */
const YelpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
    {...props}
  >
    <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="1.75" fill="none" />
    <g transform="translate(4 4) scale(1)" fill="currentColor">
      <path d="M18.13 16.79l-3.33-.96a.885.885 0 0 0-1.114 1.028l.573 3.438a.886.886 0 0 0 1.52.447l2.324-2.365a.88.88 0 0 0-.097-1.337.873.873 0 0 0-.318-.162l.442.911-.001-1zm-4.973.467l-.756-6.567a.886.886 0 0 0-1.037-.764 4.643 4.643 0 0 0-.991.34 4.722 4.722 0 0 0-2.656 3.91.887.887 0 0 0 .67.914l4.343 1.121a.443.443 0 0 0 .534-.534.44.44 0 0 0-.107-.166v-.001zm-.04 2.633l-2.44 1.16a.886.886 0 0 0-.27 1.405c.52.567 1.171.993 1.894 1.247.346.124.708.203 1.041.237a.882.882 0 0 0 .983-.788l.214-2.578a.886.886 0 0 0-1.422-.685zm-1.65-2.195L5.8 14.715a.885.885 0 0 0-1.107.984 4.665 4.665 0 0 0 .846 2.182.886.886 0 0 0 1.279.13l2.612-2.214a.444.444 0 0 0-.057-.676.44.44 0 0 0-.595-.009l-.001.003z" />
    </g>
  </svg>
);

export default YelpIcon;
