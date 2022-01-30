import { ThemeProvider } from "next-themes";
import { lightTheme, darkTheme } from "../../stitches.config";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        dark: darkTheme.className,
        light: lightTheme.className,
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
