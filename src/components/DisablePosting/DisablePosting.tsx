import { useTranslation } from '@wix/yoshi-flow-bm';
import React, { FC, useState } from 'react';
import { Card, ToggleSwitch } from 'wix-style-react';

const DisablePosting: FC = () => {
  const { t } = useTranslation();
  const [togglePosting, setTogglePosting] = useState(true);

  return (
    <Card>
      <Card.Header
        title={t('app.disable-posting-title')}
        subtitle={t('app.disable-posting-subtitle')}
        suffix={
          <ToggleSwitch
            onChange={() => setTogglePosting(!togglePosting)}
            checked={togglePosting}
          />
        }
      />
    </Card>
  );
};
export default DisablePosting;
