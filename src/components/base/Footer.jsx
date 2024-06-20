import { Container } from "react-bootstrap";
import Navigation from "./Navigation";

export default function Footer() {
  return (
    <footer className="bg-dark text-center text-lg-start py-3">
      <Container className="p-4">
        <Navigation type = 'footer'className= "nav justify-content-center border-bottom pb-3 mb-3"/>
      </Container>
    </footer>
  )
}
