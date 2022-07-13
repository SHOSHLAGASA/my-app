import Header from './components/Header'
import './App.css';
import Music from './images/music.JPG'

function App() {
  return (
    <div>
      <Header />
     <img src= {Music}  alt="Music" height={200} width={200}/>
    </div>
  );
}

export default App;