import HomePage from '../pages/homePage';
import AboutPage from '../pages/aboutPage';
import ProjectPage from '../pages/projectPage';
import ContactPage from '../pages/contactPage';
import LinkedinPage from '../pages/linkedinPage';

const routes = [
    {
        path: '/',
        view: <HomePage />,
    },
    {
        path: '/about',
        view: <AboutPage />,
    },
    {
        path: '/projects',
        view: <ProjectPage />,
    },
    {
        path: '/contact',
        view: <ContactPage />,
    },
    {
        path: '/connect',
        view: <LinkedinPage />,
    },
];

export default routes;
