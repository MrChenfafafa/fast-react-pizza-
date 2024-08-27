import { Suspense } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../ui/Header';
import CartOverview from '../features/cart/CartOverview';
import Loader from '../ui/Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {/* //{isLoading && <Loader />} */}
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;