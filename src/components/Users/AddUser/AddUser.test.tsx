import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddUser from './AddUser';

configure({ adapter: new Adapter() });

describe('<AddUser />', () => {
  let wrapper: any;
  const mockCallback = jest.fn();

  beforeEach(() => {
    wrapper = mount(<AddUser onAddUser={mockCallback} />);
  });

  it('should not display any error at start', () => {
    expect(wrapper.find('#errorText').text()).toBeFalsy();
  });

  it('should display an error when the Add Button is clicked - if Name and Country are empty', () => {
    wrapper.find('button').simulate('submit');
    expect(wrapper.find('#errorText').text()).toBeTruthy();
  });

  it('should return name and country in onAddUser() when the Add Button is clicked - if Name and Country are filled in', () => {
    const nameEvent = {
      preventDefault() {},
      target: { value: 'testName' }
    };

    const countryEvent = {
      preventDefault() {},
      target: { value: 'testCountry' }
    };

    wrapper.find('#name').simulate('change', nameEvent);
    wrapper.find('#country').simulate('change', countryEvent);
    wrapper.find('button').simulate('submit');
    expect(mockCallback.mock.calls[0][0]).toEqual({ name: 'testName', country: 'testCountry' });
  });
});
