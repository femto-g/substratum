import breakpoints from "@/util/breakpoints";
import { useMediaQuery } from "usehooks-ts";

export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

export default function useBreakpoint(breakpoint: Breakpoint) {
  const query = "(min-width: " + breakpoints[breakpoint] + ")";
  const result = useMediaQuery(query);
  return result;
}
