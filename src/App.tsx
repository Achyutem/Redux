import { Provider } from "react-redux";
import store from "./store/store";
import { Container, Typography } from "@mui/material";
import AddHabit from "./Components/addHabit";
import HabitList from "./Components/habitList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Container>
          <Typography component="h1" variant="h2" align="center">
            Habit Tracker
          </Typography>
          <AddHabit />
          <HabitList />
        </Container>
      </div>
    </Provider>
  )
}

export default App
