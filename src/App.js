import Header from './components/Header'
import './App.css';
import Music from './images/music.JPG'

function App() {
  return (
    <div className='music'>
      <Header />
     <img src= {Music}  alt="Music" height={250} width={800}/>
    </div>
  );
}

export default App;