import { lazy } from 'react';


import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Cyclists from 'views/utilities/Tpc_Operation/Guards/Cyclists';
import QRFMovement from 'views/utilities/Tpc_Operation/QRF/QRFMovement';
import Xau_Usd from 'views/utilities/Website_Post/Currencies/Individual/Xau_Usd';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// MGI components
const TradersIdeas = Loadable(lazy(() => import('views/utilities/Website_Post/TradersIdea/TradersIdeas')));
const TradersIdeasList = Loadable(lazy(() => import('views/utilities/Website_Post/TradersIdea/TradersIdeasList')));
const MgiStrategyList = Loadable(lazy(() => import('views/utilities/Website_Post/MgiCandles/MgiStrategyList')));
const MgiStrategy = Loadable(lazy(() => import('views/utilities/Website_Post/MgiCandles/MgiStategy')));
const IncidentsView = Loadable(lazy(() => import('views/utilities/Tpc_Operation/Incidents/IncidentsView')));
const TradingTracker = Loadable(lazy(() => import('views/utilities/Website_Post/TradeTracker/TradingTracker')));

// TPC imports
const IncidentsList = Loadable(lazy(() => import('views/utilities/Tpc_Operation/Incidents/IncidentsList')));
const Incidents = Loadable(lazy(() => import('views/utilities/Tpc_Operation/Incidents/Incidents')));
const PatrolMovement = Loadable(lazy(() => import('views/utilities/Tpc_Operation/Patrol/PatrolMovement')));
const Controllers = Loadable(lazy(() => import('views/utilities/Tpc_Operation/Guards/Controllers')));


// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        },
        {
          path: 'util-color',
          element: <UtilsColor />
        },
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        },
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    // Add new mgi here
    {
      path: 'tradersideas',
      element: <TradersIdeas />
    },
    {
      path: 'tradersideas-list',
      element: <TradersIdeasList />
    },
    {
      path: 'mgistrategy',
      element: <MgiStrategy />
    },
    {
      path: 'mgistrategy-list',
      element: <MgiStrategyList />
    },
    {
      path: 'trade-tracker',
      element: <TradingTracker />
    },
    {
      path: 'xauusd',
      element: <Xau_Usd />
    },
     // Add new tpc here
    {
      path: 'newincident',
      element: <Incidents />
    },
    {
      path: 'incident-list',
      element: <IncidentsList />
    },
    {
      path: 'incidents/:id',
      element: <IncidentsView />
    },
    {
      path: 'controllers',
      element: <Controllers />
    },
    {
      path: 'cyclists',
      element: <Cyclists />
    },
    {
      path: 'patrolmovement',
      element: <PatrolMovement />
    },

    {
      path: 'qrfmovement',
      element: <QRFMovement />
    },

  ]
};

export default MainRoutes;
