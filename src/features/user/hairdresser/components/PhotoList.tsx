import Image from "next/image";
import type { FC } from "react";

const Photo: FC<{ path: string; details: string }> = (props: {
	path: string;
	details: string;
}) => {
	const { path, details } = props;
	return (
		<>
			<div
				style={{
					width: "calc(50% - 22px)",
					height: "160px",
					margin: "1px",
					padding: "10px",
					backgroundColor: "#F8BBD0",
				}}
			>
				<div
					style={{
						position: "absolute",
						width: "calc(50% - 46px)",
						height: "100px",
					}}
				>
					<Image
						src={path}
						objectFit="contain"
						alt="Picture of the author"
						fill
						style={{ objectFit: "cover" }} // オプション: 画像の表示方法を指定
					/>
					<p
						style={{
							fontSize: "clamp(16px,1.4vw,24px)",
							overflow: "hidden",
							WebkitBoxOrient: "vertical",
							WebkitLineClamp: 3,
							display: "-webkit-box",
							position: "relative",
							top: "100px",
						}}
					>
						{details}
					</p>
				</div>
			</div>
		</>
	);
};

export const PhotoList: FC = () => {
	return (
		<>
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				<Photo
					path={"/user1.jpg"}
					details="サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル"
				/>
				<Photo
					path={"/user1.jpg"}
					details="サンプルサンプルサンプルサンプルサンプル"
				/>
				<Photo
					path={"/user1.jpg"}
					details="サンプルサンプルサンプルサンプルサンプル"
				/>
				<Photo
					path={"/user1.jpg"}
					details="サンプルサンプルサンプルサンプルサンプル"
				/>
				<Photo
					path={"/user1.jpg"}
					details="サンプルサンプルサンプルサンプルサンプル"
				/>
				<Photo
					path={"/user1.jpg"}
					details="サンプルサンプルサンプルサンプルサンプル"
				/>
				<Photo
					path={"/user1.jpg"}
					details="サンプルサンプルサンプルサンプルサンプル"
				/>
				<Photo
					path={"/user1.jpg"}
					details="サンプルサンプルサンプルサンプルサンプル"
				/>
				<Photo
					path={"/user1.jpg"}
					details="サンプルサンプルサンプルサンプルサンプル"
				/>
			</div>
		</>
	);
};
