import { Tooltip, Tag } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { connect, SelectLang } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
import { useIntl } from 'umi';

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight = (props) => {
  const { theme, layout } = props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'top') {
    className = `${styles.right}  ${styles.dark}`;
  }

  const intl = useIntl();

  return (
    <div className={className}>
      <HeaderSearch
        // id='pages.search'
        className={`${styles.action} ${styles.search}`}
        placeholder={intl.formatMessage({
          id: 'pages.headersearch.placeholder',
          defaultMessage: 'Search',
        })}
        defaultValue=""
        options={[
          {
            label: (
              <a href="https://hoanglg6699.github.io/lgh.github.io/ShopeeClone/" target="__blank">
                ShopeeClone - HTML, CSS
              </a>
            ),
            value: 'ShopeeClone - HTML, CSS',
          },
          {
            label: (
              <a href="https://hoanglg6699.github.io/lgh.github.io/MusicPlayer/" target="__blank">
                MusicPlayer - HTML, CSS, JavaScript
              </a>
            ),
            value: 'MusicPlayer - HTML, CSS, JavaScript',
          },
          // {
          // label: <a href="https://protable.ant.design/">Pro Table</a>,
          //   value: 'Pro Table',
          // },
          // {
          //   label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
          //   value: 'Pro Layout',
          // },
        ]} // onSearch={value => {
        //   //console.log('input', value);
        // }}
      />
      <Tooltip
        title={intl.formatMessage({
          id: 'pages.headersearch.tooltip',
          defaultMessage: 'Working with documents',
        })}
      >
        <a
          style={{
            color: 'inherit',
          }}
          target="_blank"
          href="https://pro.ant.design/docs/getting-started"
          rel="noopener noreferrer"
          className={styles.action}
        >
          <QuestionCircleOutlined />
        </a>
      </Tooltip>
      <Avatar />
      {REACT_APP_ENV && (
        <span>
          <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
        </span>
      )}
      <SelectLang className={styles.action} />
    </div>
  );
};

export default connect(({ settings }) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
