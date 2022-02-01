import { useTranslation } from '@wix/yoshi-flow-bm';
import React, { FC, useState } from 'react';
import {
  Card,
  Cell,
  Collapse,
  FormField,
  InputArea,
  Layout,
  ToggleSwitch,
} from 'wix-style-react';

const WordFilter: FC = () => {
  const { t } = useTranslation();
  const [openWordFilter, setOpenWordFilter] = useState(true);

  return (
    <Card>
      <Card.Header
        title={t('app.word-filter-title')}
        subtitle={t('app.word-filter-subtitle')}
        suffix={
          <ToggleSwitch
            onChange={() => setOpenWordFilter(!openWordFilter)}
            checked={openWordFilter}
          />
        }
      />
      <Card.Divider />
      <Collapse open={openWordFilter}>
        <Card.Content>
          <Layout>
            <Cell span={6}>
              <FormField
                labelSize="small"
                label={t('app.word-filter-spam-label')}
                infoContent={t('app.word-filter-spam-desc')}
              >
                <InputArea
                  placeholder={t('app.word-filter-spam-desc')}
                  rows={4}
                  maxLength={300}
                  resizable
                />
              </FormField>
            </Cell>
            <Cell span={6}>
              <FormField
                labelSize="small"
                label={t('app.word-filter-banned-label')}
                infoContent={t('app.word-filter-banned-desc')}
              >
                <InputArea
                  placeholder={t('app.word-filter-banned-desc')}
                  rows={4}
                  maxLength={300}
                  resizable
                />
              </FormField>
            </Cell>
          </Layout>
        </Card.Content>
      </Collapse>
    </Card>
  );
};
export default WordFilter;
