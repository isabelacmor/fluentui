import * as React from 'react';
import Screener, { Steps } from 'screener-storybook/src/screener';
import { storiesOf } from '@storybook/react';
import { mergeStyles } from '@fluentui/react';
import { Divider } from '@fluentui/react-divider';

const verticalStyles = mergeStyles({
  height: '400px',
});

const horizontalStyles = mergeStyles({
  width: '400px',
});

storiesOf('Divider Converged', module)
  .addDecorator(story => (
    <Screener steps={new Steps().snapshot('default', { cropTo: '.testWrapper' }).end()}>
      {story()}
    </Screener>
  ))
  .addStory(
    'Horizontal without content',
    () => (
      <div className={horizontalStyles}>
        <Divider />
      </div>
    ),
    { includeRtl: true },
  )
  .addStory(
    'Horizontal with content',
    () => (
      <div className={horizontalStyles}>
        <Divider>Today</Divider>
      </div>
    ),
    { includeRtl: true, includeHighContrast: true, includeDarkMode: true },
  )
  .addStory(
    'Horizontal Start Aligned',
    () => (
      <div className={horizontalStyles}>
        <Divider alignContent="start">Today</Divider>
      </div>
    ),
    { includeRtl: true },
  )
  .addStory(
    'Horizontal End Aligned',
    () => (
      <div className={horizontalStyles}>
        <Divider alignContent="end">Today</Divider>
      </div>
    ),
    { includeRtl: true },
  )
  .addStory('Vertical Center Aligned', () => (
    <div className={verticalStyles}>
      <Divider vertical>Today</Divider>
    </div>
  ))
  .addStory('Vertical Start Aligned', () => (
    <div className={verticalStyles}>
      <Divider vertical alignContent="start">
        Today
      </Divider>
    </div>
  ))
  .addStory('Vertical End Aligned', () => (
    <div className={verticalStyles}>
      <Divider vertical alignContent="end">
        Today
      </Divider>
    </div>
  ))
  .addStory(
    'Appearance subtle',
    () => (
      <div className={verticalStyles}>
        <Divider appearance="subtle">Today</Divider>
      </div>
    ),
    { includeHighContrast: true, includeDarkMode: true },
  )
  .addStory(
    'Appearance strong',
    () => (
      <div className={verticalStyles}>
        <Divider appearance="strong">Today</Divider>
      </div>
    ),
    { includeHighContrast: true, includeDarkMode: true },
  )
  .addStory(
    'Appearance brand',
    () => (
      <div className={verticalStyles}>
        <Divider appearance="brand">Today</Divider>
      </div>
    ),
    { includeHighContrast: true, includeDarkMode: true },
  )
  .addStory('Inset', () => (
    <div className={verticalStyles}>
      <Divider inset>Today</Divider>
    </div>
  ))
  .addStory('Vertical inset', () => (
    <div className={verticalStyles}>
      <Divider inset vertical>
        Today
      </Divider>
    </div>
  ));
