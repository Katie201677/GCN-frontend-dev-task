import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'


import './App.css';
import Page from './components/Page';

library.add(fab, faBars, faSearch);


function App() {
  return (
    <div className="App">
      <Page/>
    </div>
  );
}

export default App;
