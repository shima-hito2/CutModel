"use client";

import type { ArticleItem as TArticleItem } from "@/app/type/articleItem";
import { Box, Pagination } from "@mui/material";
import type { FC } from "react";
import { ArticleItem, ArticleSearchFilter } from "./components";

const dummyData: TArticleItem[] = [
	{
		user: {
			id: "1",
			imageUrl: "",
			name: "テスト  太郎",
			biography: "アシスタント2年",
			strengths: "カットが得意です。",
		},
		details: [
			{
				id: "A",
				imageUrl: "/user1.jpg",
				title: "募集タイトルA",
				price: 6000,
			},
			{
				id: "B",
				imageUrl: "/a",
				title: "募集タイトルB",
				price: 4200,
			},
		],
		places: ["○○駅徒歩5分", "○×駅徒歩10分", "×○駅徒歩12分", "××駅徒歩15分"],
	},
	{
		user: {
			id: "2",
			imageUrl: "",
			name: "テスト  次郎",
			biography: "アシスタント4年",
			strengths: "カットが得意です。",
		},
		details: [
			{
				id: "C",
				imageUrl: "/a",
				title: "募集タイトルA",
				price: 6000,
			},
			{
				id: "D",
				imageUrl: "/a",
				title: "募集タイトルB",
				price: 4200,
			},
		],
		places: ["○○駅徒歩5分", "○×駅徒歩10分", "×○駅徒歩12分", "××駅徒歩15分"],
	},
];

export const ArticleList: FC = () => {
	// TODO: 後で消す。
	// const checkArticle = (argArray: TArticleItem) => {
	// 	const newDetails: ArticleItemDetail[] = [];
	// 	for (const item2 of argArray.details) {
	// 		const img = new Image();
	// 		img.src = item2.imageUrl;
	// 		img.onload = () => {
	// 			newDetails.push({
	// 				imageUrl: item2.imageUrl,
	// 				title: item2.title,
	// 				price: item2.price,
	// 			});
	// 		};
	// 		img.onerror = () => {
	// 			newDetails.push({
	// 				imageUrl: notFoundImage.src,
	// 				title: item2.title,
	// 				price: item2.price,
	// 			});
	// 		};
	// 	}
	// 	const result: TArticleItem = {
	// 		user: {
	// 			id: argArray.user.id,
	// 			imageUrl: argArray.user.imageUrl,
	// 			name: argArray.user.name,
	// 			biography: argArray.user.biography,
	// 			strengths: argArray.user.strengths,
	// 		},
	// 		details: newDetails,
	// 	};
	// 	return result;
	// };

	return (
		<>
			{/* 検索項目 */}
			<ArticleSearchFilter />
			{/* TODO: APIで取得したデータに入れ替え、propsにはListを入れる */}
			{/* 募集リスト */}
			{dummyData.map((item) => (
				<ArticleItem key={item.user.id} article={item} />
			))}
			{/* ページネーション */}
			<Box
				sx={{ width: "100%", display: "flex", justifyContent: "center", pb: 2 }}
			>
				<Pagination
					count={10} //総ページ数
					color="primary" //ページネーションの色
					page={1} //現在のページ番号
				/>
			</Box>
		</>
	);
};
