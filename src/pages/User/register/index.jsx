import { Button, Form, Input, Modal } from 'antd';
import ProForm, { ModalForm } from '@ant-design/pro-form';
import { useIntl, FormattedMessage } from 'umi';
import { useState, useRef, useEffect } from 'react';
import styles from './index.less';
import { message } from 'antd';
import { LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';

const FormItem = Form.Item;
const InputPassword = Input.Password;

const Register = (props) => {
  const {
    // onSubmit: handleRegisterModalSubmit,
    onCancel: handleRegisterModalVisible,
    registerModalVisible,
    // values,
  } = props;

  const intl = useIntl();
  const usernameRef = useRef();
  // const [visibleRegisterModal, setVisibleRegisterModal] = useState(false);
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

  // const showRegisterModal = () => {
  //   setVisibleRegisterModal(true);
  // };

  const focusInput = () => {
    usernameRef.current.input.focus();
  };

  const handleCancel = () => {
    handleRegisterModalVisible(false);
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
    // if (password === null || password === undefined) {
    //   validate = false;
    //   message.error(
    //     intl.formatMessage({
    //       id: 'pages.login.registerAccount.passwordValidation',
    //       defaultMessage: 'The password cannot be blank!',
    //     }),
    //   );
    // }
    // if (email === null || email === undefined || email === '') {
    //   validate = false;
    //   message.error(
    //     intl.formatMessage({
    //       id: 'pages.login.registerAccount.emailValidation',
    //       defaultMessage: `The email cannot be blank! You'll use this when you ever need to reset your password.`,
    //     }),
    //   );
    // } else if (
    //   !email.match(
    //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //   )
    // ) {
    //   validate = false;
    //   message.error(
    //     intl.formatMessage({
    //       id: 'pages.login.registerAccount.emailFormatValidation',
    //       defaultMessage: 'Please input a valid email address!',
    //     }),
    //   );
    // }
    // if (phoneNumber === null || phoneNumber === undefined) {
    //   validate = false;
    //   message.error(
    //     intl.formatMessage({
    //       id: 'pages.login.registerAccount.phoneNumberValidation',
    //       defaultMessage: 'The phone number cannot be blank!',
    //     }),
    //   );
    // } else if (!phoneNumber.match(/(0[3|5|7|8|9])+([0-9]{8})\b/)) {
    //   validate = false;
    //   message.error(
    //     intl.formatMessage({
    //       id: 'pages.login.registerAccount.phoneNumberFormatValidation',
    //       defaultMessage: 'Please input a valid phone number!',
    //     }),
    //   );
    // }
    // if (confirmPassword !== password) {
    //   validate = false;
    //   message.error(
    //     intl.formatMessage({
    //       id: 'pages.login.registerAccount.confirmPasswordValidation',
    //       defaultMessage: 'Confirm password is not correct',
    //     }),
    //   );
    // }
    if (validate) {
      message.success(
        intl.formatMessage({
          id: 'pages.login.registerAccount.success',
          defaultMessage: 'Sign Up success',
        }),
      );
      // const myAccount = {
      //   usernameReact: username,
      //   passwordReact: password,
      //   emailReact: email,
      //   phoneNumberReact: phoneNumber,
      // };
      // localStorage.setItem('myAccounts', JSON.stringify(myAccount));
      window.localStorage.setItem('usernameReact', username);
      window.localStorage.setItem('passwordReact', password);
      window.localStorage.setItem('emailReact', email);
      window.localStorage.setItem('phoneNumberReact', phoneNumber);

      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setEmail('');
      setPhoneNumber('');
      handleCancel();
    } else {
      message.error(
        intl.formatMessage({
          id: 'pages.login.registerAccount.failed',
          defaultMessage: 'Sign up failed, please check the information inputted!',
        }),
      );
    }
  };

  // <Button
  //       // href="/user/register"
  //       size="large"
  //       style={{
  //         color: 'white',
  //         background: '#42b72a',
  //         width: '100%',
  //       }}
  //       onClick={() => setVisibleRegisterModal(true) && focusInput}
  //     >
  //       {intl.formatMessage({
  //         id: 'pages.login.registerAccount',
  //         defaultMessage: 'Create New Account',
  //       })}
  //     </Button>

  return (
    <Modal
      title={intl.formatMessage({
        id: 'pages.login.registerAccount.title',
        defaultMessage: 'Sign Up',
      })}
      style={{ fontSize: '200px' }}
      visible={registerModalVisible}
      footer={null}
      maskClosable={false}
      // onVisibleChange={handleRegisterModalVisible}
      onCancel={handleCancel}
      // onFinish={async (value) => {
      //   const success = await handleAdd(value);

      //   if (success) {
      //     handleModalVisible(false);

      //     if (actionRef.current) {
      //       actionRef.current.reload();
      //     }
      //   }
      // }}
    >
      {/* Username */}
      <FormItem
        // name="customerName"
        // label={intl.formatMessage({
        //   id: 'pages.login.registerAccount.title',
        //   defaultMessage: 'Sign Up',
        // })}

        rules={[
          {
            required: true,
            message: intl.formatMessage({
              id: 'pages.login.registerAccount.requiredUsername',
              defaultMessage: 'Please input your username!',
            }),
          },
        ]}
        // 
        // name="username"
        // prefix={<UserOutlined style={{ fontSize: 20, color: '#1890FF' }} />}
        // className={styles.input}
        // // onChange={(e) => setUsername(e.target.value) && usernameRef.current.input.focus()}
        //   placeholder={intl.formatMessage({
        //     id: 'pages.login.registerAccount.usernamePlaceholder',
        //     defaultMessage: 'Username',
        //   })}
      >
        <Input
          ref={usernameRef}
          onChange={(e) => setUsername(e.target.value) && usernameRef.current.input.focus()}
          placeholder={intl.formatMessage({
            id: 'pages.login.registerAccount.usernamePlaceholder',
            defaultMessage: 'Username',
          })}
          className={styles.input}
          prefix={<UserOutlined style={{ fontSize: 20, color: '#1890FF' }} />}
        />
      </FormItem>
      <FormItem
        rules={[
          {
            type: 'email',
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: intl.formatMessage({
              id: 'pages.login.registerAccount.requiredFormatEmail',
              defaultMessage: 'The input is not valid email!',
            }),
          },
          {
            required: true,
            message: intl.formatMessage({
              id: 'pages.login.registerAccount.requiredEmail',
              defaultMessage: 'Please input your email!',
            }),
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
          prefix={<MailOutlined style={{ fontSize: 20, color: '#1890FF' }} />}
        />
      </FormItem>
      <FormItem
        rules={[
          {
            pattern: /(0[3|5|7|8|9])+([0-9]{8})\b/,
            message: intl.formatMessage({
              id: 'pages.login.registerAccount.requiredFormatPhoneNumber',
              defaultMessage: 'The input is not valid phone!',
            }),
          },
          {
            required: true,
            message: intl.formatMessage({
              id: 'pages.login.registerAccount.requiredPhoneNumber',
              defaultMessage: 'Please input your phone number!',
            }),
          },
        ]}
      >
        <Input
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder={intl.formatMessage({
            id: 'pages.login.registerAccount.phoneNumberPlaceholder',
            defaultMessage: 'Phone number',
          })}
          className={styles.input}
          prefix={<PhoneOutlined style={{ fontSize: 20, color: '#1890FF' }} />}
        />
      </FormItem>
      <FormItem
        // name="customerName"
        // label={intl.formatMessage({
        //   id: 'pages.login.registerAccount.title',
        //   defaultMessage: 'Sign Up',
        // })}
        rules={[
          {
            required: true,
            message: intl.formatMessage({
              id: 'pages.login.registerAccount.requiredPassword',
              defaultMessage: 'Please input your password!"',
            }),
          },
        ]}
      >
        <InputPassword
          onChange={(e) => setPassword(e.target.value)}
          placeholder={intl.formatMessage({
            id: 'pages.login.registerAccount.passwordPlaceholder',
            defaultMessage: 'Password',
          })}
          className={styles.input}
          prefix={<LockOutlined style={{ fontSize: 20, color: '#1890FF' }} />}
        />
      </FormItem>
      <FormItem
        // name="customerName"
        // label={intl.formatMessage({
        //   id: 'pages.login.registerAccount.title',
        //   defaultMessage: 'Sign Up',
        // })}
        rules={[
          {
            required: true,
            // type: 'string',
            message: intl.formatMessage({
              id: 'pages.login.registerAccount.requiredConfirmPassword',
              defaultMessage: 'Please input confirm password!',
            }),
          },
        ]}
      >
        <InputPassword
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder={intl.formatMessage({
            id: 'pages.login.registerAccount.confirmPasswordPlaceholder',
            defaultMessage: 'Confirm Password',
          })}
          className={styles.input}
          prefix={<LockOutlined style={{ fontSize: 20, color: '#1890FF' }} />}
        />
      </FormItem>
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
            defaultMessage: 'Sign Up',
          })}
        </Button>
        <div className={styles.signupdiv}>
          <span>
            {intl.formatMessage({
              id: 'pages.login.registerAccount.span',
              defaultMessage: 'Already have account?',
            })}
          </span>
          <a onClick={handleCancel} className={styles.signupa}>
            {intl.formatMessage({
              id: 'pages.login.registerAccount.signup',
              defaultMessage: 'Sign Up',
            })}
          </a>
          <br />
        </div>
      </div>
    </Modal>
  );
};

export default Register;
