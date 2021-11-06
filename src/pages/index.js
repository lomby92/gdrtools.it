import { Anchor, List, Text, Title } from "@mantine/core"
import { Link } from "gatsby"
import * as React from "react"
import { FaFeather } from "react-icons/fa"
import { GiBadGnome, GiSeaTurtle } from "react-icons/gi"
import Layout from "../components/Layout"
import DefaultTheme from "../themes/DefaultTheme"

const IndexPage = () => {
  const fabulaUltimaColor = 'teal';
  const oldSchoolEssentialsColor = 'red';
  const troikaColor = 'orange';

  return (
    <DefaultTheme>
      <Layout>
      <Title order={2}>Disclamer</Title>
        <Text>Questo sito contiene un insieme di tool per aiutare giocatori e master nei GDR. Tutto il codice è open source e senza scopo di lucro</Text>

        <Title order={2} style={{padding: '2rem 0 1rem 0'}}>Elenco dei giochi</Title>
        <List withPadding size="lg" style={{fontSize: '2rem'}}>
          <List.Item icon={<FaFeather color={fabulaUltimaColor}/>}>
            <Anchor component={Link} to="/fabula-ultima" color={fabulaUltimaColor}>
              <Title order={4} style={{color: fabulaUltimaColor}}>Fabula Ultima</Title>
            </Anchor>
          </List.Item>
          <List.Item icon={<GiBadGnome color={oldSchoolEssentialsColor}/>}>
            <Anchor component={Link} to="/old-school-essentials" color={oldSchoolEssentialsColor}>
              <Title order={4} style={{color: oldSchoolEssentialsColor}}>Old School Essentials</Title>
            </Anchor>
          </List.Item>
          <List.Item icon={<GiSeaTurtle color={troikaColor}/>}>
            <Anchor component={Link} to="/troika" color={troikaColor}>
              <Title order={4} style={{color: troikaColor}}>Troika</Title>
            </Anchor>
          </List.Item>
        </List>
      </Layout>
    </DefaultTheme>
  )
}

export default IndexPage
