import type { FC } from "react";

export const UserProfile: FC = () => {
  return (
    <div style={{ padding: "8px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <div>
          <p style={{ fontSize: "clamp(16px,1.4vw,24px)" }}>
            {"氏名"}/{"所属"}
          </p>
          <p style={{ fontSize: "clamp(16px,1.4vw,24px)" }}>
            {"年数"}/{"場所"}/★{3.5}
          </p>
        </div>
        <div>
          <p>{"店舗情報"}</p>
        </div>
      </div>
      <p
        style={{
          fontSize: "clamp(12px,1.4vw,20px)",
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
          display: "-webkit-box",
        }}
      >
        {
          "自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文"
        }
      </p>
    </div>
  );
}