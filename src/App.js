import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar"
import AppRoutes from "./routes"
import { AppProvider } from "./context"
import ErrorBoundary from "./ErrorBoundary"

const App = () => (
    <ErrorBoundary>
        <AppProvider>
            <Router>
                <Navbar />
                <AppRoutes />
            </Router>
        </AppProvider>
    </ErrorBoundary>
);

export default App;
