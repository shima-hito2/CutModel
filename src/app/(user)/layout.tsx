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
				<Box
					sx={{
						display: { md: "block", xs: "none" },
						position: { xs: "fixed" },
						top: { xs: 0 },
						left: { xs: 0 },
						zIndex: { xs: 100 },
						width: { xs: "100%" },
						height: { xs: "60px" },
					}}
				>
					<Header />
				</Box>
				{children}
				<Box sx={{ display: { md: "none", xs: "block" }, mt: { xs: "56px" } }}>
					<Footer />
				</Box>
			</body>
		</html>
	);
}
