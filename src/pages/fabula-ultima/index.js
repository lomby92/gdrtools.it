import { Button, Center, Text } from "@mantine/core"
import { Link } from "gatsby"
import * as React from "react"
import { GiHammerNails } from "react-icons/gi"
import Layout from "../../components/Layout"
import FabulaUltimaTheme from "../../themes/FabulaUltimaTheme"

const IndexPage = () => {
  return (
    <FabulaUltimaTheme>
      <Layout>
        <Center>
          <Text color='teal' align='center'>
            <GiHammerNails style={{fontSize: '4rem'}}/>
            <br/>
            Pagina in costruzione
          </Text>
        </Center>
        <Center style={{paddingTop: '2rem'}}>
          <Button variant="outline" radius="xl" size="md" uppercase component={Link} to="/">
            Ritorna alla pagina principale
          </Button>
        </Center>
      </Layout>
    </FabulaUltimaTheme>
  )
}

export default IndexPage
