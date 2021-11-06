import { MantineProvider } from '@mantine/core';
import * as React from "react";

const OldSchoolEssentialsTheme = ({ children }) => {
  return (
    <MantineProvider theme={{
      colors: {
        'background': ['#C1C2C5', '#A6A7AB', '#909296', '#5c5f66', '#373A40', '#2C2E33', '#25262b', '#1A1B1E', '#141517', '#101113'],
      },
      primaryColor: 'red',
    }}>
      {children}
    </MantineProvider>
  )
}

export default OldSchoolEssentialsTheme
