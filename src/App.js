import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme";
import ScrollToTop from "./components/scroll-to-top";
import Router from "./routes";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ScrollToTop />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
