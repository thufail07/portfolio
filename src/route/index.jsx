import HomePage from '../pages/homePage';
import AboutPage from '../pages/aboutPage';

const routes = [
    {
        path: '/',
        view: <HomePage />,
    },
    {
        path: '/about',
        view: <AboutPage />,
    },
];

export default routes;
