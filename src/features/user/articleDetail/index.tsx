"use client";

import Typography from "@mui/material/Typography";
import { type FC, useState } from "react";
import { Article, ReservationDialog, UserInfo } from "./components";

export const ArticleDetail: FC = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Typography
				sx={{ fontSize: "clamp(16px,1.2vw,20px)", fontWeight: "bold", mt: 2 }}
			>
				スタッフ
			</Typography>
			<UserInfo />
			<Typography
				sx={{ fontSize: "clamp(16px,1.2vw,20px)", fontWeight: "bold" }}
			>
				施術内容
			</Typography>
			<Article
				handleOpen={() => {
					setOpen(true);
				}}
			/>
			<ReservationDialog
				open={open}
				handleClose={() => {
					setOpen(false);
				}}
			/>
		</>
	);
};
