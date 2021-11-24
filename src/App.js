import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea'

function App() {
  return (
    <>
    
     <Navbar title ="Text Utils"/>
     <div className="container my-4">

     <TextArea heading="Enter Your Text here to Analyze"/>
     </div>
  </>
  );
}
export default App;