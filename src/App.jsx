//  link
import { Routes, Route, NavLink, Link } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Plans from './pages/Plans';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/dashboard/DashHome';
import Deposit from './pages/dashboard/Deposit';
import Profile from './pages/dashboard/Profile';

// Components
// import Nav from './components/Nav';
// import Footer from './components/Footer';
import GoToTop from './GoToTop';

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/plans' element={<Plans />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/deposit' element={<Deposit />} />
        <Route path='/dashboard/profile' element={<Profile />} />
    </Routes>
      {/* <Nav />
      <Footer /> */}
      {/* <Home /> */}
      {/* <GoToTop /> */}
    </>
  )
}

export default App
