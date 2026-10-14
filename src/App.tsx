import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './core/auth/AuthContext';
import { AppProvider } from './context/AppContext';
import AppShell from './layouts/AppShell/AppShell';
import GlobalErrorBoundary from './shared/components/GlobalErrorBoundary/GlobalErrorBoundary';
import LoadingFallback from './shared/components/LoadingFallback/LoadingFallback';

const DashboardPage = React.lazy(() => import('./features/dashboard/DashboardPage'));
const InvestmentsPage = React.lazy(() => import('./features/investments/InvestmentsPage'));
const ProfilePage = React.lazy(() => import('./features/profile/ProfilePage'));

const App = () => (
  <GlobalErrorBoundary>
    <AuthProvider>
      <AppProvider>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<AppShell />}>
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="investments" element={<InvestmentsPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </AppProvider>
    </AuthProvider>
  </GlobalErrorBoundary>
);

export default App;
