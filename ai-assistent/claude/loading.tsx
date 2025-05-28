"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useRouter } from "next/navigation"; // ← ДОДАЙ це

export function Loading() {
  const router = useRouter(); // ← ініціалізація
  const loadingSpinner = useRef<HTMLDivElement | null>(null);
  const [isElementLoaded, setIsElementLoaded] = useState<boolean>(false);

  const isMobile = useMediaQuery("(max-width: 1150px)");
  const isMobileTwo = useMediaQuery("(max-width: 650px)");

  useEffect(() => {
    if (loadingSpinner.current) {
      const timeout = setTimeout(() => {
        setIsElementLoaded(true);
      }, 100);

      const redirectTimeout = setTimeout(() => {
        router.push("/dash"); // ← редірект через 2.1 сек
      }, 2100);

      return () => {
        clearTimeout(timeout);
        clearTimeout(redirectTimeout);
      };
    }
  }, [router]);

  // Обчислення ширини залежно від медіазапитів
  let imageWidth = 556;
  if (isMobileTwo) {
    imageWidth = 100;
  } else if (isMobile) {
    imageWidth = 350;
  }

  // Висота пропорційна
  const imageHeight = Math.round(imageWidth * (176 / 556));

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        width: "100%",
        height: "100%",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <Image
        src="/Loading....png"
        width={imageWidth}
        height={imageHeight}
        alt="Loading..."
      />

      <div
        style={{
          width: "50%",
          height: "31px",
          borderRadius: "7px",
          backgroundColor: "#ddd",
          overflow: "hidden",
        }}
      >
        <div
          ref={loadingSpinner}
          style={{
            height: "100%",
            backgroundImage:
              "linear-gradient(to right, rgba(134, 18, 82, 1), rgba(236, 31, 144, 1))",
            width: isElementLoaded ? "100%" : "10%",
            transition: "width 2s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
}
