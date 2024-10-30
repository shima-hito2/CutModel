import { Box } from "@mui/material";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Box
				sx={{
					width: "100%",
					height: "calc(100vh - 64px)",
					display: "flex",
					alignItems: "center",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						width: "100%",
						gap: 4,
					}}
				>
					<Link href="admin/login" style={{ margin: "0 auto" }}>
						ログイン
					</Link>
					<Link href="admin/regist" style={{ margin: "0 auto" }}>
						新規登録
					</Link>
				</Box>
			</Box>
		</>
	);
}
