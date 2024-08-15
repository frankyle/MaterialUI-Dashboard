// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Main Content',
  type: 'group',
  children: [
    {
      id: 'admin-operations',
      title: 'MGI Operations',
      type: 'collapse',
      icon: icons.IconPalette, // You can choose a different icon if preferred
      children: [
        {
          id: 'tradersideas',
          title: 'Traders Ideas',
          type: 'item',
          url: '/tradersideas',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'tradersideas-list',
          title: 'Traders Ideas List',
          type: 'item',
          url: '/tradersideas-list',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'mgistrategy',
          title: 'Mgi Strategy',
          type: 'item',
          url: '/mgistrategy',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'mgistrategy-list',
          title: 'Mgi Strategy List',
          type: 'item',
          url: '/mgistrategy-list',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'trade-tracker',
          title: 'Trade Tracker',
          type: 'item',
          url: '/trade-tracker',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'xauusd',
          title: 'XAU USD',
          type: 'item',
          url: '/xauusd',
          icon: icons.IconPalette,
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'admin-operations',
      title: 'TPC Operations',
      type: 'collapse',
      icon: icons.IconPalette, // You can choose a different icon if preferred
      children: [
        {
          id: 'newincident',
          title: 'New Incident',
          type: 'item',
          url: '/newincident',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'incident-list',
          title: 'All Incidents List',
          type: 'item',
          url: '/incident-list',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
 
        {
          id: 'controllers',
          title: 'Controllers',
          type: 'item',
          url: '/controllers',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        {
          id: 'cyclists',
          title: 'Cyclist',
          type: 'item',
          url: '/cyclists',
          icon: icons.IconPalette,
          breadcrumbs: false
        },

        {
          id: 'patrolmovement',
          title: 'Patrol Movements',
          type: 'item',
          url: '/patrolmovement',
          icon: icons.IconPalette,
          breadcrumbs: false
        },

        {
          id: 'qrfmovement',
          title: 'QRF Movements',
          type: 'item',
          url: '/qrfmovement',
          icon: icons.IconPalette,
          breadcrumbs: false
        },
        

      ]
    },
    {
      id: 'util-typography',
      title: 'Typography',
      type: 'item',
      url: '/utils/util-typography',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'Color',
      type: 'item',
      url: '/utils/util-color',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: 'Shadow',
      type: 'item',
      url: '/utils/util-shadow',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'icons',
      title: 'Icons',
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'tabler-icons',
          title: 'Tabler Icons',
          type: 'item',
          url: '/icons/tabler-icons',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'Material Icons',
          type: 'item',
          external: true,
          target: '_blank',
          url: 'https://mui.com/material-ui/material-icons/',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default utilities;
