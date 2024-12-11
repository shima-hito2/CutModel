import Container from "@mui/material/Container";

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Container maxWidth="md" sx={{
				paddingLeft: 0,
				paddingRight: 0,
				marginTop: { md: '60px' },
			}}>
				{children}
			</Container>
		</>
	);
}
