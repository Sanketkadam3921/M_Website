import AppRouter from "./router/AppRouter";
import { AppointmentProvider } from "./context/AppointmentContext";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <AppointmentProvider>
          <AppRouter />
        </AppointmentProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
