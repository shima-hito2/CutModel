import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

export const ShopCard: FC = () => {
  return (
    <div style={{ marginTop: "8px" }}>
      <h4>{"周辺の他の美容室"}</h4>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link href="#">
          <div
            style={{
              width: 100,
              height: 100,
              margin: "1rem",
              position: "relative",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
            }}
          >
            <Image src={"/no_images.jpg"} fill alt="Picture of the author" />
          </div>
        </Link>
        <Link href="#">
          <div
            style={{
              width: 100,
              height: 100,
              margin: "1rem",
              position: "relative",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
            }}
          >
            <Image src={"/no_images.jpg"} fill alt="Picture of the author" />
          </div>
        </Link>
        <Link href="#">
          <div
            style={{
              width: 100,
              height: 100,
              margin: "1rem",
              position: "relative",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
            }}
          >
            <Image src={"/no_images.jpg"} fill alt="Picture of the author" />
          </div>
        </Link>
      </div>
    </div>
  )
};
