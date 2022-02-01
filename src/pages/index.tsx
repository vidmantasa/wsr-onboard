import React, { FC } from 'react';
import { useTranslation, useAppLoaded } from '@wix/yoshi-flow-bm';
import { Page, Layout, Cell, Breadcrumbs, Box, Button } from 'wix-style-react';
import SpamProtection from '../components/SpamProtection/SpamProtection';
import PostLimiter from '../components/PostLimiter/PostLimiter';
import AttachmentSize from '../components/AttachmentSize/AttachmentSize';
import WordFilter from '../components/WordFilter/WordFilter';
import DisablePosting from '../components/DisablePosting/DisablePosting';
import WordFilterPermissions from '../components/WordFilterPermissions/WordFilterPermissions';

const Index: FC = () => {
  useAppLoaded({ auto: true });

  const { t } = useTranslation();

  const links = [
    { id: 1, value: 'Posts' },
    { id: 2, value: 'Moderation Settings' },
  ];

  return (
    <Page>
      <Page.Header
        dataHook="app-title"
        title={t('app.title')}
        breadcrumbs={<Breadcrumbs items={links} />}
        showBackButton
        actionsBar={
          <Box gap={2}>
            <Button skin="inverted">{t('app.cancel-action')}</Button>
            <Button>{t('app.save-action')}</Button>
          </Box>
        }
      />
      <Page.Content>
        <Layout>
          <Cell>
            <SpamProtection />
          </Cell>
          <Cell>
            <PostLimiter />
          </Cell>
          <Cell>
            <AttachmentSize />
          </Cell>
          <Cell>
            <WordFilter />
          </Cell>
          <Cell>
            <DisablePosting />
          </Cell>
          <Cell>
            <WordFilterPermissions />
          </Cell>
        </Layout>
      </Page.Content>
    </Page>
  );
};

export default Index;
