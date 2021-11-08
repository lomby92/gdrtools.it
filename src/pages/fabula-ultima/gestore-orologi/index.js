import { Center } from "@mantine/core"
import * as React from "react"
import GestoreOrologio from "../../../components/fabula-ultima/gestore-orologi/GestoreOrologio"
import Layout from "../../../components/Layout"
import FabulaUltimaTheme from "../../../themes/FabulaUltimaTheme"

const GestoreOrologi = () => {
  return (
    <FabulaUltimaTheme>
      <Layout>
        <Center>
          <GestoreOrologio/>
        </Center>
      </Layout>
    </FabulaUltimaTheme>
  )
}

export default GestoreOrologi
