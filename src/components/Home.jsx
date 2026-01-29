import Container from "@mui/material/Container";
import Nav from "./Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Container maxWidth="md">
        <h1>Home details</h1>
      </Container>
    </>
  );
}
