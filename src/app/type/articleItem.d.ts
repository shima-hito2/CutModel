export type ArticleItem = {
	user: ArticleItemsUser;
	details: ArticleItemDetail[];
	places: string[];
};

export type ArticleItemsUser = {
	id: string;
	imageUrl: string;
	name: string;
	biography: string;
	strengths: string;
};

export type ArticleItemDetail = {
	id: string;
	imageUrl: string;
	title: string;
	price: number;
};
