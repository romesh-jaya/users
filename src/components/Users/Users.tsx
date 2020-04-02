import React, { useState, useEffect } from 'react';
import AddUser from './AddUser/AddUser';
import ICitizenData from '../../interfaces/ICitizenData';

interface IUserData {
  id: number;
  name: string;
  country: string;
}

const INITIAL_KEY_VAL = 0;
const INCREMENT_VAL = 1;
const CUTOFF_COUNTRY_LENGTH = 8;

const Users: React.FC = () => {
  const [userArray, setUserArray] = useState<IUserData[]>([]);
  const [userList, setUserList] = useState<React.ReactNode[]>([]);
  const [keyIndex, setKeyIndex] = useState(INITIAL_KEY_VAL);

  const onAddUser = (citizenData: ICitizenData): void => {
    const newUser = { id: keyIndex, name: citizenData.name, country: citizenData.country };
    setUserArray((prevUserArray) => [...prevUserArray, newUser]);
    setKeyIndex((prevKeyIndex) => prevKeyIndex + INCREMENT_VAL);
  };

  // UseEffect to update userList
  useEffect(() => {
    setUserList(
      userArray.map((user) => {
        let countryWithStyling = <span>{user.country}</span>;
        if (user.country.length > CUTOFF_COUNTRY_LENGTH) {
          countryWithStyling = <strong>{countryWithStyling}</strong>;
        }
        return (
          <p key={user.id}>
            {/* prettier-ignore */}
            <p>
              {user.name}
              {' '}
              -
              {' '}
              {countryWithStyling}
            </p>
          </p>
        );
      })
    );
  }, [userArray]);

  return (
    <>
      <h1>Citizen List</h1>
      <AddUser onAddUser={onAddUser} />
      {userList}
    </>
  );
};

export default Users;
