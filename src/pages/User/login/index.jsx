import {
  FacebookOutlined,
  GithubOutlined,
  GoogleOutlined,
  LockOutlined,
  MailOutlined,
  MobileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Alert, Space, message, Tabs, Button } from 'antd';
import React, { useState } from 'react';
import ProForm, { ProFormCaptcha, ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import { useIntl, connect, FormattedMessage } from 'umi';
import { getFakeCaptcha } from '@/services/login';
import styles from './index.less';
import Register from '../register';
import UpdateForm from '../resetPassword/components/UpdateForm';
// import logo from '../../../assets/logo/facebook.svg';

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
  const [resetPasswordModalVisible, handleResetPasswordModalVisible] = useState(false);
  const [registerModalVisible, handleRegisterModalVisible] = useState(false);

  // const resetPassword = () => {
  //   // Example
  //   // localStorage.setItem('userInfo', JSON.stringify(user));
  //   // const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  //   // const newUpdatedUserInfo = {
  //   //   ...userInfo,
  //   //   token: 'new-token-adkadjhk2h3hkhkhkh',
  //   // };

  //   // localStorage.setItem('userInfo', JSON.stringify(newUpdatedUserInfo));

  //   // ==========
  //   // window.localStorage.setItem('')
  // };

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
        window.localStorage.setItem('passwordReact', fields.newPassword)
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

  const handleSubmit = (values) => {
    const { dispatch } = props;
    dispatch({
      type: 'login/login',
      payload: { ...values, type },
    });
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
              defaultMessage: '账户密码登录',
            })}
          />
          {/* <Tabs.TabPane
            key="mobile"
            tab={intl.formatMessage({
              id: 'pages.login.phoneLogin.tab',
              defaultMessage: '手机号登录',
            })}
          /> */}
        </Tabs>

        {status === 'error' && loginType === 'account' && !submitting && (
          <LoginMessage
            content={intl.formatMessage({
              id: 'pages.login.accountLogin.errorMessage',
              defaultMessage: '账户或密码错误（admin/ant.design)',
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
                defaultMessage: '用户名: admin or user',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.username.required"
                      defaultMessage="请输入用户名!"
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
                defaultMessage: '密码: ant.design',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.password.required"
                      defaultMessage="请输入密码！"
                    />
                  ),
                },
              ]}
            />
          </>
        )}

        {status === 'error' && loginType === 'mobile' && !submitting && (
          <LoginMessage content="验证码错误" />
        )}
        {type === 'mobile' && (
          <>
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: <MobileOutlined className={styles.prefixIcon} />,
              }}
              name="mobile"
              placeholder={intl.formatMessage({
                id: 'pages.login.phoneNumber.placeholder',
                defaultMessage: '手机号',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.phoneNumber.required"
                      defaultMessage="请输入手机号！"
                    />
                  ),
                },
                {
                  pattern: /^1\d{10}$/,
                  message: (
                    <FormattedMessage
                      id="pages.login.phoneNumber.invalid"
                      defaultMessage="手机号格式错误！"
                    />
                  ),
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: 'large',
                prefix: <MailOutlined className={styles.prefixIcon} />,
              }}
              captchaProps={{
                size: 'large',
              }}
              placeholder={intl.formatMessage({
                id: 'pages.login.captcha.placeholder',
                defaultMessage: '请输入验证码',
              })}
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${intl.formatMessage({
                    id: 'pages.getCaptchaSecondText',
                    defaultMessage: '获取验证码',
                  })}`;
                }

                return intl.formatMessage({
                  id: 'pages.login.phoneLogin.getVerificationCode',
                  defaultMessage: '获取验证码',
                });
              }}
              name="captcha"
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.captcha.required"
                      defaultMessage="请输入验证码！"
                    />
                  ),
                },
              ]}
              onGetCaptcha={async (mobile) => {
                const result = await getFakeCaptcha(mobile);

                if (result === false) {
                  return;
                }

                message.success('获取验证码成功！验证码为：1234');
              }}
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
        <FormattedMessage id="pages.login.loginWith" defaultMessage="其他登录方式" />
        <GoogleOutlined className={styles.icon} />
        <FacebookOutlined className={styles.icon} />
        <GithubOutlined className={styles.icon} />
        {/* <img  src={logo} alt='facebook' className={styles.logo}/> */}
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
        // onSubmit={async (value) => {
        //   const success = await handleResetPasswordSubmit(value);

        //   if (success) {
        //     handleResetPasswordModalVisible(false);
        //   }
        // }}
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
