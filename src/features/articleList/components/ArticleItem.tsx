import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import type { FC } from "react";

export const ArticleItem: FC = () => {
	return (
		<>
			<Box sx={{ backgroundColor: "#FFF", m: 2, p: 2, borderRadius: 2 }}>
				{/* ユーザー情報 */}
				<Box sx={{ display: "flex" }}>
					<Box sx={{ width: "10%" }}>
						<Box
							sx={{
								borderRadius: "50%",
								width: 65,
								height: 65,
								backgroundColor: "red",
								mx: "auto",
							}}
						/>
					</Box>
					<Box sx={{ width: "90%" }}>
						<Typography sx={{ fontSize: 14 }}>テスト店舗</Typography>
						<Typography sx={{ fontSize: 20 }}>テスト 太郎</Typography>
						<Typography sx={{ fontSize: 12, color: "#00000060" }}>
							アシスタント/研修2年
						</Typography>
						<Box>
							<Typography sx={{ fontSize: 12, color: "#00000060" }}>
								アシスタント/研修2年
							</Typography>
						</Box>
					</Box>
				</Box>
				{/* レビュー内容(ユーザーに対しての) */}
				{/* 募集内容 */}
				<Box sx={{ py: 2 }}>
					<Typography
						sx={{
							fontSize: 14,
							fontWeight: "bold",
							overflow: "hidden",
							textOverflow: "ellipsis",
							whiteSpace: "nowrap",
						}}
					>
						テストタイトルテストタイトルテストタイトルテストタイトルテストタイトルテストタイトルテストタイトルテストタイトルテストタイトル
					</Typography>
					<Typography
						sx={{
							fontSize: 12,
							overflow: "hidden",
							WebkitBoxOrient: "vertical",
							WebkitLineClamp: 3,
							display: "-webkit-box",
						}}
					>
						テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容テスト募集内容
					</Typography>
				</Box>
			</Box>
		</>
	);
};
