import { Box } from "@chakra-ui/react";
import CodeEditor from "../components/CodeEditor";

const Editor = () => {
  return (
    <Box minH="95vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <CodeEditor />
    </Box>
  )
}

export default Editor
