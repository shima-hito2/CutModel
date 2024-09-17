import Container from '@mui/material/Container'

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Container maxWidth='sm'>
        {children}
      </Container>
    </>
  )
}