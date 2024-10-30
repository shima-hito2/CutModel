import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlareIcon from "@mui/icons-material/Flare";
import { Box, Typography } from "@mui/material";
import type { FC } from "react";

export const UserInfo: FC = () => {
	return (
		<Box
			sx={{
				width: "calc(100% - 64px)",
				display: { md: "flex" },
				backgroundColor: "#FFF",
				m: 2,
				p: 2,
				borderRadius: 2,
			}}
		>
			<Box
				sx={{
					display: "flex",
					width: { md: "50%", xs: "100%" },
					pb: { xs: 2, md: 0 },
				}}
			>
				<Box
					sx={{
						width: { md: "10%", xs: "6%" },
						minWidth: { md: 65, xs: 40 },
						pr: 2,
					}}
				>
					<Box
						sx={{
							borderRadius: "50%",
							width: { md: 65, xs: 40 },
							height: { md: 65, xs: 40 },
							backgroundColor: "red",
							mx: "auto",
						}}
					/>
				</Box>
				<Box sx={{ width: { md: "90%", xs: "94%" } }}>
					<Typography
						sx={{ fontSize: "clamp(8px,1.2vw,12px)", color: "#00000060" }}
					>
						テスト店舗
					</Typography>
					<Typography
						sx={{ fontSize: "clamp(16px,1.2vw,20px)", fontWeight: "bold" }}
					>
						テスト 太郎
					</Typography>
					<Typography
						sx={{ fontSize: "clamp(8px,1.2vw,10px)", color: "#00000060" }}
					>
						アシスタント/研修2年
					</Typography>
					<Box sx={{ display: "flex", pt: 2 }}>
						<ChatBubbleIcon sx={{ fontSize: 18, color: "#0d92c3" }} />
						<Typography sx={{ fontSize: 12, color: "#00000060" }}>
							100
						</Typography>
						<FavoriteIcon sx={{ fontSize: 18, color: "#fd4a5b", pl: 1 }} />
						<Typography sx={{ fontSize: 12, color: "#00000060" }}>
							50
						</Typography>
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					width: { md: "50%", xs: "100%" },
					borderLeft: { md: "1px solid #00000030" },
					borderTop: { xs: "1px solid #00000030", md: "none" },
				}}
			>
				<Box sx={{ display: "flex", p: 1, alignItems: "center", gap: 2 }}>
					<FlareIcon
						sx={{
							borderRadius: "50%",
							backgroundColor: "#ffb7db",
							color: "#FFF",
							p: 1,
						}}
					/>
					<Typography
						sx={{
							fontSize: "clamp(12px,1.2vw,16px)",
							overflow: "hidden",
							WebkitBoxOrient: "vertical",
							WebkitLineClamp: 1,
							display: "-webkit-box",
						}}
					>
						○○が得意。テキストテキストテキストテキスト
					</Typography>
				</Box>
				<Box sx={{ display: "flex", p: 1, alignItems: "center", gap: 2 }}>
					<FlareIcon
						sx={{
							borderRadius: "50%",
							backgroundColor: "#ffb7db",
							color: "#FFF",
							p: 1,
						}}
					/>
					<Typography
						sx={{
							fontSize: "clamp(12px,1.2vw,16px)",
							overflow: "hidden",
							WebkitBoxOrient: "vertical",
							WebkitLineClamp: 1,
							display: "-webkit-box",
						}}
					>
						××が得意。テキストテキストテキストテキスト
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};
