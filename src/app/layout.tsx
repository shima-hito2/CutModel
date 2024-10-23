import { Header } from "@/components/Header";
import "./globals.css";
import { Footer } from "@/components/Footer";
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
