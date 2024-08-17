import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import WebLayout from 'layout/WebLayout';

// login option 3 routing
const MgiWebsiteFree = Loadable(lazy(() => import('views/utilities/Websites/MgiWebsiteFree/MgiWebsiteFree')));
const MgiWebsitePaid = Loadable(lazy(() => import('views/utilities/Websites/MgiWebsitePaid/MgiWebsitePaid')));
const MgiTutorialsWebsite = Loadable(lazy(() => import('views/utilities/Websites/MgiTutorialsWebsite/MgiTutorialsWebsite')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const WebsitesRoutes = {
  path: '/',
  element: <WebLayout />,
  children: [
    {
      path: '/mgiwebsitefree',
      element: <MgiWebsiteFree />
    },
    {
      path: '/mgiwebsitepaid',
      element: <MgiWebsitePaid />
    },
    {
      path: '/mgitutorialswebsite',
      element: <MgiTutorialsWebsite />
    }
  ]
};

export default WebsitesRoutes;
