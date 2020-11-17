import React from 'react';
import NewNotes from './NewNotes';

function App() {
  return (
    <>
      <NewNotes addNote={alert} />
      <hr />
      <ul>
        <li>Notes go here:</li>
      </ul>
    </>
  );
}

export default App;
