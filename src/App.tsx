import React from 'react';
import { TextField } from './TextField';

const App: React.FC = () => {
  return (
    <div>
      <TextField text='Hello' person={{firstName: 'Osmar', lastName: 'Ramirez'}} />
    </div>
  );
}

export default App;
