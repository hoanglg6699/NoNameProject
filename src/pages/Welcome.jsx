import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';

export default () => {
  const intl = useIntl();
  return (
    <PageContainer>
      <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: 'Welcome to my project',
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          <FormattedMessage
            id="pages.welcome.shopeeClone"
            defaultMessage="ShopeeClone - HTML, CSS"
          />
          {' - '}
          <a
            href="https://github.com/hoanglg6699/lgh.github.io/tree/main/ShopeeClone"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="Source Code" />
          </a>
        </Typography.Text>
        <br />
        <br />
        <a
          href="https://hoanglg6699.github.io/lgh.github.io/ShopeeClone/"
          rel="noopener noreferrer"
          target="__blank"
        >
          Website: ShopeeClone
        </a>
        <br />
        <br />
        <br />
        <Typography.Text
          strong
          style={{
            marginBottom: 12,
          }}
        >
          <FormattedMessage
            id="pages.welcome.musicPlayer"
            defaultMessage="MusicPlayer - HTML, CSS, JavaScript"
          />
          {' - '}
          <a
            href="https://github.com/hoanglg6699/lgh.github.io/tree/main/MusicPlayer"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="Source Code" />
          </a>
        </Typography.Text>
        <br />
        <br />
        <a
          href="https://hoanglg6699.github.io/lgh.github.io/MusicPlayer/"
          rel="noopener noreferrer"
          target="__blank"
        >
          Website: MusicPlayer
        </a>
        <br />
        <br />
        <br />
      </Card>
    </PageContainer>
  );
};
