"use client";

import { Box, Button, Stack, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import type { FC } from "react";

export const ArticleDetail: FC = () => {
	return (
		<>
			<Stack spacing={2} sx={{ pt: 2 }}>
				<Typography
					sx={{ fontSize: "clamp(16px,1.2vw,20px)", fontWeight: "bold", mt: 2 }}
				>
					タイトル
				</Typography>
				<TextField label="" fullWidth sx={{ backgroundColor: "#FFF" }} />
				<Typography
					sx={{ fontSize: "clamp(16px,1.2vw,20px)", fontWeight: "bold" }}
				>
					施術内容
				</Typography>
				<TextField label="" fullWidth sx={{ backgroundColor: "#FFF" }} />
				<Box sx={{ width: "100%", textAlign: "center", pt: 2 }}>
					<Button variant="outlined">投稿する</Button>
				</Box>
			</Stack>
		</>
	);
};
