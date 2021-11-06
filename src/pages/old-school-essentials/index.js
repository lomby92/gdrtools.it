import { Button, Center, Text } from "@mantine/core"
import { Link } from "gatsby"
import * as React from "react"
import { GiHammerNails } from "react-icons/gi"
import Layout from "../../components/Layout"
import OldSchoolEssentialsTheme from "../../themes/OldSchoolEssentialsTheme"

const IndexPage = () => {
  return (
    <OldSchoolEssentialsTheme>
      <Layout>
        <Center>
          <Text color='red' align='center'>
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
    </OldSchoolEssentialsTheme>
  )
}

export default IndexPage
