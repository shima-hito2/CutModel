import "./globals.css";

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		// biome-ignore lint/a11y/useHtmlLang: <explanation>
		<html>
			<body>{children}</body>
		</html>
	);
}
