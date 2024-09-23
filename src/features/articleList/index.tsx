"use client";

import { Box, Pagination } from "@mui/material";
import type { FC } from "react";
import { ArticleItem, ArticleSearchFilter } from "./components";

export const ArticleList: FC = () => {
	return (
		<>
			{/* 検索項目 */}
			<ArticleSearchFilter />
			{/* TODO: APIで取得したデータに入れ替え、propsにはListを入れる */}
			{/* 募集リスト */}
			<ArticleItem />
			<ArticleItem />
			<ArticleItem />
			<ArticleItem />
			<ArticleItem />
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
