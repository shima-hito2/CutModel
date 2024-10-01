export type ArticleItem = {
	user: ArticleItemsUser;
	details: ArticleItemDetail[];
};

export type ArticleItemsUser = {
	id: string;
	imageUrl: string;
	name: string;
	biography: string;
	strengths: string;
};

export type ArticleItemDetail = {
	imageUrl: string;
	title: string;
	price: number;
};
