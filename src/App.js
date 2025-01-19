import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About";       // Updated path for About page
import NotFound from "./pages/NotFound"; // Updated path for NotFound page
import { AppProvider } from "./context"; // Updated path for context

const App = () => (
    <AppProvider>
        <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </Router>
    </AppProvider>
);

export default App;
