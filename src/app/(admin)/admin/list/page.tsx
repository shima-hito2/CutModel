import { ArticleList } from "@/features/admin/articleList";
import { Box } from "@mui/material";
import Link from "next/link";

export default function Page() {
	return (
		<>
			<Box sx={{ width: "100%", textAlign: "right", pt: 2 }}>
				<Link href="list/new">新しく投稿する</Link>
			</Box>
			<ArticleList />
		</>
	);
}
