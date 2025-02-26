
import { Container } from "@mui/material";
import { TaskManager } from "./components/TaskManager";
import { Nav } from "./components/AppBar";

export const config = {
  endpoint: `https://mern-task-manager-2-b184.onrender.com`,
};

const App = () => {
  return (
    <>
      <Nav />
      <Container maxWidth="lg">
        <TaskManager />
      </Container>
    </>
  );
};

export default App;