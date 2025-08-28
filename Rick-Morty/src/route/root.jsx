import App from "../App"
import { ThemeProvider } from 'flowbite-react'
import createTheme from '../theme/index.js'
export default function Root(){
    return <ThemeProvider theme={createTheme} > <App/> </ThemeProvider>    
}