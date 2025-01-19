import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar"
import AppRoutes from "./routes"
import { AppProvider } from "./context"

const App = () => (
    <AppProvider>
        <Router>
            <Navbar />
            <AppRoutes />
        </Router>
    </AppProvider>
);

export default App;
