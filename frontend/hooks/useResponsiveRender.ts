import { useEffect, useState } from "react";

export default function useResponsiveRender() {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(typeof window !== "undefined" ? true : false);
  }, []);
  return render;
}
