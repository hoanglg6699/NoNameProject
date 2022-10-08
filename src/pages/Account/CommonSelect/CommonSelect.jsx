import { Input, Select, Spin } from 'antd';
import { useIntl } from 'umi';
import React, { useEffect, useState } from 'react';

const { Option } = Select;
const buildOptionsDefault = (storeData = []) =>
  storeData?.map((d) => (
    <Option value={d.id} key={d.id}>
      {d.name?.trim()}
    </Option>
  ));

const CommonSelect = ({
  value,
  buildOptions,
  onSearch,
  getLsPromotion,
  normalizeRes,
  placeholder,
  getRes,
  fetchOnFirst,
  onFinishFetch,
  initOptions,
  onSelectItem,
  ...props
}) => {
  const [optionData, setOptionData] = useState(initOptions ?? []);
  const [fetchingData, setFetchingData] = useState(false);
  const { formatMessage } = useIntl();
  useEffect(() => {
    if (fetchOnFirst) {
      setFetchingData(true);
      Promise.resolve(onSearch())
        .then((res) => {
          return normalizeRes(res);
        })
        .then((data) => {
          setOptionData(data);
          return data;
        })
        .then((data) => onFinishFetch(data))
        .then(() => setFetchingData(false));
    }
  }, [fetchOnFirst, onSearch, normalizeRes]);

  const options = buildOptions(optionData);
  return (
    <Select
      showSearch
      value={value}
      loading={fetchingData}
      placeholder={formatMessage({
        id: placeholder !== undefined ? placeholder : 'Vui lòng chọn giá trị',
      })}
      defaultActiveFirstOption={false}
      showArrow
      filterOption={false}
      // onSearch={(val) => {
      //   changeSearch(val);
      // }}
      notFoundContent={fetchingData ? <Spin size="small" /> : null}
      // filterOption={(input, option) =>
      //   option.input >= 0
      // }
      // {...props}
      onChange={(selectedValue, data) => {
        props.onChange(selectedValue, data);
        onSelectItem(selectedValue, optionData);
      }}
    >
      {options}
    </Select>
  );
};

// ==============================================================================
const EnterFullNameFromAccount = (props) => {
  const intl = useIntl();
  return (
    <Input
      placeholder={intl.formatMessage({
        id: 'pages.accountTable.commonSelect.fullname',
        defaultMessage: 'Please enter name',
      })}
      {...props}
    />
  );
};

const EnterPhoneFromAccount = (props) => {
  const intl = useIntl();
  return (
    <Input
      placeholder={intl.formatMessage({
        id: 'pages.accountTable.commonSelect.phone',
        defaultMessage: 'Please enter phone number',
      })}
      {...props}
    />
  );
};

const SelectStatusFromAccount = (props) => {
  const intl = useIntl();
  return (
    <Select
      placeholder={intl.formatMessage({
        id: 'pages.accountTable.commonSelect.status',
        defaultMessage: 'Please select status',
      })}
      {...props}
    >
      <Option value={0}>
        {intl.formatMessage({
          id: 'pages.accountTable.status.offline',
          defaultMessage: 'Offline',
        })}
      </Option>
      <Option value={2}>
        {intl.formatMessage({
          id: 'pages.accountTable.status.onOnline',
          defaultMessage: 'Online',
        })}
      </Option>
      <Option value={3}>
        {intl.formatMessage({
          id: 'pages.accountTable.status.disable',
          defaultMessage: 'Disable',
        })}
      </Option>
    </Select>
  );
};

const SelectRoleFromAccount = (props) => {
  const intl = useIntl();
  return (
    <Select
      placeholder={intl.formatMessage({
        id: 'pages.accountTable.commonSelect.role',
        defaultMessage: 'Please select role',
      })}
      {...props}
    >
      <Option value={0}>
        {intl.formatMessage({
          id: 'pages.accountTable.role.admin',
          defaultMessage: 'Admin',
        })}
      </Option>
      <Option value={1}>
        {intl.formatMessage({
          id: 'pages.accountTable.role.user',
          defaultMessage: 'User',
        })}
      </Option>
    </Select>
  );
};

CommonSelect.EnterFullNameFromAccount = EnterFullNameFromAccount;
CommonSelect.EnterPhoneFromAccount = EnterPhoneFromAccount;
CommonSelect.SelectStatusFromAccount = SelectStatusFromAccount;
CommonSelect.SelectRoleFromAccount = SelectRoleFromAccount;

// ==============================================================================

CommonSelect.defaultProps = {
  onSelectItem: (selectedValue, storeData) => null,
  onSearch: () => [],
  normalizeRes: (res) => res?.data,
  onFinishFetch: (data) => null,
  fetchOnFirst: false,
  buildOptions: buildOptionsDefault,
};

export {
  EnterFullNameFromAccount,
  EnterPhoneFromAccount,
  SelectStatusFromAccount,
  SelectRoleFromAccount,
};

export default CommonSelect;
