import { Anchor, Divider, List, Text, Title } from "@mantine/core"
import { Link } from "gatsby"
import * as React from "react"
import { FiClock } from "react-icons/fi"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import FabulaUltimaTheme from "../../themes/FabulaUltimaTheme"

const IndexPage = () => {
  return (
    <FabulaUltimaTheme>
      <Layout>
        <Seo
          title="Tool per Fabula Ultima"
          description="Raccolta di tool per il gioco Fabula Ultima"
        />
        <Title order={2}>Avvertenze</Title>
        <Text>Fabula Ultima è un gioco edito e distribuito da <b>NEED GAMES s.r.l.</b>, tutti i diritti spettano a loro. Per ulteriori dettagli riguardo il gioco visitare <Anchor href='https://www.needgames.it/giochi/fabula-ultima/' target='_blank'>il sito ufficiale</Anchor></Text>
        <Text>I tool messi a disposizione su questo sito sono stati fatti senza usare la grafica ufficiale e senza violare i diritti d'autore.</Text>
        <Divider color='teal' style={{margin: '1rem'}}/>
        <Title order={2}>Tool</Title>
        <List withPadding size="lg" style={{fontSize: '2rem'}}>
          <List.Item icon={<FiClock/>}>
            <Anchor component={Link} to="gestore-orologi">
              <Title order={3}>Gestore orologi</Title>
            </Anchor>
          </List.Item>
        </List>
      </Layout>
    </FabulaUltimaTheme>
  )
}

export default IndexPage
