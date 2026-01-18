import { useEffect, useState } from "react";

export function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= breakpoint);
    handler();

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [breakpoint]);

  return isDesktop;
}
