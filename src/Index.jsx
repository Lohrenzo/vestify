// import App from './App.jsx';

// import DashHome from './pages/dashboard/Home';
// import Deposit from './pages/dashboard/Deposit';
// import Profile from './pages/dashboard/Profile';


import { Routes, Route, NavLink, Link } from 'react-router-dom';

export default function Index() {
    return (
        <>
            <App />

            {/* <Routes>
                <Route path='/dashboard' element={ <DashHome /> }></Route>
                <Route path='/dashboard/deposit' element={ <Deposit /> }></Route>
                <Route path='/dashboard/profile' element={ <Profile /> }></Route>
            </Routes> */}
        </>
    );
}
