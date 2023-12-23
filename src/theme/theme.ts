import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const customTheme = extendTheme({
  config,
  colors: {
    blue: {
      50: '#E3F2FD',
      100: '#BBDEFB',
      200: '#90CAF9',
      300: '#64B5F6',
      400: '#42A5F5',
      500: '#2196F3',
      600: '#1E88E5',
      700: '#1976D2',
      800: '#1565C0',
      900: '#0D47A1',
    },
    gray: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
  },
  cyan: {
    50: '#E0FCFF',
    100: '#BEF8FD',
    200: '#87EAF2',
    300: '#54D1DB',
    400: '#38BEC9',
    500: '#2CB1BC',
    600: '#14919B',
    700: '#0E7C86',
    800: '#0A6C74',
    900: '#044E54',
  },
  },
  },
)

export default customTheme;