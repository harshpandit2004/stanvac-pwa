import Navbarcmp from './Components/Navbar/Navbar';
import Content from './Components/Body/Content';
import Foot from './Components/Footer/Foot';

function App() {
  return (
    <div className="App">
      <Navbarcmp className ="navbar"/>
      <Content/>
      <Foot/>
    </div>
  );
}

export default App;
