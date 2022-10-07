import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './compo/About/About';
import CartProducts from './compo/CartProducts/CartProducts';
import Shop from './compo/Shop/Shop';
import Layout from './Layout/Layout';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Layout></Layout>, children: [
      { path: '/', element: <Shop></Shop>},
      { path: '/home', 
      loader: ()=>fetch('products.json'),
      element: <Shop></Shop>},
      { path: '/cart', element: <CartProducts></CartProducts> },
      { path: '/about', element: <About></About> },
    ] },
  ])

  return (
    <div className='body'>
        <RouterProvider router={router}></RouterProvider>      
    </div>
  );
}

export default App;
