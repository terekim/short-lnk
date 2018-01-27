import React from 'react';
import { Meteor } from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import PropTypes from 'prop-types';


const PrivateHeader = (props) => {
  return (
    <div className="header">
      <div className="wrapper wrapper--header">
        <h1 className="header__title">{props.title}</h1>
        <button className="button button--menu" onClick={() => Accounts.logout()}>logout</button>
      </div>
    </div>

  )
};

PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default PrivateHeader;
