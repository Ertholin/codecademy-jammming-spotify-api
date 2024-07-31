import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import Playlist from './Playlist';
import Tracklist from './Tracklist';

function App() {
  return (
    <div className="App-header">
      <Header />
      <SearchBar />
      <div className="container">
        <Tracklist />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
