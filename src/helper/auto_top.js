import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AutoTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const body = document.querySelector("#root");
    body.scrollIntoView(
      {
        behavior: "instant",
      },
      100
    );
  }, [pathname]);

  return null;
}
