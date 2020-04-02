import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Card from '../../UI/Card/Card';
import ICitizenData from '../../../interfaces/ICitizenData';
import CustomButton from '../../UI/CustomButton/CustomButton';

const inputDivStyle = {
  marginBottom: '20px'
};

const inputStyle = {
  width: '100%',
  height: '30px'
};

interface IProps {
  onAddUser: (citizenData: ICitizenData) => void;
}

const AddUser: React.FC<IProps> = ({ onAddUser }) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredCountry, setEnteredCountry] = useState('');
  const [errorText, setErrorText] = useState('');

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!enteredName.length || !enteredCountry.length) {
      setErrorText('Name and Country are mandatory to add a Citizen.');
    } else {
      onAddUser({ name: enteredName, country: enteredCountry });
      setEnteredName('');
      setEnteredCountry('');
      setErrorText('');
    }
  };

  const onNameChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredName(event.target.value);
    setErrorText('');
  };

  const onCountryChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredCountry(event.target.value);
    setErrorText('');
  };

  return (
    <section>
      <Card>
        <form onSubmit={submitHandler}>
          <div style={{ textAlign: 'left', width: 400, margin: 'auto' }}>
            <div style={inputDivStyle}>
              <div>
                <label htmlFor="name">
                  Name:
                  <input type="text" id="name" value={enteredName} style={inputStyle} onChange={onNameChanged} />
                </label>
              </div>
            </div>
            <div style={inputDivStyle}>
              <div>
                <label htmlFor="country">
                  Country:
                  <input type="text" id="country" value={enteredCountry} style={inputStyle} onChange={onCountryChanged} />
                </label>
              </div>
            </div>
          </div>
          <div style={{ color: 'red' }}>
            <small id="errorText">{errorText}</small>
          </div>
          <div>
            <CustomButton buttonType="submit" margined curved>
              Add Citizen
            </CustomButton>
          </div>
        </form>
      </Card>
    </section>
  );
};

AddUser.propTypes = {
  onAddUser: PropTypes.func.isRequired
};

export default AddUser;
