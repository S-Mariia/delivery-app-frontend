import { Routes, Route, Navigate } from 'react-router-dom';

import { lazy, Suspense } from 'react';

import Loader from 'shared/components/Loader/Loader';
import SharedLayout from 'shared/components/SharedLayout/SharedLayout';

const ShopsPage = lazy(() => import('./pages/ShopsPage/ShopsPage'));
const ShoppingCartPage = lazy(() =>
  import('./pages/ShoppingCartPage/ShoppingCartPage')
);
const OrderHistoryPage = lazy(() =>
  import('./pages/OrderHistoryPage/OrderHistoryPage')
);

const UserRoutes = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<ShopsPage />} />
            <Route path="/cart" element={<ShoppingCartPage />} />
            <Route path="/history" element={<OrderHistoryPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default UserRoutes;
