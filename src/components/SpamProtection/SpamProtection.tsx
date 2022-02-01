import { useTranslation } from '@wix/yoshi-flow-bm';
import React, { FC, useState } from 'react';
import {
  Box,
  Card,
  Cell,
  Collapse,
  FormField,
  Layout,
  ToggleSwitch,
} from 'wix-style-react';

export const toggleOpenCollapseHook = 'toggle-open-collapse';
export const collapseHook = 'collapse-hook';

const SpamProtection: FC = () => {
  const { t } = useTranslation();
  const [openSpamProtection, setOpenSpamProtection] = useState(true);
  const [toggleSuspicious, setToggleSuspicious] = useState(true);
  const [togglePostCreated, setTogglePostCreated] = useState(true);
  const [toggleCommentCreated, setToggleCommentCreated] = useState(true);

  return (
    <Card>
      <Card.Header
        title={t('app.spam-protection-title')}
        subtitle={t('app.card-subtitle')}
        suffix={
          <ToggleSwitch
            dataHook={toggleOpenCollapseHook}
            onChange={() => setOpenSpamProtection(!openSpamProtection)}
            checked={openSpamProtection}
          />
        }
      />
      <Card.Divider />
      <Collapse open={openSpamProtection} dataHook={collapseHook}>
        <Card.Content>
          <Layout>
            <Cell>
              <Box>
                <FormField
                  label={t('app.spam-protection-toggle-suspicious')}
                  labelPlacement="right"
                  labelSize="small"
                >
                  <ToggleSwitch
                    checked={toggleSuspicious}
                    onChange={() => setToggleSuspicious(!toggleSuspicious)}
                  />
                </FormField>
              </Box>
            </Cell>
            <Cell>
              <Box>
                <FormField
                  label={t('app.spam-protection-toggle-post-created')}
                  labelPlacement="right"
                  labelSize="small"
                >
                  <ToggleSwitch
                    checked={togglePostCreated}
                    onChange={() => setTogglePostCreated(!togglePostCreated)}
                  />
                </FormField>
              </Box>
            </Cell>
            <Cell>
              <Box>
                <FormField
                  label={t('app.spam-protection-toggle-comment-created')}
                  labelPlacement="right"
                  labelSize="small"
                >
                  <ToggleSwitch
                    checked={toggleCommentCreated}
                    onChange={() =>
                      setToggleCommentCreated(!toggleCommentCreated)
                    }
                  />
                </FormField>
              </Box>
            </Cell>
          </Layout>
        </Card.Content>
      </Collapse>
    </Card>
  );
};
export default SpamProtection;
