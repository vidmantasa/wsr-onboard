/// <reference types="@wix/sled-test-runner" />
// ⚠️ Remember:
// 1. Ensure your application is ready (fully loaded, interactive and finished animations) before you're starting to perform actions / take screenshots
// 2. Each spec file running 3 times in parallel!
import { Page } from 'puppeteer';
import { injectBMOverrides } from '@wix/yoshi-flow-bm/sled';
import {
  InputAreaTestkit,
  PageHeaderTestkit,
  RadioGroupTestkit,
} from 'wix-style-react/dist/testkit/puppeteer';

describe('happy flow', () => {
  let _page: Page;

  const SLED_DEFAULT_MSID = 'eeaf3519-1406-45f0-a8ea-a59a4ecbc1a6';

  beforeEach(async () => {
    const { page } = await sled.newPage({
      authType: 'free-user', // TODO: This is a shared user, Change that! See: https://bo.wix.com/wix-docs/fe-guild/infra/sled/getting-started/test-user
      experiments: [
        {
          key: 'specs.infra.yoshi-bm.ChangeMe',
          val: 'true',
        },
      ],
    });

    _page = page as any;

    await injectBMOverrides({
      page,
      appConfig: require('../target/module-sled.merged.json'),
    });

    const url = `https://www.wix.com/dashboard/${SLED_DEFAULT_MSID}/wsr-vidas-onboard`;

    await _page.goto(url, {
      waitUntil: 'networkidle2',
    });
  });

  afterEach(async () => {
    if (_page) {
      _page.close();
    }
  });

  it('should render dashboard title for authenticated user', async () => {
    const pageHeaderTestkit = await PageHeaderTestkit({
      page: _page,
      dataHook: 'app-title',
    });

    const text = await pageHeaderTestkit.titleText();
    expect(text).toMatch('Moderation Settings');
  });

  it('should add words to word filter', async () => {
    const inputAreaTestkit = await InputAreaTestkit({
      page: _page,
      dataHook: 'word-filter-hook',
    });
    const text = 'swear word';
    await inputAreaTestkit.enterText(text);

    expect(await inputAreaTestkit.getValue()).toEqual(text);
  });

  it('should change radio buttons on post limiter', async () => {
    const radioGroupTestkit = await RadioGroupTestkit({
      page: _page,
      dataHook: 'post-limiter-radio-hook',
    });
    await radioGroupTestkit.selectByIndex(2);

    expect(await radioGroupTestkit.getSelectedValue()).toEqual('3');
  });
});
