import { useState } from 'react';

export default function Person({person}) {

  return (
    <div>
      <h3>{person.name} is {person.age} years old</h3>
    </div>
  );
}