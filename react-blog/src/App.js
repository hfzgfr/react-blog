import './App.css';
import Header from './navigations/Header';
import BlogHome from './components/BlogHome';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello Index</h1>
      <BlogHome />
    </div>
  );
}

export default App;
