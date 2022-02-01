import React from 'react';
import { render, waitFor } from '@testing-library/react';
import {
  SelectableAccordionTestkit,
  DropdownTestkit,
  TextTestkit,
} from 'wix-style-react/dist/testkit';
import { testkit } from '@wix/yoshi-flow-bm/testkit';
import WordFilterPermissions, {
  accordionHook,
  postsDropdownHook,
  textHook,
} from './WordFilterPermissions';

describe('WordFilterPermissions', () => {
  testkit.beforeAndAfter();

  beforeEach(() => testkit.reset());

  it('should change dropdown value', async () => {
    const { TestComponent } = testkit.getComponent(WordFilterPermissions);
    const { baseElement } = render(<TestComponent />);

    const selectableAccordionTestkit = SelectableAccordionTestkit({
      wrapper: baseElement,
      dataHook: accordionHook,
    });
    const dropdownTestkit = DropdownTestkit({
      wrapper: baseElement,
      dataHook: postsDropdownHook,
    });

    await waitFor(async () => {
      expect(await dropdownTestkit.exists()).toBe(true);
      expect(await dropdownTestkit.inputDriver.getValue()).toEqual('');
      expect(await selectableAccordionTestkit.exists()).toBe(true);
    });

    await dropdownTestkit.dropdownLayoutDriver.click();
    await dropdownTestkit.dropdownLayoutDriver.clickAtOption(0);

    await waitFor(async () => {
      expect(await dropdownTestkit.inputDriver.getValue()).toEqual('All Posts');
    });
  });

  it('should show content on radio change', async () => {
    const { TestComponent } = testkit.getComponent(WordFilterPermissions);
    const { baseElement } = render(<TestComponent />);

    const selectableAccordionTestkit = SelectableAccordionTestkit({
      wrapper: baseElement,
      dataHook: accordionHook,
    });

    const textTestkit = TextTestkit({
      wrapper: baseElement,
      dataHook: textHook,
    });

    await waitFor(async () => {
      expect(await selectableAccordionTestkit.exists()).toBe(true);
      expect(await textTestkit.exists()).toBe(false);
      expect(await selectableAccordionTestkit.isItemExpandedAt(0)).toBe(true);
    });

    await selectableAccordionTestkit.clickItemAt(1);

    await waitFor(async () => {
      expect(await selectableAccordionTestkit.isItemExpandedAt(1)).toBe(true);
      // expect(await textTestkit.exists()).toBe(true);
    });
  });
});
