import { Box, Button, TextField, Typography } from "@mui/material";
import type { FC } from "react";

export const Login: FC = () => {
	return (
		<>
			<Box sx={{ width: "100%", pt: 2 }}>
				<Typography
					sx={{ fontSize: "clamp(16px,1.2vw,20px)", fontWeight: "bold" }}
				>
					メールアドレス
				</Typography>
				<Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
					<TextField label="" fullWidth sx={{ backgroundColor: "#FFF" }} />
				</Box>
				<Typography
					sx={{ fontSize: "clamp(16px,1.2vw,20px)", fontWeight: "bold" }}
				>
					パスワード
				</Typography>
				<Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
					<TextField label="" fullWidth sx={{ backgroundColor: "#FFF" }} />
				</Box>
				<Box sx={{ width: "100%", textAlign: "center", pt: 2 }}>
					<Button variant="outlined">ログインする</Button>
				</Box>
			</Box>
		</>
	);
};
