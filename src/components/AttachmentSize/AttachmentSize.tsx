import { useTranslation } from '@wix/yoshi-flow-bm';
import React, { FC, useState } from 'react';
import {
  Box,
  Card,
  Cell,
  Collapse,
  FormField,
  Input,
  Layout,
  Slider,
  ToggleSwitch,
} from 'wix-style-react';

export const sliderHook = 'slider-hook';
export const inputHook = 'input-hook';

const AttachmentSize: FC = () => {
  const { t } = useTranslation();
  const [openAttachmentSize, setOpenAttachmentSize] = useState(true);
  const [value, setValue] = useState<number | number[]>(50);

  return (
    <Card>
      <Card.Header
        title={t('app.attachment-size-title')}
        subtitle={t('app.attachment-size-subtitle')}
        suffix={
          <ToggleSwitch
            onChange={() => setOpenAttachmentSize(!openAttachmentSize)}
            checked={openAttachmentSize}
          />
        }
      />
      <Card.Divider />
      <Collapse open={openAttachmentSize}>
        <Card.Content>
          <Layout>
            <Cell>
              <FormField
                labelSize="small"
                label={t('app.attachment-size-label')}
              >
                <Box gap={2}>
                  <Box display="block" width="100%">
                    <Slider
                      dataHook={sliderHook}
                      onChange={setValue}
                      min={0}
                      max={100}
                      value={value}
                      displayMarks={false}
                    />
                  </Box>
                  <Box width="60px">
                    <Input
                      dataHook={inputHook}
                      value={Array.isArray(value) ? value[0] : value}
                      onChange={(e) => setValue(Number(e.target.value))}
                    />
                  </Box>
                </Box>
              </FormField>
            </Cell>
          </Layout>
        </Card.Content>
      </Collapse>
    </Card>
  );
};
export default AttachmentSize;
