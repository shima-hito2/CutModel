import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import type { FC } from "react";

type Props = {
	handleOpen: () => void;
};

export const Article: FC<Props> = (props: Props) => {
	const { handleOpen } = props;
	return (
		<Box
			sx={{
				width: "calc(100% - 64px)",
				backgroundColor: "#FFF",
				m: 2,
				p: 2,
				borderRadius: 2,
			}}
		>
			<Box sx={{ display: "flex" }}>
				<Box sx={{ width: 200, height: 200, position: "relative" }}>
					<Image src={"/no_images.jpg"} fill alt="Picture of the author" />
				</Box>
				<Box sx={{ width: "calc(100% - 200px)" }}>
					<Typography
						sx={{
							fontSize: "clamp(16px,1.2vw,20px)",
							fontWeight: "bold",
							py: 1,
						}}
					>
						タイトルタイトルタイトルタイトルタイトル
					</Typography>
					<Typography
						sx={{
							fontSize: "clamp(12px,1.2vw,16px)",
							overflow: "hidden",
							WebkitBoxOrient: "vertical",
							WebkitLineClamp: 5,
							display: "-webkit-box",
						}}
					>
						タイトルタイトルタイトルタイトルタイトル
						タイトルタイトルタイトルタイトルタイトル
						タイトルタイトルタイトルタイトルタイトル
						タイトルタイトルタイトルタイトルタイトル
						タイトルタイトルタイトルタイトルタイトル
						タイトルタイトルタイトルタイトルタイトル
						タイトルタイトルタイトルタイトルタイトル
						タイトルタイトルタイトルタイトルタイトル
						タイトルタイトルタイトルタイトルタイトル
						タイトルタイトルタイトルタイトルタイトル
					</Typography>
				</Box>
			</Box>
			<Box sx={{ width: "100%", textAlign: "center" }}>
				<Button variant="outlined" onClick={handleOpen}>
					予約する
				</Button>
			</Box>
		</Box>
	);
};
