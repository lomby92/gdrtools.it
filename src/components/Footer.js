import { Anchor, Center, Divider, Text, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import { MdLaunch } from "react-icons/md";

const Footer = () => {
    const theme = useMantineTheme();

    const backgroundColor = theme.colors['background'][6];
    const textColor = theme.colors[theme.primaryColor][7];

    return (
        <footer style={{backgroundColor: backgroundColor}}>
            <Center style={{height: 100}}>
                <Text align='center'>
                    <Title
                        order={3}
                        style={{color: textColor}}
                    >
                        GDRTOOLS.IT@{(new Date()).getFullYear()}
                    </Title>
                    <Divider color={textColor} style={{margin: '0 4rem'}}/>
                    <Anchor href="https://github.com/lomby92/gdrtools.it" target="_blank">Contribuisci su GitHub <MdLaunch/></Anchor>
                </Text>
            </Center>
        </footer>
    )
}

export default Footer
