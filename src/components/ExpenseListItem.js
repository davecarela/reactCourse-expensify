import React from 'react';
import { NavLink } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3>
      <NavLink to={`/edit/${id}`} activeClassName="is-active" exact={true}>
        {description}
      </NavLink>
    </h3>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

export default ExpenseListItem;
