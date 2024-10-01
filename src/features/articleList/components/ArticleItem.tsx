/* eslint-disable @next/next/no-img-element */
import type { ArticleItem as TArticleItem } from "@/app/type/articleItem";
import PlaceIcon from "@mui/icons-material/Place";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import type { FC } from "react";

type Props = {
	article: TArticleItem;
};

export const ArticleItem: FC<Props> = (props: Props) => {
	const { article } = props;
	return (
		<>
			<Box
				sx={{
					backgroundColor: "#FFF",
					m: 2,
					p: 2,
					borderRadius: 2,
					width: "calc(100% - 64px)",
				}}
			>
				{/* ユーザー情報 */}
				<Box sx={{ display: "flex", alignItems: "center" }}>
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
							sx={{ fontSize: "clamp(16px,1.2vw,20px)", fontWeight: "bold" }}
						>
							{article.user.name}
						</Typography>
						<Typography
							sx={{ fontSize: "clamp(8px,1.2vw,12px)", color: "#00000060" }}
						>
							{article.user.biography}
						</Typography>
					</Box>
				</Box>
				{/* 募集内容 */}
				<Box
					sx={{
						py: 2,
						width: "100%",
						justifyContent: "space-around",
						display: { md: "flex" },
					}}
				>
					{article.details.map((item) => (
						<Box
							key={item.title}
							sx={{
								display: "flex",
								width: { md: "40%", xs: "100%" },
								mb: { md: 0, xs: 2 },
								height: { md: 80, xs: 60 },
								border: "1px solid #00000060",
								alignItems: "center",
								gap: 2,
								borderRadius: "6px",
							}}
						>
							{/* TODO: 画像が読み込みエラーになった場合、バグるが対処が現状できない */}
							{/* <img
								src={item.imageUrl}
								width={80}
								height={80}
								style={{
									borderRadius: "6px 0 0 6px",
								}}
								// onError="this.onerror=null;this.src='http://www.tenman.info/images/pen.jpg';"
								onError={(event) => {
									event.target.src = "https://default-image-link-goes-here";
									event.onerror = null;
								}}
								alt=""
							/> */}
							<Box
								component={"img"}
								src={item.imageUrl}
								sx={{
									width: { md: 80, xs: 60 },
									height: { md: 80, xs: 60 },
									borderRadius: "6px 0 0 6px",
								}}
							/>
							<Box>
								<Typography sx={{ fontWeight: "bold" }}>
									{item.title}
								</Typography>
								<Typography>￥{item.price}</Typography>
							</Box>
						</Box>
					))}
				</Box>
				{/* 詳細ボタン */}
				<Box
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "flex-end",
					}}
				>
					<Button
						variant="contained"
						sx={{
							fontSize: "clamp(8px,1.2vw,12px)",
						}}
					>
						詳細
					</Button>
				</Box>
				<Box
					sx={{
						display: "flex",
						color: "#00000060",
						alignItems: "center",
						pt: 2,
					}}
				>
					<PlaceIcon sx={{ fontSize: "clamp(8px,1.2vw,1.2vw)" }} />
					{article.places.map((item, idx) => (
						<Typography key={item} sx={{ fontSize: "clamp(8px,1.2vw,12px)" }}>
							{item}
							<span>{idx !== article.places.length - 1 ? " / " : ""}</span>
						</Typography>
					))}
				</Box>
			</Box>
		</>
	);
};
