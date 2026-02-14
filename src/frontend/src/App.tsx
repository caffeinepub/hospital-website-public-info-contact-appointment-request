import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AppointmentRequestPage from './pages/AppointmentRequestPage';
import EmergencyPage from './pages/EmergencyPage';
import DoctorsPage from './pages/DoctorsPage';
import NotFoundPage from './pages/NotFoundPage';

const rootRoute = createRootRoute({
  component: () => (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const appointmentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/appointments',
  component: AppointmentRequestPage,
});

const emergencyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/emergency',
  component: EmergencyPage,
});

const doctorSuitesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doctor-suites',
  component: DoctorsPage,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFoundPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  contactRoute,
  appointmentsRoute,
  emergencyRoute,
  doctorSuitesRoute,
  notFoundRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
