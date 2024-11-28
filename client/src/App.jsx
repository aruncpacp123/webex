import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home'
import AllEvents from './pages/events'
import ContactUs from './pages/contact'
import AboutUs from './pages/aboutus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  )
}
export default App