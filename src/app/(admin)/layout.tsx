import { Header } from "@/components/admin/Header";

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		// biome-ignore lint/a11y/useHtmlLang: <explanation>
		<html>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
