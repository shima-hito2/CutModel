import Container from "@mui/material/Container";

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Container maxWidth="md" style={{ paddingLeft: 0, paddingRight: 0 }}>
				{children}
			</Container>
		</>
	);
}
