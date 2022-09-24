import { Button, Input, Modal } from 'antd';
import ProForm from '@ant-design/pro-form';
import { useIntl, FormattedMessage } from 'umi';
import { useState, useRef, useEffect } from 'react';
import styles from './index.less';
import { message } from 'antd';

function Register() {
  const intl = useIntl();
  const passwordRef = useRef();
  const [visibleRegisterModal, setVisibleRegisterModal] = useState(false);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  useEffect(() => {
    // usernameRef.current.focus();
    // usernameRef.current.focus();
    // showRegisterModal()
  }, []);

  const showAccount = () => {
    const myAccounts = localStorage.getItem('myAccounts');
    const jsonMyAccounts = JSON.parse(myAccounts);

    console.log('passwordReact', jsonMyAccounts.passwordReact)
    console.log('usernameReact', jsonMyAccounts.usernameReact)
  }

  // const showRegisterModal = () => {
  //   setVisibleRegisterModal(true);
  // };

  const focusInput = () => {
    passwordRef.current.input.focus();
  };

  const handleCancel = () => {
    setVisibleRegisterModal(false);
  };

  const handleSubmit = () => {
    let validate = true;
    if (username === null || username === undefined || username === '') {
      validate = false;
      message.error(
        intl.formatMessage({
          id: 'pages.login.registerAccount.usernameValidation',
          defaultMessage: 'The username cannot be blank!',
        }),
      );
    } else if (email === null || email === undefined || email === '') {
      validate = false;
      message.error(
        intl.formatMessage({
          id: 'pages.login.registerAccount.emailValidation',
          defaultMessage: `The email cannot be blank! You'll use this when you ever need to reset your password.`,
        }),
      );
    } else if (
      !email.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
    ) {
      validate = false;
      message.error(
        intl.formatMessage({
          id: 'pages.login.registerAccount.emailFormatValidation',
          defaultMessage: 'Please input a valid email address!',
        }),
      );
    } else if (phoneNumber === null || phoneNumber === undefined || phoneNumber === '') {
      validate = false;
      message.error(
        intl.formatMessage({
          id: 'pages.login.registerAccount.phoneNumberValidation',
          defaultMessage: 'The phone number cannot be blank!',
        }),
      );
    } else if (!phoneNumber.match(/(0[3|5|7|8|9])+([0-9]{8})\b/)) {
      validate = false;
      message.error(
        intl.formatMessage({
          id: 'pages.login.registerAccount.phoneNumberFormatValidation',
          defaultMessage: 'Please input a valid phone number!',
        }),
      );
    } else if (password === null || password === undefined || password === '') {
      validate = false;
      message.error(
        intl.formatMessage({
          id: 'pages.login.registerAccount.passwordValidation',
          defaultMessage: 'The password cannot be blank!',
        }),
      );
    } else if (confirmPassword !== password) {
      validate = false;
      message.error(
        intl.formatMessage({
          id: 'pages.login.registerAccount.confirmPasswordValidation',
          defaultMessage: 'Confirm password is not correct',
        }),
      );
    }
    
    if (validate) {
      message.success(
        intl.formatMessage({
          id: 'pages.login.registerAccount.success',
          defaultMessage: 'Sign Up success',
        }),
      );
      localStorage.setItem('usernameReact', JSON.stringify(username));
      localStorage.setItem('passwordReact', JSON.stringify(password));
      localStorage.setItem('emailReact', JSON.stringify(email));
      localStorage.setItem('phoneNumberReact', JSON.stringify(phoneNumber));

    } else {
      message.error(
        intl.formatMessage({
          id: 'pages.login.registerAccount.failed',
          defaultMessage: 'Sign up failed, please check the information inputted!',
        }),
      );
    }
  };

  return (
    <div>
      <a
        // href="/user/register"
        // size="large"
        // style={{
        //   color: 'white',
        //   background: '#42b72a',
        //   width: '100%',
        // }}
        onClick={() => setVisibleRegisterModal(true) && focusInput}
      >
        {intl.formatMessage({
          id: 'pages.login.registerAccount',
          defaultMessage: 'Create New Account',
        })}
      </a>
      <Modal
        title={intl.formatMessage({
          id: 'pages.login.registerAccount.title',
          defaultMessage: 'Sign Up',
        })}
        style={{ fontSize: '200px' }}
        visible={visibleRegisterModal}
        footer={null}
        maskClosable={false}
        onCancel={handleCancel}
      >
        {/* Username */}
        <ProForm.Item
          name="customerName"
          label={intl.formatMessage({
            id: 'pages.login.registerAccount.title',
            defaultMessage: 'Sign Up',
          })}

        >
          <Input
            placeholder={intl.formatMessage({
              id: 'pages.login.registerAccount.usernamePlaceholder',
              defaultMessage: 'Username',
            })}
            className={styles.input}
            readOnly
            // value={}
          />
        </ProForm.Item>

        {/* <ProForm.Item
          rules={[
            {
              // required: true,
              // type: 'string',
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: (
                <FormattedMessage
                  id="pages.login.registerAccount.requiredEmail"
                  defaultMessage="Wrong format, please input your email again!"
                />
              ),
            },
          ]}
        >
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder={intl.formatMessage({
              id: 'pages.login.registerAccount.emailPlaceholder',
              defaultMessage: 'Email',
            })}
            className={styles.input}
          />
        </ProForm.Item> */}

        <ProForm.Item
          rules={[
            {
              required: true,
              type: 'string',
              message: (
                <FormattedMessage
                  id="pages.login.registerAccount.requiredPassword"
                  defaultMessage="Please input your password!"
                />
              ),
            },
          ]}
        >
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder={intl.formatMessage({
              id: 'pages.login.registerAccount.passwordPlaceholder',
              defaultMessage: 'Password',
            })}
            className={styles.input}
          />
        </ProForm.Item>

        <div style={{ textAlign: 'center' }}>
          <Button
            onClick={handleSubmit}
            size="large"
            style={{
              color: 'white',
              background: '#42b72a',
              width: '50%',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {intl.formatMessage({
              id: 'pages.login.registerAccount.title',
              defaultMessage: 'Reset Password',
            })}
          </Button>
          <div className={styles.signupdiv}>
            <span>
              {intl.formatMessage({
                id: 'pages.login.registerAccount.span',
                defaultMessage: 'Back to sign in',
              })}
            </span>
            <a onClick={handleCancel} className={styles.signupa}>
              {intl.formatMessage({
                id: 'pages.login.registerAccount.signup',
                defaultMessage: 'Sign up',
              })}
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Register;
