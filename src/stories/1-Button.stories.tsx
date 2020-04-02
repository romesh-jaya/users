import React from 'react';
import { storiesOf } from '@storybook/react';
import CustomButton from '../components/UI/CustomButton/CustomButton';

export default {
  title: 'Button',
  component: CustomButton
};

storiesOf('CustomButton', module)
  .add('curved', () => (
    <CustomButton buttonType="button" curved>
      Curved Button
    </CustomButton>
  ))
  .add('margined', () => (
    <CustomButton buttonType="button" margined>
      Margined Button
    </CustomButton>
  ))
  .add('curved & margined', () => (
    <CustomButton buttonType="button" curved margined>
      Curved and Margined Button
    </CustomButton>
  ))
  .add('squared & non-margined', () => <CustomButton buttonType="button">Standard Button</CustomButton>);
