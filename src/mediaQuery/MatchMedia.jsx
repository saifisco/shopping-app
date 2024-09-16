import React from "react";

export default function MatchMedia({ media = "min-width: 0px", children }) {
  const [matched, setMatched] = React.useState(
    matchMedia(`(${media})`).matches
  );
  matchMedia(`(${media})`).onchange = (e) => setMatched(e.matches);
  return matched && <>{children}</>;
}
export function useMedia(mediaQuery = "min-width: 0px") {
  const [media, setMedia] = React.useState(
    matchMedia(`(${mediaQuery})`).matches
  );
  matchMedia(`(${mediaQuery})`).onchange = (e) => setMedia(e.matches);
  return media;
}
