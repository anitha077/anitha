import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import Game from './Game';
function App() {
  const [registeredUser, setRegisteredUser] = useState(null);
  const handleRegister = (username) => {
    setRegisteredUser(username);
  };
  return (
    <div className="App">
      {!registeredUser ? (
        <RegisterForm onRegister={handleRegister} />
      ) : (
        <Game username={registeredUser} />
      )}
    </div>
  );
}
export default App;