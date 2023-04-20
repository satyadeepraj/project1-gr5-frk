
import './App.css';
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Header from "./Pages/Header/Header";
import AboutUs from './Pages/AboutUs/AboutUs';
import Training  from "./Pages/Training/Training";
import Pricing from './Pages/Pricing/Pricing';
import Login from './Pages/Login/Login'
import Trainer from "./Pages/TrainerSection/Trainer";
import Registration from "./Pages/Registration/Registration";
import Team from "./Pages/Team"
function App() {
  return (

    <BrowserRouter>
    
     <Routes>
    {/* <Header/> */}
     <Route path='/' element={<Login/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/training' element={<Training/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/trainer' element={<Trainer/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/Team' element={<Team/>}/>

     </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
