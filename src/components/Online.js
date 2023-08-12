import React, { useState } from 'react';

function Online() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('/save.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
      });
  
      const data = await response.text();
      console.log(data); // Display the response from the server
    } catch (error) {
      console.error('Error:', error);
    }
  
    setUsername('');
    setPassword('');
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Giriş Yap</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Kullanıcı Adı:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className="border rounded-lg px-3 py-2 w-full mt-1"
            />
          </label>
          <label className="block mb-2">
            Şifre:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="border rounded-lg px-3 py-2 w-full mt-1"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}

export default Online;
