import React from 'react'

function PeopleList({ name }) {
  const names = name;
  const listItems = names.map(name =>
    <li key={name}>{name}</li>
  );
  return <ul>{listItems}</ul>;
}

export default PeopleList 