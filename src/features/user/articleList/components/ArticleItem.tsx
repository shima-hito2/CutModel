/* eslint-disable @next/next/no-img-element */
import type { ArticleItem as TArticleItem } from "@/app/type/articleItem";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaceIcon from "@mui/icons-material/Place";
import { Box, Button, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { type FC, useState } from "react";

type Props = {
	article: TArticleItem;
};

export const ArticleItem: FC<Props> = (props: Props) => {
	const { article } = props;
	const [url, setUrl] = useState(
		article.details.imageUrl !== "" ? article.details.imageUrl : "",
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
						py: 1,
						width: "100%",
						justifyContent: "space-around",
						display: { md: "flex" },
					}}
				>
					{url !== "" && (
						<Link
							href={`/list/${article.details.id}`}
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
									// border: "1px solid #00000060",
									alignItems: "center",
									gap: 2,
									// borderRadius: "6px",
									"&:hover": {
										opacity: "0.7",
									},
								}}
							>
								{/* <Box
									sx={{
										width: { md: 80, xs: 60 },
										height: { md: 80, xs: 60 },
										position: "relative",
									}}
								>
									<Image
										src={url}
										fill
										style={{
											borderRadius: "6px 0 0 6px",
										}}
										alt="Picture of the author"
										onError={() => {
											setUrl("/no_images.jpg");
										}}
									/>
								</Box> */}

								<Box>
									<Typography
										sx={{
											overflow: "hidden",
											WebkitBoxOrient: "vertical",
											WebkitLineClamp: 2,
											display: "-webkit-box",
										}}
									>
										{article.details.body}
									</Typography>

									{/* <Typography>￥{article.details.price}</Typography> */}
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
						justifyContent: "space-between",
						gap: 1,
					}}
				>
					<Box
						sx={{
							display: "flex",
							color: "#00000060",
							alignItems: "center",
						}}
					>
						<IconButton onClick={() => {}} sx={{ px: 0 }}>
							<FavoriteIcon sx={{ fontSize: "clamp(16px,1.4vw,1.4vw)" }} />
						</IconButton>
						<Typography sx={{ fontSize: "clamp(16px,1.4vw,1.4vw)" }}>
							{100}
						</Typography>
					</Box>
					<Typography sx={{ fontSize: "clamp(12px,1.2vw,1.2vw)" }}>
						{"2022/12/05 ~ 2023/01/05"}
					</Typography>
					<Button
						sx={{ fontSize: "clamp(16px,1.4vw,1.4vw)" }}
						variant="outlined"
					>
						詳細
					</Button>
					{/* <PlaceIcon sx={{ fontSize: "clamp(8px,1.2vw,1.2vw)" }} />
					{article.places.map((item, idx) => (
						<Typography key={item} sx={{ fontSize: "clamp(8px,1.2vw,12px)" }}>
							{item}
							<span>{idx !== article.places.length - 1 ? " / " : ""}</span>
						</Typography>
					))} */}
				</Box>
			</Box>
		</>
	);
};
