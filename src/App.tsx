import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import ErrorBoundary from "./Features/admin/ErrorBoundary";
import Footer from "./components/Layout/Footer";
import RouterConfig from "./router";

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <RouterConfig />
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
