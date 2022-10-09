export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
              },
              {
                path: '/admin',
                name: 'admin',
                icon: 'crown',
                // component: './Admin',
                authority: ['admin'],
                routes: [
                  {
                    path: '/admin/sub-page',
                    name: 'sub-page',
                    icon: 'smile',
                    component: './Admin',
                    authority: ['admin'],
                  },
                  {
                    path: '/admin/accounts',
                    name: 'accounts',
                    icon: 'TeamOutlined',
                    component: './Account',
                    authority: ['admin'],
                  },
                  {
                    path: '/admin/profile',
                    name: 'profile',
                    icon: 'UserOutlined',
                    component: './Profile',
                    authority: ['admin'],
                  },
                ],
              },
              {
                name: 'list.table-list',
                icon: 'table',
                path: '/list',
                component: './TableList',
              },
              // {
              //   path: '/accounts',
              //   name: 'accounts',
              //   icon: 'TeamOutlined',
              //   component: './Account',
              // },
              {
                name: 'music-player',
                icon: 'PlayCircleOutlined',
                path: '/musicplayer',
                routes: [
                  {
                    path: '/musicplayer/musicplayerv1',
                    name: 'music-player-v1',
                    component: './MusicPlayer',
                  },
                  {
                    path: '/musicplayer/musicplayerv2',
                    name: 'music-player-v2',
                    component: './MusicPlayerV2',
                  },
                ],
              },
              {
                name: 'weather-app',
                icon: 'CloudOutlined',
                path: '/weatherapp',
                component: './Weather',
              },
              {
                path: '/profile',
                name: 'profile',
                icon: 'UserOutlined',
                component: './Profile',
              },
              // {
              //   path: '/cv',
              //   name: 'cv',
              //   icon: 'AuditOutlined',
              //   component: './CV',
              // },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
