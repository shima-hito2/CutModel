import type { FC } from "react";

type ReviewProps = {
	age: number;
	sex: number;
	details: string;
	menu: string;
	visitDate: string;
};

const Review: FC<ReviewProps> = (props: ReviewProps) => {
	const { age, sex, details, menu, visitDate } = props;
	return (
		<>
			<div
				style={{
					border: "1px solid #F8BBD0",
					borderRadius: "12px",
					boxShadow: "rgba(243, 123, 152, 0.3) 0px 2px 6px",
					padding: "16px",
					marginBottom: "16px",
				}}
			>
				<p style={{ fontSize: "clamp(16px,1.4vw,24px)", fontWeight: "bold" }}>
					{`${Math.floor(age / 10) * 10}代 ${sex === 1 ? "男性" : "女性"}`}
				</p>

				<p
					style={{
						fontSize: "clamp(16px,1.4vw,24px)",
					}}
				>
					{details}
				</p>

				<p style={{ fontSize: "clamp(12px,1.2vw,16px)" }}>{menu}</p>
				<p style={{ fontSize: "clamp(12px,1.2vw,16px)" }}>{visitDate}</p>
			</div>
		</>
	);
};

export const Reviews: FC = () => {
	return (
		<>
			<div
				style={{
					padding: "16px",
				}}
			>
				<p style={{ fontSize: "clamp(16px,1.4vw,24px)" }}>★{"3.5"}</p>
				<p style={{ fontSize: "clamp(16px,1.4vw,24px)" }}>
					{"仕上がり/接客・サービス"}
				</p>
			</div>
			<Review
				age={25}
				sex={2}
				details={
					"口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容"
				}
				menu={"施術メニューAAAAA"}
				visitDate={"2024/12/05"}
			/>
			<Review
				age={30}
				sex={1}
				details={
					"口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容"
				}
				menu={"施術メニューBBB"}
				visitDate={"2024/12/07"}
			/>
			<Review
				age={69}
				sex={2}
				details={
					"口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容口コミ内容"
				}
				menu={"施術メニューC"}
				visitDate={"2024/12/20"}
			/>
		</>
	);
};
