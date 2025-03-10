import { Provider } from "./components/ui/provider"
import './App.css';
import { Box } from "@chakra-ui/react"
import About from './components/About';
import DoubleColumn from './components/DoubleColumn';
import HeadingText from './components/HeadingText'
import WorkCard from './components/WorkCard'
import { HStack, Stack, VStack } from "@chakra-ui/react"
import AvatarBox from "./components/AvatarBox";
import WorkDesciprtion from "./components/WorkDesciprtion";
import Title from "./components/Title";
import ProjectCard from "./components/ProjectCard";
function App() {  
  return (
    <Provider>
      <Box className="bg-black h-screen flex justify-center">
        <Box maxW={"2xl"} className="p-20">
          <Stack gap={"10"}>
          <DoubleColumn Element1={AvatarBox} Element2={HeadingText} />
          <About />
            <DoubleColumn Element1={WorkCard} Element2={WorkDesciprtion} />
            <DoubleColumn Element1={WorkCard} Element2={WorkDesciprtion} />
            <DoubleColumn Element1={WorkCard} Element2={WorkDesciprtion} />
            <DoubleColumn Element1={WorkCard} Element2={WorkDesciprtion} />
            <Title title= "Projects" />
            <DoubleColumn Element1={ProjectCard} Element2={WorkDesciprtion} />
            <DoubleColumn Element1={ProjectCard} Element2={WorkDesciprtion} />
            <Title title="Socials" />

          </Stack>
        </Box>
      </Box>
    </Provider>
  );
}

export default App;
