import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { Article, UserInfo } from "./components";

export const ArticleDetail: FC = () => {
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
			<Article />
		</>
	);
};
