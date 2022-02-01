import { useTranslation } from '@wix/yoshi-flow-bm';
import React, { FC, useState } from 'react';
import { Card, Collapse, RadioGroup, ToggleSwitch } from 'wix-style-react';

const PostLimiter: FC = () => {
  const { t } = useTranslation();
  const [openPostLimiter, setOpenPostLimiter] = useState(true);
  const [radio, setRadio] = useState(1);

  return (
    <Card>
      <Card.Header
        title={t('app.post-limiter-title')}
        subtitle={t('app.card-subtitle')}
        suffix={
          <ToggleSwitch
            onChange={() => setOpenPostLimiter(!openPostLimiter)}
            checked={openPostLimiter}
          />
        }
      />
      <Card.Divider />
      <Collapse open={openPostLimiter}>
        <Card.Content>
          <RadioGroup
            value={radio}
            onChange={(value) => setRadio(Number(value))}
          >
            <RadioGroup.Radio value={1}>
              {t('app.post-limiter-radio-ten')}
            </RadioGroup.Radio>
            <RadioGroup.Radio value={2}>
              {t('app.post-limiter-radio-five')}
            </RadioGroup.Radio>
            <RadioGroup.Radio value={3}>
              {t('app.post-limiter-radio-one')}
            </RadioGroup.Radio>
          </RadioGroup>
        </Card.Content>
      </Collapse>
    </Card>
  );
};
export default PostLimiter;
