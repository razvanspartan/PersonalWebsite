
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './screens/Home/Home';
import Layout from "./components/Layout/Layout";
import About from "./screens/About/About";
function App() {
  return (
      <Router>
          <Layout>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          </Routes>
          </Layout>
      </Router>
  );
}

export default App;
