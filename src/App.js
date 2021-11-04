import "./App.css";
import Header from "./components/Header";
import theme from "./components/ui/Theme";
import { ThemeProvider } from "@material-ui/styles";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
