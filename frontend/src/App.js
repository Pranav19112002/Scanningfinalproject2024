
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Addtype from './components/ScanType/Addtype';
import Adnavbar from './components/Navbar/Adnavbar';
import Adsidebar from './components/Navbar/Adsidebar';
import Editscanning from './components/Scanning/Editscanning';
import ViewScanning from './components/Scanning/Viewscanning';
import Adlogin from './Admin/Adlogin';
import Addscanning from './components/Scanning/Addscanning';
import Adregister from './Admin/Adregister';
import Edittype from './components/ScanType/Edittype';
import Viewtype from './components/ScanType/Viewtype';
import Adsettab from './components/Settings/Adsettab';
import Adminsettings from './components/Settings/Adminsettings';
import Bookings from './components/Bookings/Bookings';
import Adhome from './components/Scanning/Adhome';
import Home from './User/Homescreen/Home';
import Homescreen from './User/Homescreen/Homescreen';
import Contact from './User/Homescreen/Contact';
import Pagenotfound from './User/Homescreen/Pagenotfound';
import About from './User/Homescreen/About';
import Scans from './User/Homescreen/Scans';
import Userreg from './User/Registration/Userreg';
import Userlogin from './User/Registration/Userlogin';
import Users from './User/Registration/Users';
import Bookingscreen from './User/Bookingscreen/Bookingscreen';
import Userprof from './User/UserProfile/Userprof';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path={'/login'} element={<Adlogin method='post'/>}></Route> 
      <Route path={'/addscan'} element={<Addscanning />}></Route>
      <Route path={'/adreg'} element={<Adregister />}></Route>
      <Route path={'/viewscan'} element={<ViewScanning />}></Route>
      <Route path={'/editscan'} element={<Editscanning />}></Route>
      <Route path={'/panel'} element={<Adhome />}></Route>
      <Route path={'/side'} element={<Adsidebar />}></Route>
      <Route path={'/nav'} element={<Adnavbar />}></Route>
      <Route path={'/addtype'} element={<Addtype />}></Route>
      <Route path={'/edittype'} element={<Edittype />}></Route>
      <Route path={'/viewtype'} element={<Viewtype />}></Route>
      <Route path={'/adsettab'} element={<Adsettab/>}></Route>
      <Route path={'/adset'} element={<Adminsettings/>}></Route>
      <Route path={'/book'} element={<Bookings/>}></Route>
      <Route path={'/'} element={<Home/>}></Route>
      <Route path={'/home'} element={<Homescreen/>}></Route>
      <Route path={'/about'} element={<About/>}></Route>
      <Route path={'/contact'} element={<Contact/>}></Route>
      <Route path={'/scans'} element={<Scans/>}></Route>
      <Route path={'*'} element={<Pagenotfound/>}></Route>
      <Route path={'/userreg'} element={<Userreg/>}></Route>
      <Route path={'/userlog'} element={<Userlogin/>}></Route>
      <Route path={'/users'} element={<Users/>}></Route>
      <Route path={'/userprof'} element={<Userprof/>}></Route>
      <Route path="/book/:id/:name/:type/:amount" element={<Bookingscreen/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
