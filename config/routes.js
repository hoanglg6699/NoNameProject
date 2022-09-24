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
                component: './Admin',
                authority: ['admin'],
                routes: [
                  {
                    path: '/admin/sub-page',
                    name: 'sub-page',
                    icon: 'smile',
                    component: './Welcome',
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
              {
                name: 'music-player',
                icon: 'PlayCircleOutlined',
                path: '/musicplayer',
                // component: './MusicPlayer',
                routes: [
                  {
                    path: '/musicplayer/musicplayerv1',
                    name: 'music-player-v1',
                    // icon: 'smile',
                    component: './MusicPlayer',
                  },
                  {
                    path: '/musicplayer/musicplayerv2',
                    name: 'music-player-v2',
                    // icon: 'smile',
                    component: './MusicPlayer',
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
