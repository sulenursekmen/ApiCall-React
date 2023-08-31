import './App.css';

import SearchHeader from './SearchHeader';
import searchImages from './Api';
//npm install axios
function App() {
  const handleSubmit =(term)=>{
    debugger;
    console.log(term);
    searchImages(term);
  }
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
    </div>
  );
}

export default App;
