import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy } from 'react';
import Home from './ui/Home';
import Error from './ui/Error';
import AppLayout from './ui/AppLayout';

// 懒加载组件
const Menu = lazy(() => import('./features/menu/Menu'));
const Order = lazy(() => import('./features/order/Order'));
const Cart = lazy(() => import('./features/cart/Cart'));
const CreateOrder = lazy(() => import('./features/order/CreateOrder'));
// //Loader组件
// import Loader from './ui/Loader';

// 加载器和动作
import { loader as menuLoader } from './features/menu/Menu';
import { loader as orderLoader } from './features/order/Order';
import { action as createOrderAction } from './features/order/CreateOrder';
import { action as updateOrderAction } from './features/order/UpdateOrder';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// ✓ 73 modules transformed.
// dist/index.html                   0.92 kB │ gzip:  0.52 kB
// dist/assets/index-DOe0Umxw.css   16.10 kB │ gzip:  3.67 kB
// dist/assets/index-Br1SB63Q.js   250.49 kB │ gzip: 82.15 kB
// ✓ built in 6.73s
