import { useTranslation } from '@wix/yoshi-flow-bm';
import React, { FC, useState } from 'react';
import {
  Box,
  Card,
  Cell,
  Collapse,
  Dropdown,
  FormField,
  Layout,
  SectionHelper,
  SelectableAccordion,
  Text,
  ToggleSwitch,
} from 'wix-style-react';

export const accordionHook = 'acoordion-hook';
export const postsDropdownHook = 'posts-dropdown-hook';
export const textHook = 'text-hook';

const WordFilterPermissions: FC = () => {
  const { t } = useTranslation();
  const [openWordFilterPermissions, setOpenWordFilterPermissions] =
    useState(true);

  return (
    <Card>
      <Card.Header
        title={t('app.word-filter-title')}
        subtitle={t('app.word-filter-subtitle')}
        suffix={
          <ToggleSwitch
            onChange={() =>
              setOpenWordFilterPermissions(!openWordFilterPermissions)
            }
            checked={openWordFilterPermissions}
          />
        }
      />
      <Card.Divider />
      <Collapse open={openWordFilterPermissions}>
        <Layout>
          <Cell>
            <Box padding="30px 24px 0px 24px">
              <SectionHelper appearance="standard">
                {t('app.word-filter-permissions-helper')}
              </SectionHelper>
            </Box>
          </Cell>
          <Cell>
            <Box paddingLeft="24px">
              <Text size="small" skin="disabled">
                {t('app.word-filter-permissions-label')}
              </Text>
            </Box>
          </Cell>
          <Cell span={12}>
            <Box paddingBottom="24px">
              <SelectableAccordion
                type="radio"
                verticalPadding="tiny"
                dataHook={accordionHook}
                items={[
                  {
                    initiallyOpen: true,
                    title: t('app.word-filter-permissions-new-members-label'),
                    subtitle: t('app.word-filter-permissions-new-members-desc'),
                    content: (
                      <Layout>
                        <Cell>
                          <FormField
                            label={t(
                              'app.word-filter-permissions-posts-kind-label',
                            )}
                            labelSize="small"
                          >
                            <Dropdown
                              dataHook={postsDropdownHook}
                              placeholder="Select"
                              options={[{ id: 0, value: 'All Posts' }]}
                            />
                          </FormField>
                        </Cell>
                        <Cell>
                          <FormField
                            label={t(
                              'app.word-filter-permissions-posts-count-label',
                            )}
                            labelSize="small"
                          >
                            <Dropdown
                              placeholder="Select"
                              options={[{ id: 0, value: '1 Post' }]}
                            />
                          </FormField>
                        </Cell>
                      </Layout>
                    ),
                  },
                  {
                    title: t('app.word-filter-permissions-all-members-label'),
                    subtitle: t('app.word-filter-permissions-all-members-desc'),
                    content: <Text dataHook={textHook}>TODO</Text>,
                  },
                ]}
              />
            </Box>
          </Cell>
        </Layout>
      </Collapse>
    </Card>
  );
};
export default WordFilterPermissions;
