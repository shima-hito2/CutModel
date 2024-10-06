import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton, Typography } from "@mui/material";
import type { FC } from "react";

export const Profile: FC = () => {
	return (
		<>
			<Box>
				<Typography
					sx={{ fontSize: "clamp(16px,1.2vw,20px)", fontWeight: "bold" }}
				>
					氏名
				</Typography>
				<Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
					<Typography sx={{ fontSize: "clamp(12px,1.2vw,16px)" }}>
						〇〇太郎
					</Typography>
					<IconButton>
						<EditIcon sx={{ color: "#4da6ff" }} />
					</IconButton>
				</Box>
				<Typography
					sx={{ fontSize: "clamp(16px,1.2vw,20px)", fontWeight: "bold" }}
				>
					メールアドレス
				</Typography>
				<Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
					<Typography sx={{ fontSize: "clamp(12px,1.2vw,16px)" }}>
						text@example.com
					</Typography>
					<IconButton>
						<EditIcon sx={{ color: "#4da6ff" }} />
					</IconButton>
				</Box>

				<Typography
					sx={{ fontSize: "clamp(16px,1.2vw,20px)", fontWeight: "bold" }}
				>
					都道府県
				</Typography>
				<Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
					<Typography sx={{ fontSize: "clamp(12px,1.2vw,16px)" }}>
						大阪府
					</Typography>
					<IconButton>
						<EditIcon sx={{ color: "#4da6ff" }} />
					</IconButton>
				</Box>
			</Box>
		</>
	);
};
