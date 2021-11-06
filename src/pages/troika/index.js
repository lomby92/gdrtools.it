import { Button, Center, Text } from "@mantine/core"
import { Link } from "gatsby"
import * as React from "react"
import { GiHammerNails } from "react-icons/gi"
import Layout from "../../components/Layout"
import TroikaTheme from "../../themes/TroikaTheme"

const IndexPage = () => {
  return (
    <TroikaTheme>
      <Layout>
        <Center>
          <Text color='orange' align='center'>
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
    </TroikaTheme>
  )
}

export default IndexPage
