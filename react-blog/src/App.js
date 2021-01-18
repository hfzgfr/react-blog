import NavBar from './navigations/NavBar';
import Home from './components/Home';
// import BlogPost from './components/BlogPost';

function App() {
  const title = "Blog Title";
  const owner = 'Hafiz';

  return (
    <div className="App">
      <NavBar/>
      <div className="content">
        <h1>{ title }</h1>
        <p>Created by { owner }</p>
        < Home />
        {/* <BlogPost /> */}  
      </div>
    </div>
  );
}

export default App;
