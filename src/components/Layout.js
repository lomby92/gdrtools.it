import { Anchor, Breadcrumbs, Container, Divider } from "@mantine/core"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import React from "react"
import { MdDoubleArrow } from "react-icons/md"
import Footer from "./Footer"
import Header from "./Header"
import "./layout.css"


const Layout = ({ children }) => {
  const location = useLocation();
  const breadcrumbsItems = [];

  let path = location.pathname;

  // Remove trailing /
  if (path.endsWith('/')) {
    path = path.substr(0, path.length - 1);
  }

  while (path.length > 0) {
    // Get the name in kebab-case and convert to Camel Case
    const linkText = path
      .split('/')
      .pop()
      .split('-')
      .map(str => str.substr(0, 1).toUpperCase() + str.substr(1))
      .join(' ');

    breadcrumbsItems.push(
      <Anchor component={Link} to={path} key={path.length}>{linkText}</Anchor>
    );

    path = path.substring(0, path.lastIndexOf('/'));
  }
  // Add 'Home'
  breadcrumbsItems.push(<Anchor component={Link} to='/' key={0}>Home</Anchor>)

  // Reverse breadcrumbsItems as they are inserted from right to left
  breadcrumbsItems.reverse();

  return (
    <>
      <Header/>
      <main>
        <Container style={{padding: '1rem'}}>
            {
              breadcrumbsItems.length > 1 &&
              <>
                <Breadcrumbs separator={<MdDoubleArrow/>} style={{paddingBottom: '1rem'}}>{breadcrumbsItems}</Breadcrumbs>
                <Divider style={{paddingBottom: '2rem'}}/>
              </>
            }
            {children}
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Layout
