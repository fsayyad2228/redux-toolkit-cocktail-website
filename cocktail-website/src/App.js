
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import PagenotFound from './pages/PagenotFound';
import Layout from './component/Layout';
import SearchBox from './component/SearchBox';
 

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<>
          <Layout>
            <SearchBox />
            <HomePage />
          </Layout>
        </>
        } 
        />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='*' element={<PagenotFound />} />
      </Routes>
    </>
  );
}

export default App;
