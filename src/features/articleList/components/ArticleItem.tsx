/* eslint-disable @next/next/no-img-element */
import type {
	ArticleItemDetail,
	ArticleItem as TArticleItem,
} from "@/app/type/articleItem";
import notFoundImage from "@/public/no_images.jpg";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { type FC, useEffect, useState } from "react";

type Props = {
	article: TArticleItem;
};

export const ArticleItem: FC<Props> = (props: Props) => {
	const { article } = props;

	const [a, setA] = useState(article);

	const checkArticle = (argArray: TArticleItem) => {
		const newDetails: ArticleItemDetail[] = [];
		for (const item2 of argArray.details) {
			const img = new Image();
			img.src = item2.imageUrl;
			img.onload = () => {
				newDetails.push({
					imageUrl: item2.imageUrl,
					title: item2.title,
					price: item2.price,
				});
			};
			img.onerror = () => {
				newDetails.push({
					imageUrl: notFoundImage.src,
					title: item2.title,
					price: item2.price,
				});
			};
		}
		const result: TArticleItem = {
			user: {
				id: argArray.user.id,
				imageUrl: argArray.user.imageUrl,
				name: argArray.user.name,
				biography: argArray.user.biography,
				strengths: argArray.user.strengths,
			},
			details: newDetails,
		};
		return result;
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		console.log(checkArticle(article));
		setA(checkArticle(article));
	}, []);
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
				<Box sx={{ display: "flex" }}>
					<Box sx={{ width: "10%", minWidth: 65, my: "auto", pr: 2 }}>
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
						<Typography sx={{ fontSize: 20 }}>{article.user.name}</Typography>
						<Typography sx={{ fontSize: 12, color: "#00000060" }}>
							{article.user.biography}
						</Typography>
					</Box>
				</Box>
				{/* 募集内容 */}
				<Box sx={{ py: 2 }}>
					{a.details.map((item) => (
						<Box key={item.title} sx={{ display: "flex" }}>
							<Box>
								<img
									src={item.imageUrl}
									width={40}
									height={40}
									alt="articleImage"
								/>
								<Box>
									<Typography>{item.title}</Typography>
									<Typography>{item.price}</Typography>
									<Typography>aaaaaaaaaaaaaaaaaaaaa</Typography>
								</Box>
							</Box>
						</Box>
					))}
				</Box>
				{/* 詳細ボタン */}
				<Box
					sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
				>
					<Button
						variant="contained"
						onClick={() => {
							console.log(a);
						}}
					>
						詳細
					</Button>
				</Box>
			</Box>
		</>
	);
};
