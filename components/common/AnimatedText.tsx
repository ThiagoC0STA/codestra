import React from "react";
import { AnimatedTextProps } from "@/types";

export default function AnimatedText({
  text = "Grow your business with a new website.",
}: AnimatedTextProps) {
  return (
    <>
      <span
        className="wow charsAnimIn words chars splitting"
        data-splitting="chars"
        aria-hidden="true"
        style={{
          "--word-total": text.split(" ").length,
          "--char-total": text.split("").length,
          visibility: "visible",
        } as React.CSSProperties}
      >
        {text
          .trim()
          .split(" ")
          .map((elm, i) => (
            <React.Fragment key={i}>
              <span
                className="word"
                data-word="Grow"
                style={{ "--word-index": i } as React.CSSProperties}
              >
                {elm.split("").map((elm2, i2) => (
                  <span
                    key={i2}
                    className="char"
                    data-char="G"
                    style={{ "--char-index": i + i2 } as React.CSSProperties}
                  >
                    {elm2}
                  </span>
                ))}
              </span>
              <span className="whitespace"> </span>
            </React.Fragment>
          ))}
      </span>
    </>
  );
} 