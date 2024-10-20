import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ExampleDetails from './pages/ExampleDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/example/:id',
    element: <ExampleDetails />,
  },
  // Add other pages here
  {
    path: '*',
    element: <div>404</div>,
  },
]);

export default router;
