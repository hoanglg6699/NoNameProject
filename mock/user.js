const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

// const account = {
//   username: `${localStorage.getItem('usernameReact')}`,
//   password: `${localStorage.getItem('passwordReact')}`,
// };
// {
//   username: 'hoanglg',
//   password: '123',
// };

export default {
  // 支持值为 Object 和 Array
  'GET /api/currentUser': {
    name: 'HoangLG',
    // name: localStorage.getItem('fullname'),
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'hoanglg6699@gmail.com',
    signature: 'The sea is full of rivers, and there is tolerance is great',
    title: 'NoNameProject',
    group: 'Private',
    tags: [
      {
        key: '0',
        label: 'Very thoughtful',
      },
      {
        key: '1',
        label: 'Focus on design',
      },
      {
        key: '2',
        label: 'Spicy~',
      },
      {
        key: '3',
        label: 'Big long legs',
      },
      {
        key: '4',
        label: 'Long hair',
      },
      {
        key: '5',
        label: 'Hundreds of rivers',
      },
    ],
    notifyCount: 12,
    unreadCount: 11,
    country: 'VN',
    geographic: {
      province: {
        label: 'D.1',
        key: '330000',
      },
      city: {
        label: 'HCMC',
        key: '330100',
      },
    },
    address: 'Nguyen Hue',
    phone: '0938932440',
  },
  // GET POST 可省略
  'GET /api/users': [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ],
  'POST /api/login/account': async (req, res) => {
    const { password, userName, type } = req.body;

    await waitTime(2000);

    if (password === '123' && userName === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      return;
    }

    if (
      password === '123' &&
      userName === 'user'
      // ||
      // (password == account.password && userName == account.username)
    ) {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'user',
      });
      return;
    }

    // if (password == account.password && userName == account.username) {
    //   res.send({
    //     status: 'ok',
    //     type,
    //     currentAuthority: 'user',
    //   });
    //   return;
    // }

    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    });
  },
  'POST /api/register': (req, res) => {
    res.send({
      status: 'ok',
      currentAuthority: 'user',
    });
  },
  'GET /api/500': (req, res) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },
  'GET /api/404': (req, res) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212',
    });
  },
  'GET /api/403': (req, res) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'GET /api/401': (req, res) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
};
