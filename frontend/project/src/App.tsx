import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import LoadingScreen from './components/ui/LoadingScreen';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const WardPage = lazy(() => import('./pages/WardPage'));
const PrioritiesPage = lazy(() => import('./pages/PrioritiesPage'));
const IssuesPage = lazy(() => import('./pages/IssuesPage'));
const FeedbackPage = lazy(() => import('./pages/FeedbackPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const DashboardPage = lazy(() => import('./pages/admin/DashboardPage'));

function App() {
  return (
    <AppLayout>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ward/:wardId" element={<WardPage />} />
          <Route path="/priorities" element={<PrioritiesPage />} />
          <Route path="/issues" element={<IssuesPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </AppLayout>
  );
}

export default App;