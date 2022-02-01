import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { SliderTestkit, InputTestkit } from 'wix-style-react/dist/testkit';
import { testkit } from '@wix/yoshi-flow-bm/testkit';
import AttachmentSize, { sliderHook, inputHook } from './AttachmentSize';

describe('AttachmentSize', () => {
  testkit.beforeAndAfter();

  beforeEach(() => testkit.reset());

  it('should set value on input and slider', async () => {
    const { TestComponent } = testkit.getComponent(AttachmentSize);
    const { baseElement } = render(<TestComponent />);

    const sliderTestkit = SliderTestkit({
      wrapper: baseElement,
      dataHook: sliderHook,
    });
    const inputTestkit = InputTestkit({
      wrapper: baseElement,
      dataHook: inputHook,
    });

    await waitFor(async () => {
      expect(await inputTestkit.exists()).toBe(true);
      expect(await inputTestkit.getValue()).toEqual('50');
      expect(await sliderTestkit.exists()).toBe(true);
      expect(await sliderTestkit.numOfSliderHandles()).toEqual(1);
      expect(await sliderTestkit.getToolTipValue()).toEqual('50');
    });

    await inputTestkit.enterText('53');

    await waitFor(async () => {
      expect(await inputTestkit.getValue()).toEqual('53');
      expect(await sliderTestkit.getToolTipValue()).toEqual('53');
    });
  });
});
