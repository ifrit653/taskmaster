import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"
import { Container } from "react-bootstrap"
import Footer from "./Footer"

export default function Layout() {
  return (
    <>
      <Navigation type = 'header'/> 
      <Container>
        <Outlet/> 
      </Container>
      <Footer/> 
    </>
  )
}
