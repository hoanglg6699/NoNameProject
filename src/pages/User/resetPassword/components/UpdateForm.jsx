import React, { useState } from 'react';
import { Form, Button, Input, Modal, Steps, Alert } from 'antd';
import { useIntl } from 'umi';
import { MailOutlined, SafetyOutlined } from '@ant-design/icons';
// import styles from '../index.less';

const FormItem = Form.Item;
const { Step } = Steps;
const formLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 13,
  },
};

const UpdateForm = (props) => {
  const intl = useIntl();
  const [formVals, setFormVals] = useState({
    // name: props.values.name,
    // desc: props.values.desc,
    // key: props.values.key,
    // target: '0',
    // template: '0',
    // type: '1',
    // time: '',
    // frequency: 'month',
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const {
    onSubmit: handleResetPasswordSubmit,
    onCancel: handleResetPasswordModalVisible,
    resetPasswordModalVisible,
    // values,
  } = props;
  const [email, setEmail] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setConfirmNewPassword] = useState();

  const resetPassword = () => {
    // Example
    // localStorage.setItem('userInfo', JSON.stringify(user));
    // const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    // const newUpdatedUserInfo = {
    //   ...userInfo,
    //   token: 'new-token-adkadjhk2h3hkhkhkh',
    // };

    // localStorage.setItem('userInfo', JSON.stringify(newUpdatedUserInfo));

    // ==========
    window.localStorage.setItem('passwordReact', newPassword);
  };

  const forward = () => setCurrentStep(currentStep + 1);

  const backward = () => setCurrentStep(currentStep - 1);

  const handleNext = async () => {
    const fieldsValue = await form.validateFields();
    setFormVals({ ...formVals, ...fieldsValue });

    if (currentStep < 2) {
      forward();
    } else {
      handleResetPasswordSubmit({ ...formVals, ...fieldsValue });
    }
  };

  const renderContent = () => {
    if (currentStep === 1) {
      return (
        <>
          <Alert
            message=""
            description={intl.formatMessage({
              id: 'pages.login.resetPassword.description',
              defaultMessage:
                'Check your email. Then click the link in the mailbox to change the password.',
            })}
            type="success"
            showIcon
            style={{ alignItems: 'center' }}
          />
        </>
      );
    }

    if (currentStep === 2) {
      return (
        <>
          <FormItem
            name="newPassword"
            label={intl.formatMessage({
              id: 'pages.login.resetPassword.newPasswordLabel',
              defaultMessage: 'New password',
            })}
            rules={[
              {
                required: true,
                message: intl.formatMessage({
                  id: 'pages.login.resetPassword.requiredNewPassword',
                  defaultMessage: 'Please input your new password!',
                }),
              },
            ]}
          >
            <Input
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder={intl.formatMessage({
                id: 'pages.login.resetPassword.newPasswordPlaceholder',
                defaultMessage: 'Enter New password',
              })}
              prefix={<SafetyOutlined style={{ fontSize: 20, color: '#1890FF' }} />}
            />
          </FormItem>
          <FormItem
            name="confirmNewPassword"
            dependencies={['newPassword']}
            label={intl.formatMessage({
              id: 'pages.login.resetPassword.confirmNewPasswordLabel',
              defaultMessage: 'Confirm new password',
            })}
            rules={[
              {
                required: true,
                message: intl.formatMessage({
                  id: 'pages.login.resetPassword.requiredConfirmNewPassword',
                  defaultMessage: 'Please input confirm new password!',
                }),
              },
              // {
              //   // validator: confirmNewPassword !== newPassword,
              //   message: intl.formatMessage({
              //     id: 'pages.login.resetPassword.requiredFormatConfirmNewPassword',
              //     defaultMessage: 'Confirm new password is not correct',
              //   }),
              // },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      intl.formatMessage({
                        id: 'pages.login.resetPassword.requiredFormatConfirmNewPassword',
                        defaultMessage: 'The two passwords that you entered do not match!',
                      }),
                    ),
                  );
                },
              }),
            ]}
          >
            <Input
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              placeholder={intl.formatMessage({
                id: 'pages.login.resetPassword.confirmNewPasswordPlaceholder',
                defaultMessage: 'Enter confirm new password',
              })}
              prefix={<SafetyOutlined style={{ fontSize: 20, color: '#1890FF' }} />}
            />
          </FormItem>
        </>
      );
    }

    return (
      <>
        <FormItem
          name="email"
          label="Email"
          rules={[
            {
              type: 'email',
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: intl.formatMessage({
                id: 'pages.login.resetPassword.requiredFormatEmail',
                defaultMessage: 'The input is not valid email!',
              }),
            },
            {
              required: true,
              message: intl.formatMessage({
                id: 'pages.login.resetPassword.requiredEmail',
                defaultMessage: 'Please input your email!',
              }),
            },
          ]}
          // style={{marginBottom: 10}}
        >
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder={intl.formatMessage({
              id: 'pages.login.resetPassword.emailPlaceholder',
              defaultMessage: 'Email address',
            })}
            prefix={<MailOutlined style={{ fontSize: 20, color: '#1890FF' }} />}
          />
        </FormItem>
        <div style={{ margin: '0 100px' }}>
          {intl.formatMessage({
            id: 'pages.login.resetPassword.policy',
            defaultMessage: `By changing your password, you agree to our Terms of service and Privacy policy`,
          })}
        </div>
      </>
    );
  };

  const renderFooter = () => {
    if (currentStep === 1) {
      return (
        <>
          <Button
            style={{
              float: 'left',
            }}
            onClick={() => handleResetPasswordModalVisible(false)}
          >
            {intl.formatMessage({
              id: 'pages.login.resetPassword.cancelBtn',
              defaultMessage: 'Back to Login',
            })}
          </Button>
          <Button onClick={backward}>
            {intl.formatMessage({
              id: 'pages.login.resetPassword.backBtn',
              defaultMessage: 'Back',
            })}
          </Button>

          <Button type="primary" onClick={() => handleNext()}>
            {intl.formatMessage({
              id: 'pages.login.resetPassword.nextBtn',
              defaultMessage: 'Next',
            })}
          </Button>
        </>
      );
    }

    if (currentStep === 2) {
      return (
        <>
          <Button
            style={{
              float: 'left',
            }}
            onClick={() => handleResetPasswordModalVisible(false)}
          >
            {intl.formatMessage({
              id: 'pages.login.resetPassword.cancelBtn',
              defaultMessage: 'Cancel',
            })}
          </Button>
          <Button onClick={backward}>
            {intl.formatMessage({
              id: 'pages.login.resetPassword.backBtn',
              defaultMessage: 'Back',
            })}
          </Button>

          <Button type="primary" onClick={() => handleNext()}>
            {intl.formatMessage({
              id: 'pages.login.resetPassword.nextBtn',
              defaultMessage: 'Next',
            })}
          </Button>
        </>
      );
    }

    return (
      <>
        <Button onClick={() => handleResetPasswordModalVisible(false)}>
          {intl.formatMessage({
            id: 'pages.login.resetPassword.cancelBtn',
            defaultMessage: 'Cancel',
          })}
        </Button>
        <Button type="primary" onClick={() => handleNext()}>
          {intl.formatMessage({
            id: 'pages.login.resetPassword.nextBtn',
            defaultMessage: 'Next',
          })}
        </Button>
      </>
    );
  };

  return (
    <Modal
      maskClosable={false}
      width={640}
      bodyStyle={{
        padding: '32px 40px 48px',
      }}
      destroyOnClose
      title={intl.formatMessage({
        id: 'pages.login.resetPassword.titleModal',
        defaultMessage: 'Reset Password',
      })}
      visible={resetPasswordModalVisible}
      footer={renderFooter()}
      onCancel={() => handleResetPasswordModalVisible()}
    >
      <Steps
        style={{
          marginBottom: 28,
        }}
        size="small"
        current={currentStep}
      >
        <Step
          title={intl.formatMessage({
            id: 'pages.login.resetPassword.emailStep',
            defaultMessage: 'Enter Mailbox',
          })}
        />
        <Step
          title={intl.formatMessage({
            id: 'pages.login.resetPassword.checkEmailStep',
            defaultMessage: 'Check Email',
          })}
        />
        <Step
          title={intl.formatMessage({
            id: 'pages.login.resetPassword.newPasswordlStep',
            defaultMessage: 'New Password',
          })}
        />
      </Steps>
      <Form
        {...formLayout}
        form={form}
        initialValues={{
          target: formVals.target,
          template: formVals.template,
          type: formVals.type,
          frequency: formVals.frequency,
          name: formVals.name,
          desc: formVals.desc,
        }}
      >
        {renderContent()}
      </Form>
    </Modal>
  );
};

export default UpdateForm;
