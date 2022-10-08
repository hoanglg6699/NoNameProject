import {
  FacebookOutlined,
  GithubOutlined,
  GoogleOutlined,
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Alert, Space, message, Tabs, Button } from 'antd';
import React, { useState } from 'react';
import ProForm, { ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import { useIntl, connect, FormattedMessage, useHistory } from 'umi';
import styles from './index.less';
import Register from '../register';
import UpdateForm from '../resetPassword/components/UpdateForm';
import accounts from '../account';

const LoginMessage = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login = (props) => {
  const { userLogin = {}, submitting } = props;
  const { status, type: loginType } = userLogin;
  const [type, setType] = useState('account');
  const intl = useIntl();
  const history = useHistory();
  const [resetPasswordModalVisible, handleResetPasswordModalVisible] = useState(false);
  const [registerModalVisible, handleRegisterModalVisible] = useState(false);
  const [accountList] = useState(accounts);

  const handleResetPasswordSubmit = async (fields) => {
    const hide = message.loading(
      intl.formatMessage({
        id: 'pages.resetPassword.configuring',
        defaultMessage: 'Configuring',
      }),
    );

    try {
      // await updateRule({
      //   name: fields.name,
      //   desc: fields.desc,
      //   key: fields.key,
      // });
      const resetPassword = () => {
        window.localStorage.setItem('passwordReact', fields.newPassword);
      };
      await resetPassword();
      hide();
      message.success(
        intl.formatMessage({
          id: 'pages.resetPassword.configuredSuccessfully',
          defaultMessage: 'Configured successfully',
        }),
      );
      return true;
    } catch (error) {
      hide();
      message.error(
        intl.formatMessage({
          id: 'pages.resetPassword.configurationFailed',
          defaultMessage: 'Configuration failed, please try again!',
        }),
      );
      return false;
    }
  };

  

  const handleSubmit = async (values) => {
    
    // accountList.map((account) => {
    // console.log('account', account);
    // if (account.username === values.userName && account.password === values.password) {
    //   history.push('/welcome');
    // }
    // =======================

    // });
    if (
      localStorage.getItem('usernameReact') == values.userName &&
      localStorage.getItem('passwordReact') == values.password
    ) {
      await setTimeout(2000);
      localStorage.setItem('antd-pro-authority', 'user')
      history.push('/welcome');
    } 
    // else {
    //   const { dispatch } = props;
    //   dispatch({
    //     type: 'login/login',
    //     payload: { ...values, type },
    //   });
    // }
  };

  return (
    <div className={styles.main}>
      <ProForm
        initialValues={{
          autoLogin: true,
        }}
        submitter={{
          searchConfig: {
            submitText: intl.formatMessage({
              id: 'pages.login.submit',
              defaultMessage: 'Submit',
            }),
          },
          render: (_, dom) => dom.pop(),
          submitButtonProps: {
            loading: submitting,
            size: 'large',
            style: {
              width: '100%',
            },
          },
        }}
        onFinish={(values) => {
          handleSubmit(values);
          return Promise.resolve();
        }}
      >
        <Tabs activeKey={type} onChange={setType}>
          <Tabs.TabPane
            key="account"
            tab={intl.formatMessage({
              id: 'pages.login.accountLogin.tab',
              defaultMessage: 'Account Login',
            })}
          />
        </Tabs>

        {status === 'error' && loginType === 'account' && !submitting && (
          <LoginMessage
            content={intl.formatMessage({
              id: 'pages.login.accountLogin.errorMessage',
              defaultMessage: 'Incorrect username/password（admin/123)',
            })}
          />
        )}
        {type === 'account' && (
          <>
            <ProFormText
              name="userName"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={styles.prefixIcon} />,
              }}
              placeholder={intl.formatMessage({
                id: 'pages.login.username.placeholder',
                defaultMessage: 'Username: admin or user',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.username.required"
                      defaultMessage="Please input your username!"
                    />
                  ),
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={styles.prefixIcon} />,
              }}
              placeholder={intl.formatMessage({
                id: 'pages.login.password.placeholder',
                defaultMessage: 'Password: 123',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.password.required"
                      defaultMessage="Please input your password!"
                    />
                  ),
                },
              ]}
            />
          </>
        )}
        <div
          style={{
            marginBottom: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            <FormattedMessage id="pages.login.rememberMe" defaultMessage="Remember me" />
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
            onClick={() => {
              handleResetPasswordModalVisible(true);
            }}
          >
            <FormattedMessage id="pages.login.forgotPassword" defaultMessage="Forgot Password?" />
          </a>
        </div>
      </ProForm>
      <Space className={styles.other}>
        <FormattedMessage id="pages.login.loginWith" defaultMessage="Login with" />
        <GoogleOutlined className={styles.icon} />
        <FacebookOutlined className={styles.icon} />
        <GithubOutlined className={styles.icon} />
      </Space>
      <hr style={{ margin: '40px 0 40px 0' }} />
      {/* <Register /> */}
      <Button
        size="large"
        style={{
          color: 'white',
          background: '#42b72a',
          width: '100%',
        }}
        onClick={() => handleRegisterModalVisible(true)}
      >
        {intl.formatMessage({
          id: 'pages.login.registerAccount',
          defaultMessage: 'Create New Account',
        })}
      </Button>
      <Register
        onCancel={() => {
          handleRegisterModalVisible(false);
        }}
        registerModalVisible={registerModalVisible}
      />

      {/* Forgot Password */}
      <UpdateForm
        onSubmit={async (value) => {
          const success = await handleResetPasswordSubmit(value);

          if (success) {
            handleResetPasswordModalVisible(false);
          }
        }}
        onCancel={() => {
          handleResetPasswordModalVisible(false);
        }}
        resetPasswordModalVisible={resetPasswordModalVisible}
      />
    </div>
  );
};

export default connect(({ login, loading }) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(Login);
