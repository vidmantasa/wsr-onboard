import React from 'react';
import { render, waitFor } from '@testing-library/react';
import {
  ToggleSwitchTestkit,
  CollapseTestkit,
} from 'wix-style-react/dist/testkit';
import { testkit } from '@wix/yoshi-flow-bm/testkit';
import SpamProtection, {
  toggleOpenCollapseHook,
  collapseHook,
} from './SpamProtection';

describe('SpamProtection', () => {
  testkit.beforeAndAfter();

  beforeEach(() => testkit.reset());

  it('toggles collapse', async () => {
    const { TestComponent } = testkit.getComponent(SpamProtection);
    const { baseElement } = render(<TestComponent />);

    const toggleSwitchTestkit = ToggleSwitchTestkit({
      wrapper: baseElement,
      dataHook: toggleOpenCollapseHook,
    });
    const collapseTestkit = CollapseTestkit({
      wrapper: baseElement,
      dataHook: collapseHook,
    });

    await waitFor(async () => {
      expect(await collapseTestkit.exists()).toBe(true);
      expect(await toggleSwitchTestkit.exists()).toBe(true);
      expect(await toggleSwitchTestkit.isChecked()).toBe(true);
    });

    await toggleSwitchTestkit.click();

    await waitFor(async () => {
      expect(await toggleSwitchTestkit.isChecked()).toBe(false);
      expect(await collapseTestkit.isOpen()).toBe(false);
    });
  });
});
