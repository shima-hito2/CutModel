"use client";

import type { ArticleItem as TArticleItem } from "@/app/type/articleItem";
import { Box } from "@mui/material";
import type { FC } from "react";
import { ArticleItem } from "./components";

const dummyData: TArticleItem[] = [
	{
		user: {
			id: "1",
			imageUrl: "/kkrn_icon_user_1.png",
			name: "テスト  太郎",
			biography: "アシスタント2年",
			strengths: "カットが得意です。",
		},
		details: {
			id: "A",
			imageUrl: "/cutmodel.jpg",
			body: "募集内容募集内容募集内容募集内容募集内容募集内容募集内容募集内容募集内容募集内容募集内容",
			price: 6000,
		},
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
		details: {
			id: "C",
			imageUrl: "/a",
			body: "募集タイトルA",
			price: 6000,
		},
		places: ["○○駅徒歩5分", "○×駅徒歩10分", "×○駅徒歩12分", "××駅徒歩15分"],
	},
];

export const ArticleList: FC = () => {
	return (
		<>
			{/* 検索項目 */}
			{/* <ArticleSearchFilter /> */}
			{/* TODO: APIで取得したデータに入れ替え、propsにはListを入れる */}
			{/* 募集リスト */}
			{dummyData.map((item) => (
				<ArticleItem key={item.user.id} article={item} />
			))}
			{dummyData.map((item) => (
				<ArticleItem key={item.user.id} article={item} />
			))}
			{dummyData.map((item) => (
				<ArticleItem key={item.user.id} article={item} />
			))}
			<Box sx={{ height: 56 }} />
			{/* ページネーション */}
			{/* <Box
				sx={{ width: "100%", display: "flex", justifyContent: "center", pb: 2 }}
			>
				<Pagination
					count={10} //総ページ数
					color="primary" //ページネーションの色
					page={1} //現在のページ番号
				/>
			</Box> */}
		</>
	);
};
