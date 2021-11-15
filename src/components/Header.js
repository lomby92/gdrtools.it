import { Anchor, Title, useMantineTheme } from "@mantine/core";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const query = graphql`
{
  logo: file(base: {eq: "logo.png"}, sourceInstanceName: {eq: "images"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FIXED,
        height: 40,
        placeholder: TRACED_SVG,
      )
    }
  }    
}
`;

const Header = () => {
    const theme = useMantineTheme();

    const backgroundColor = theme.colors['background'][6];
    const textColor = theme.colors[theme.primaryColor][7];

    const { logo } = useStaticQuery(query);

    return (
        <header style={{backgroundColor: backgroundColor, padding: '0 1rem', display: 'flex'}}>
            <Anchor
                component={Link}
                to="/"
                style={{alignItems: 'center', display: 'flex'}}
            >
                <GatsbyImage
                    image={logo.childImageSharp.gatsbyImageData}
                    alt="logo"
                    style={{borderRadius: '0.5rem'}}
                />
                <Title style={{color: textColor, paddingLeft: '0.5rem'}}>GDRTools.it</Title>
            </Anchor>
        </header>
    );
}

export default Header
