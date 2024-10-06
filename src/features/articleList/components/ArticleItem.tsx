/* eslint-disable @next/next/no-img-element */
import type { ArticleItem as TArticleItem } from "@/app/type/articleItem";
import PlaceIcon from "@mui/icons-material/Place";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { type FC, useState } from "react";

type Props = {
	article: TArticleItem;
};

export const ArticleItem: FC<Props> = (props: Props) => {
	const { article } = props;
	const [firstUrl, setFirstUrl] = useState(
		article.details.length >= 1 ? article.details[0].imageUrl : "",
	);
	const [secondUrl, setSecoundUrl] = useState(
		article.details.length >= 2 ? article.details[1].imageUrl : "",
	);

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
					{firstUrl !== "" && (
						<Link
							href={`/list/${article.details[0].id}`}
							passHref
							style={{ width: "40%" }}
							target="_blank"
						>
							<Box
								sx={{
									display: "flex",
									width: "100%",
									height: { md: 80, xs: 60 },
									cursor: "pointer",
									mb: { md: 0, xs: 2 },
									border: "1px solid #00000060",
									alignItems: "center",
									gap: 2,
									borderRadius: "6px",
									"&:hover": {
										opacity: "0.7",
									},
								}}
							>
								<Box
									sx={{
										width: { md: 80, xs: 60 },
										height: { md: 80, xs: 60 },
										position: "relative",
									}}
								>
									<Image
										src={firstUrl}
										fill
										style={{
											borderRadius: "6px 0 0 6px",
										}}
										alt="Picture of the author"
										onError={() => {
											setFirstUrl("/no_images.jpg");
										}}
									/>
								</Box>

								<Box>
									<Typography sx={{ fontWeight: "bold" }}>
										{article.details[0].title}
									</Typography>
									<Typography>￥{article.details[0].price}</Typography>
								</Box>
							</Box>
						</Link>
					)}
					{secondUrl !== "" && (
						<Link
							href={`/list/${article.details[1].id}`}
							passHref
							style={{ width: "40%" }}
							target="_blank"
						>
							<Box
								sx={{
									display: "flex",
									width: "100%",
									cursor: "pointer",
									mb: { md: 0, xs: 2 },
									height: { md: 80, xs: 60 },
									border: "1px solid #00000060",
									alignItems: "center",
									gap: 2,
									borderRadius: "6px",
									"&:hover": {
										opacity: "0.7",
									},
								}}
							>
								<Box
									sx={{
										width: { md: 80, xs: 60 },
										height: { md: 80, xs: 60 },
										position: "relative",
									}}
								>
									<Image
										src={secondUrl}
										fill
										style={{
											borderRadius: "6px 0 0 6px",
										}}
										alt="Picture of the author"
										onError={() => {
											setSecoundUrl("/no_images.jpg");
										}}
									/>
								</Box>

								<Box>
									<Typography sx={{ fontWeight: "bold" }}>
										{article.details[1].title}
									</Typography>
									<Typography>￥{article.details[1].price}</Typography>
								</Box>
							</Box>
						</Link>
					)}
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
