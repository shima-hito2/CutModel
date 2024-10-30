import { Footer } from "@/components/user/Footer";
import { Header } from "@/components/user/Header";
import { Box } from "@mui/material";

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		// biome-ignore lint/a11y/useHtmlLang: <explanation>
		<html>
			<body>
				<Box sx={{ display: { md: "block", xs: "none" } }}>
					<Header />
				</Box>
				{children}
				<Box sx={{ display: { md: "none", xs: "block" } }}>
					<Footer />
				</Box>
			</body>
		</html>
	);
}
