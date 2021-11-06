import React from "react"
import { Link } from "gatsby"
import { Anchor, Title, useMantineTheme } from "@mantine/core";

const Header = () => {
    const theme = useMantineTheme();

    const backgroundColor = theme.colors['background'][6];
    const textColor = theme.colors[theme.primaryColor][7];

    return (
        <header style={{backgroundColor: backgroundColor, padding: '0 1rem'}}>
            <Anchor component={Link} to="/">
                <Title style={{color: textColor}}>GDRTool.it</Title>
            </Anchor>
        </header>
    );
}

export default Header
