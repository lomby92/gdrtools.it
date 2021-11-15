import { Center } from "@mantine/core"
import * as React from "react"
import GestoreOrologio from "../../../components/fabula-ultima/gestore-orologi/GestoreOrologio"
import Layout from "../../../components/Layout"
import Seo from "../../../components/Seo"
import FabulaUltimaTheme from "../../../themes/FabulaUltimaTheme"

const GestoreOrologi = () => {
  return (
    <FabulaUltimaTheme>
      <Layout>
        <Seo
          title="Gestore orologi - Fabula Ultima"
          description="Gestore per gli orologi (clock) di Fabula Ultima"
        />
        <Center>
          <GestoreOrologio/>
        </Center>
      </Layout>
    </FabulaUltimaTheme>
  )
}

export default GestoreOrologi
