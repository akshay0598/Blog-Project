import { useSelector } from 'react-redux';
import HomePage from '../src/components/HomePage';
import Navbar from './components/Navbar';
import { selectSignedIn } from './features/userSlice';
import './styling/app.css';
import Blogs from './components/Blogs';
function App() {
    const isSignedIn = useSelector(selectSignedIn);
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      {isSignedIn && <Blogs/>}
    </div>
  );
}

export default App;
