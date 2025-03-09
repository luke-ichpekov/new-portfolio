import { Provider } from "./components/ui/provider"
import './App.css';
import { Box } from "@chakra-ui/react"
import About from './components/About';
import Header from './components/Header';
import { HStack, Stack, VStack } from "@chakra-ui/react"
function App() {  
  return (
    <Provider>
      <Box className="bg-black h-screen flex justify-center">
        <Box className="max-w-lg w-full p-20">
          <Stack gap={"10"}>
            <Header/>
            <About/>
          </Stack>
        </Box>
      </Box>
    </Provider>
  );
}

export default App;
