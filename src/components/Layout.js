import { Container } from "@mantine/core"
import React from "react"
import Footer from "./Footer"
import Header from "./Header"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main>
        <Container style={{padding: '1rem'}}>
            {children}
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Layout
