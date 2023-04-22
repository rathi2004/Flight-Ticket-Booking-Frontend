import './App.css';
import { Routes, Route} from 'react-router-dom';
import Form from './components/login';
import Image1 from './home';
import Signup from './components/signup';
import Tickets from './components/Tickets';
import BasicTable from './components/schedule';
import Password3 from './components/forget';
import Chauffer from './components/chauffer';
import Requirement from './components/requirement';
import Health from './components/health';
import Food from './components/food';
import Vedios from './components/vedio';
import Feedback from './components/commentpage';
import Sample from './components/sample';
import Availableflights from './components/Availableflight';
import Confirmpage from './components/Confirm';
import Off1 from './components/Off1';
import Off2 from './components/Off2';
import Off3 from './components/Off3';
import Off4 from './components/Off4';
import Off5 from './components/Off5';
import Off6 from './components/Off6';
import Off7 from './components/Off7';
import Off8 from './components/Off8';
import Off9 from './components/Off9';
import Off10 from './components/Off10';
import Hotel from './components/Hotel';

function App() {
  return (
        <Routes>
            <Route path='/' element={<Form/>}></Route>
            <Route path='/Home' element={<Image1/>}></Route>
            <Route path='/Signup' element={<Signup/>}></Route>
            <Route path='/Ticket' element={<Tickets/>}></Route>
            <Route path='/Schedule' element={<BasicTable/>}></Route>
            <Route path='/Forget' element={<Password3/>}></Route>
            <Route path='/Coupon' element={<Sample/>}></Route>
            <Route path='/Chauffer' element={<Chauffer/>}></Route>
            <Route path='/Requirement' element={<Requirement/>}></Route>
            <Route path='/Health' element={<Health/>}></Route>
            <Route path='/Food' element={<Food/>}></Route>
            <Route path="/Safety" element={<Vedios/>}></Route>
            <Route path="/Feedback" element={<Feedback/>}></Route>
            <Route path="/Availableflights" element={<Availableflights/>}></Route>
            <Route path="/Confirm" element={<Confirmpage/>}></Route>
            <Route path="/Off1" element={<Off1/>}></Route>
            <Route path="/Off2" element={<Off2/>}></Route>
            <Route path="/Off3" element={<Off3/>}></Route>
            <Route path="/Off4" element={<Off4/>}></Route>
            <Route path="/Off5" element={<Off5/>}></Route>
            <Route path="/Off6" element={<Off6/>}></Route>
            <Route path="/Off7" element={<Off7/>}></Route>
            <Route path="/Off8" element={<Off8/>}></Route>
            <Route path="/Off9" element={<Off9/>}></Route>
            <Route path="/Off10" element={<Off10/>}></Route>
            <Route path="/Hotel" element={<Hotel/>}></Route>
        </Routes>
  );
}

export default App;
