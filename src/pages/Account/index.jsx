import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Descriptions,
  Drawer,
  Input,
  message,
  Modal,
  notification,
  Row,
  Space,
} from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { useIntl, FormattedMessage, useHistory } from 'umi';
import { PageContainer, FooterToolbar, PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import ProForm, { ModalForm, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import ProDescriptions from '@ant-design/pro-descriptions';
// import UpdateForm from './components/UpdateForm';
import moment from 'moment';
import { ACCOUNTS } from './constrains';
import {
  EnterFullNameFromAccount,
  EnterPhoneFromAccount,
  SelectRoleFromAccount,
  SelectStatusFromAccount,
} from './CommonSelect/CommonSelect';
import AsyncButton from '@/components/AsyncButton';

// const handleUpdate = async (fields) => {
//   const hide = message.loading('正在配置');

//   try {
//     await updateRule({
//       name: fields.name,
//       desc: fields.desc,
//       key: fields.key,
//     });
//     hide();
//     message.success('配置成功');
//     return true;
//   } catch (error) {
//     hide();
//     message.error('配置失败请重试！');
//     return false;
//   }
// };

const AccountList = () => {
  const intl = useIntl();
  const [createModalVisible, handleModalVisible] = useState(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const actionRef = useRef();
  const [currentRow, setCurrentRow] = useState();
  const [selectedRowsState, setSelectedRows] = useState([]);
  const [dataSource, setDataSource] = useState(ACCOUNTS);
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('SEARCH_QUERY') || '?');
  const history = useHistory();

  const rowSelection = {
    selectedRowKeys: selectedRowsState,
    onChange: setSelectedRows,
    type: 'checkbox',
  };

  const [emailState, setEmail] = useState('user@gmail.com');
  const [phoneState, setPhone] = useState('0938123123');
  const [usernameState, setUsername] = useState('user');
  const [isUpdating, setIsUpdating] = useState(null);

  useEffect(() => {
    
  }, [isUpdating])
  
  const handleAdd = async (fields) => {
    const randomPhoneNumber = parseInt(Math.floor(Math.random() * (9999999 - 1 + 1)) + 1, 10);
    const idCounter = (ACCOUNTS.length += 1);

    let validate = true;

    if (fields.phone === '0938123123') {
      // validate = false;
      fields.phone = `093${randomPhoneNumber}`;
      setPhone(`093${randomPhoneNumber}`);
    }
    if (fields.username === 'user') {
      // validate = false;
      fields.username = `user${idCounter}`;
      setUsername(`user${idCounter}`);
    }
    if (fields.email === 'user@gmail.com') {
      // validate = false;
      fields.email = `user${idCounter}@gmail.com`;
      setEmail(`user${idCounter}@gmail.com`);
    }

    const newAccount = {
      id: idCounter,
      ...fields,
      status: 2,
      role: 1,
    };

    const hide = message.loading(
      intl.formatMessage({
        id: 'pages.accountTable.table.adding',
        defaultMessage: 'Adding',
      }),
    );

    if (validate) {
      try {
        // await addRule({ ...fields });
        setDataSource((pre) => {
          return [...pre, newAccount];
        });
        hide();
        message.success(
          intl.formatMessage({
            id: 'pages.accountTable.table.addedSuccessful',
            defaultMessage: 'Added Successful',
          }),
        );
        return true;
      } catch (error) {
        hide();
        message.error(
          intl.formatMessage({
            id: 'pages.accountTable.table.addFailed',
            defaultMessage: 'Add failed, please try again!',
          }),
        );
        return false;
      }
    }
  };

  const handleRemove = async (record) => {
    const hide = message.loading(
      intl.formatMessage({
        id: 'pages.accountTable.table.deleting',
        defaultMessage: 'Deleting',
      }),
    );
    if (!record) return true;

    try {
      setDataSource((pre) => {
        return pre.filter((account) => account.id !== record.id);
      });

      hide();
      message.success(
        intl.formatMessage({
          id: 'pages.accountTable.table.deletedSuccessful',
          defaultMessage: 'Deleted Successful',
        }),
      );
      return true;
    } catch (error) {
      hide();
      message.error(
        intl.formatMessage({
          id: 'pages.accountTable.table.deleteFailed',
          defaultMessage: 'Delete failed, please try again',
        }),
      );
      return false;
    }
  };

  const handleRemoveSelected = async (selectedRows) => {
    const hide = message.loading(
      intl.formatMessage({
        id: 'pages.accountTable.table.deleting',
        defaultMessage: 'Deleting',
      }),
    );
    if (!selectedRows) return true;

    try {
      // await removeRule({
      //   key: selectedRows.map((row) => row.key),
      // });

      //
      //
      const index = ACCOUNTS.map(function (e) {
        return e.id;
      }).indexOf(selectedRows[0].id);

      ACCOUNTS.splice(index, 1);
      //

      hide();
      message.success(
        intl.formatMessage({
          id: 'pages.accountTable.table.deletedSuccessful',
          defaultMessage: 'Deleted Successful',
        }),
      );
      return true;
    } catch (error) {
      hide();
      message.error(
        intl.formatMessage({
          id: 'pages.accountTable.table.deleteFailed',
          defaultMessage: 'Delete failed, please try again',
        }),
      );
      return false;
    }
  };

  const handleUpdateFormModalVisible = async (record) => {
    handleUpdateModalVisible(true);
    setIsUpdating({...record})
  };

  // const resetUpdateRow = () => {
  //   handleUpdateModalVisible(false);
  //   setIsUpdating(null);
  // };

  const handleUpdateRow = async (fields) => {
    console.log('fileds', fields);

    const hide = message.loading(
      intl.formatMessage({
        id: 'pages.accountTable.table.updating',
        defaultMessage: 'Updating',
      }),
    );

    try {
      setDataSource((pre) => {
        return pre.map((account) => {
          if (account.id === isUpdating.id) {
            if (!fields.status) {
              fields.status = isUpdating.status;
            }
            if (fields.status === '3') {
              fields.status = 3;
            } else if (fields.status === '2') {
              fields.status = 2;
            } else if (fields.status === '0') {
              fields.status = 0;
            }

            if (!fields.role) {
              fields.role = isUpdating.role;
            }
            if (fields.role === '0') {
              fields.role = 0;
            } else if (fields.role === '1') {
              fields.role = 1;
            }

            const updateAccount = {
              ...fields,
              id: isUpdating.id,
              username: isUpdating.username,
              status: fields.status !== isUpdating.status ? fields.status : isUpdating.status,
              role: fields.role !== isUpdating.role ? fields.role : isUpdating.role,
            };

            return updateAccount;
          }
          return account;
        });
      });
      hide();
      message.success(
        intl.formatMessage({
          id: 'pages.accountTable.table.updatedSuccessful',
          defaultMessage: 'Updated Successful',
        }),
      );
      return true;
    } catch (error) {
      hide();
      message.error(
        intl.formatMessage({
          id: 'pages.accountTable.table.updateFailed',
          defaultMessage: 'Update failed, please try again',
        }),
      );
      return false;
    }
  };

  const columns = [
    {
      title: <FormattedMessage id="pages.accountTable.table.id" defaultMessage="ID" />,
      dataIndex: 'id',
      search: false,
    },
    {
      title: <FormattedMessage id="pages.accountTable.table.username" defaultMessage="Username" />,
      dataIndex: 'username',
      tip: intl.formatMessage({
        id: 'pages.accountTable.table.username.tip',
        defaultMessage: 'Username is unique key',
      }),
      search: false,
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: <FormattedMessage id="pages.accountTable.table.fullname" defaultMessage="Name" />,
      dataIndex: 'fullname',
      // sorter: true,
      renderFormItem: (item, props) => {
        return <EnterFullNameFromAccount {...props} />;
      },
    },
    {
      title: <FormattedMessage id="pages.accountTable.table.address" defaultMessage="Address" />,
      dataIndex: 'address',
      search: false,
    },
    {
      title: <FormattedMessage id="pages.accountTable.table.email" defaultMessage="Email" />,
      dataIndex: 'email',
      search: false,
    },
    {
      title: <FormattedMessage id="pages.accountTable.table.phone" defaultMessage="Phone" />,
      dataIndex: 'phone',
      renderFormItem: (item, props) => {
        return <EnterPhoneFromAccount {...props} />;
      },
    },
    {
      title: <FormattedMessage id="pages.accountTable.table.status" defaultMessage="Status" />,
      dataIndex: 'status',
      sorter: true,
      valueEnum: {
        0: {
          text: (
            <FormattedMessage id="pages.accountTable.status.offline" defaultMessage="Offline" />
          ),
          status: 'Default',
        },
        // 1: {
        //   text: (
        //     <FormattedMessage id="pages.accountTable.status.running" defaultMessage="Processing" />
        //   ),
        //   status: 'Processing',
        // },
        2: {
          text: (
            <FormattedMessage id="pages.accountTable.status.onOnline" defaultMessage="Online" />
          ),
          status: 'Success',
        },
        3: {
          text: (
            <FormattedMessage id="pages.accountTable.status.disable" defaultMessage="Disable" />
          ),
          status: 'Error',
        },
      },
      renderFormItem: (item, props) => {
        return <SelectStatusFromAccount {...props} />;
      },
    },
    {
      title: <FormattedMessage id="pages.accountTable.table.role" defaultMessage="Role" />,
      dataIndex: 'role',
      hideInForm: true,
      valueEnum: {
        0: {
          text: <FormattedMessage id="pages.accountTable.role.admin" defaultMessage="Admin" />,
        },
        1: {
          text: <FormattedMessage id="pages.accountTable.role.user" defaultMessage="User" />,
        },
      },
      renderFormItem: (item, props) => {
        return <SelectRoleFromAccount {...props} />;
      },
    },
    {
      title: <FormattedMessage id="pages.accountTable.table.option" defaultMessage="Option" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (text, record) => (
        <div style={{ justifyContent: 'space-between' }}>
          <EditOutlined
            style={{ width: '50px' }}
            onClick={() => {
              handleUpdateFormModalVisible(record);
              setCurrentRow(record);
              setIsUpdating(record);
            }}
          />
          <AsyncButton
            isNeedConfirm={{
              title: intl.formatMessage({
                id: 'pages.accountTable.table.confirmDeletionTitle',
                defaultMessage: 'Confirm deletion',
              }),
              content: intl.formatMessage({
                id: 'pages.accountTable.table.confirmDeletionContent',
                defaultMessage: 'Do you want to delete?',
              }),
              okText: intl.formatMessage({
                id: 'pages.accountTable.table.confirm',
                defaultMessage: 'Confirm',
              }),
              cancelText: intl.formatMessage({
                id: 'pages.accountTable.table.cancel',
                defaultMessage: 'Cancel',
              }),
            }}
            btnProps={{ danger: true, type: 'link' }}
            onClick={async () => {
              await handleRemove(record);
              actionRef.current?.reloadAndRest?.();
            }}
            // title={
            //   localStorage.getItem('umi_locale') === 'vi-VN'
            //     ? `Xoá ${selectedRowsState.length} tài khoản`
            //     : `Remove ${selectedRowsState.length} account`
            // }
            title={<DeleteOutlined style={{ color: 'red' }} />}
          />
        </div>
      ),
    },
  ];

  return (
    <PageHeaderWrapper
      content={intl.formatMessage({
        id: 'pages.admin.subPage.title',
        defaultMessage: 'This page can only be viewed by Admin',
      })}
    >
      <ProTable
        headerTitle={intl.formatMessage({
          id: 'pages.accountTable.title',
          defaultMessage: 'User Infomation',
        })}
        actionRef={actionRef}
        editable={{
          type: 'multiple',
        }}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        // beforeSearchSubmit={(params) => {
        //   const formattedParams = {};
        //   setSearchQuery('?');
        //   Object.keys(params).forEach((key) => {
        //     const formatedKey = key.replace('_', '-');
        //     if (
        //       formatedKey !== '-timestamp' &&
        //       formatedKey !== 'current' &&
        //       formatedKey !== 'pageSize'
        //     ) {
        //       formattedParams[formatedKey] = params[key];
        //       setSearchQuery((prev) => [`${prev}${formatedKey}=${formattedParams[formatedKey]}&`]);
        //     }
        //   });
        //   return formattedParams;
        // }}
        tableAlertOptionRender={false}
        tableAlertRender={({ onCleanSelected }) => [
          <Space size={24} key="cancel-selection">
            <span>
              <a
                style={{
                  marginLeft: 8,
                }}
                onClick={onCleanSelected}
              >
                {intl.formatMessage({
                  id: 'pages.admin.subPage.table.cancelSelection',
                  defaultMessage: 'Cancel Selection',
                })}
              </a>
            </span>
          </Space>,
        ]}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalVisible(true);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.accountTable.new" defaultMessage="New" />
          </Button>,
        ]}
        // onLoadingChange={() => {
        //   history.push(`${window.location.pathname}${searchQuery}`);
        // }}
        request={(params, sorter, filter) => {
          return { ...params, sorter, filter };
        }}
        // request={(params, sort, filters) => {
        //   if (dataSource)
        //     return Promise.resolve({
        //       data: dataSource,
        //       success: true,
        //     });
        //   return params, sort, filters;
        // }}
        columns={columns}
        // rowSelection={rowSelection}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
        dataSource={dataSource}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              <FormattedMessage id="pages.searchTable.chosen" defaultMessage="Chosen" />{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowsState.length}
              </a>{' '}
              <FormattedMessage id="pages.searchTable.item" defaultMessage="accounts" />
              &nbsp;&nbsp;
              {'. '}
              <span>
                <FormattedMessage
                  id="pages.searchTable.totalServiceCalls"
                  defaultMessage="Total Number of Accounts"
                />
                {': '}
                {ACCOUNTS.length}{' '}
              </span>
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemoveSelected(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
            type="danger"
          >
            <DeleteOutlined />{' '}
            <FormattedMessage
              id="pages.accountTable.batchDeletion"
              defaultMessage="Batch Deletion"
            />
          </Button>
          <Button type="primary">
            <FormattedMessage
              id="pages.accountTable.batchApproval"
              defaultMessage="Batch Approval"
            />
          </Button>
        </FooterToolbar>
      )}
      {/* Create */}
      <ModalForm
        title={intl.formatMessage({
          id: 'pages.accountTable.createForm.title',
          defaultMessage: 'Create New Account',
        })}
        width="400px"
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          const success = await handleAdd(value);

          if (success) {
            handleModalVisible(false);
            setCurrentRow(undefined);

            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        <ProFormText
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.login.registerAccount.requiredUsername"
                  defaultMessage="Please input your username!"
                />
              ),
            },
            {
              required: true,
              min: 4,
              message: (
                <FormattedMessage
                  id="pages.accountTable.modalForm.requiredUsernameLength"
                  defaultMessage="Username must be longer than 4 characters"
                />
              ),
            },
          ]}
          width="md"
          name="username"
          initialValue={usernameState}
          placeholder={intl.formatMessage({
            id: 'pages.accountTable.createForm.usernamePlaceholder',
            defaultMessage: 'Enter username',
          })}
        />
        <ProFormText
          width="md"
          name="fullname"
          initialValue={'Hoang'}
          placeholder={intl.formatMessage({
            id: 'pages.accountTable.createForm.fullNamePlaceholder',
            defaultMessage: 'Enter fullname',
          })}
        />
        <ProFormText
          width="md"
          name="address"
          initialValue={'HCM City'}
          placeholder={intl.formatMessage({
            id: 'pages.accountTable.createForm.addressPlaceholder',
            defaultMessage: 'Enter address',
          })}
        />
        <ProFormText
          rules={[
            {
              type: 'email',
              message: (
                <FormattedMessage
                  id="pages.login.registerAccount.requiredFormatEmail"
                  defaultMessage="The input is not valid email!"
                />
              ),
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            },
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.login.registerAccount.requiredEmail"
                  defaultMessage="Please input your email!"
                />
              ),
            },
          ]}
          width="md"
          name="email"
          initialValue={emailState}
          placeholder={intl.formatMessage({
            id: 'pages.accountTable.createForm.emailPlaceholder',
            defaultMessage: 'Enter email',
          })}
        />
        <ProFormText
          rules={[
            {
              pattern: /(0[3|5|7|8|9])+([0-9]{8})\b/,
              message: (
                <FormattedMessage
                  id="pages.login.registerAccount.requiredFormatPhoneNumber"
                  defaultMessage="The input is not valid phone!"
                />
              ),
            },
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.login.registerAccount.requiredPhoneNumber"
                  defaultMessage="Please input your phone number!"
                />
              ),
            },
          ]}
          width="md"
          name="phone"
          initialValue={phoneState}
          placeholder={intl.formatMessage({
            id: 'pages.accountTable.createForm.phonePlaceholder',
            defaultMessage: 'Enter phone',
          })}
        />
      </ModalForm>

      {/* Update */}
      <ModalForm
        title={intl.formatMessage({
          id: 'pages.accountTable.updateForm.title',
          defaultMessage: 'Update Account',
        })}
        width="400px"
        visible={updateModalVisible}
        onVisibleChange={handleUpdateModalVisible}
        initialValues={{
          status: '3',
          // username: isUpdating ? isUpdating.username : 'user',
          // fullname: isUpdating ? isUpdating?.fullname : 'Hoang',
          // address: isUpdating ? isUpdating?.address : 'HCM City',
          // email: isUpdating ? isUpdating?.email : 'user@gmail.com',
          // phone: isUpdating ? isUpdating?.phone : '0938123123',
          role: isUpdating?.role === 0 ? '0' : '1',
          username: isUpdating?.username
        }}
        onFinish={async (value) => {
          const success = await handleUpdateRow(value);

          if (success) {
            handleUpdateModalVisible(false);
            setIsUpdating(null);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        <ProFormText
          label={intl.formatMessage({
            id: 'pages.accountTable.table.username',
            defaultMessage: 'Update Account',
          })}
          width="md"
          name="username"
          disabled
          initialValue={isUpdating?.username}
        />

        <ProFormText
          label={intl.formatMessage({
            id: 'pages.accountTable.table.fullname',
            defaultMessage: 'Name',
          })}
          width="md"
          initialValue={isUpdating?.fullname}
          name="fullname"
          placeholder={intl.formatMessage({
            id: 'pages.accountTable.createForm.fullNamePlaceholder',
            defaultMessage: 'Enter fullname',
          })}
        />
        <ProFormText
          label={intl.formatMessage({
            id: 'pages.accountTable.table.address',
            defaultMessage: 'Address',
          })}
          width="md"
          name="address"
          placeholder={intl.formatMessage({
            id: 'pages.accountTable.createForm.addressPlaceholder',
            defaultMessage: 'Enter address',
          })}
          initialValue={isUpdating?.address}
        />
        <ProFormText
          rules={[
            {
              type: 'email',
              message: (
                <FormattedMessage
                  id="pages.login.registerAccount.requiredFormatEmail"
                  defaultMessage="The input is not valid email!"
                />
              ),
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            },
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.login.registerAccount.requiredEmail"
                  defaultMessage="Please input your email!"
                />
              ),
            },
          ]}
          label={intl.formatMessage({
            id: 'pages.accountTable.table.email',
            defaultMessage: 'Email',
          })}
          width="md"
          name="email"
          initialValue={isUpdating?.email}
          placeholder={intl.formatMessage({
            id: 'pages.accountTable.createForm.emailPlaceholder',
            defaultMessage: 'Enter email',
          })}
        />
        <ProFormText
          rules={[
            {
              pattern: /(0[3|5|7|8|9])+([0-9]{8})\b/,
              message: (
                <FormattedMessage
                  id="pages.login.registerAccount.requiredFormatPhoneNumber"
                  defaultMessage="The input is not valid phone!"
                />
              ),
            },
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.login.registerAccount.requiredPhoneNumber"
                  defaultMessage="Please input your phone number!"
                />
              ),
            },
          ]}
          label={intl.formatMessage({
            id: 'pages.accountTable.table.phone',
            defaultMessage: 'Phone',
          })}
          width="md"
          name="phone"
          initialValue={isUpdating?.phone}
          placeholder={intl.formatMessage({
            id: 'pages.accountTable.createForm.phonePlaceholder',
            defaultMessage: 'Enter phone',
          })}
        />
        {isUpdating?.status === 3 ? (
          <ProFormSelect
            width="md"
            name="status"
            // initialValue={isUpdating?.status}
            label={intl.formatMessage({
              id: 'pages.accountTable.table.status',
              defaultMessage: 'Status',
            })}
            valueEnum={{
              2: intl.formatMessage({
                id: 'pages.accountTable.status.onOnline',
                defaultMessage: 'Online',
              }),
              3: intl.formatMessage({
                id: 'pages.accountTable.status.disable',
                defaultMessage: 'Disable',
              }),
            }}
          />
        ) : null}

        <ProFormSelect
          width="md"
          name="role"
          initialValue={isUpdating?.role}
          label={intl.formatMessage({
            id: 'pages.accountTable.table.role',
            defaultMessage: 'Role',
          })}
          valueEnum={{
            0: intl.formatMessage({
              id: 'pages.accountTable.role.admin',
              defaultMessage: 'Admin',
            }),
            1: intl.formatMessage({
              id: 'pages.accountTable.role.user',
              defaultMessage: 'User',
            }),
          }}
        />
      </ModalForm>
      <Drawer
        width={600}
        visible={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.username && (
          <ProDescriptions
            column={2}
            title={currentRow?.username}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.username,
            }}
            columns={columns}
          />
        )}
      </Drawer>
    </PageHeaderWrapper>
  );
};

export default AccountList;
