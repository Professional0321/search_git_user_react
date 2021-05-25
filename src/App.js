import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import UserList from "./Container/UserList";

function App() {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Typography component="div">
          <UserList />
        </Typography>
      </Container>
    </>
  );
}

export default App;
