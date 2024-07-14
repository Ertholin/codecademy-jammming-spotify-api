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
      <Tracklist />
      <Playlist />
    </div>
  );
}

export default App;
