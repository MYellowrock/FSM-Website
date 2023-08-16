import React, { useState } from "react";

function Online() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const response = await fetch("http://localhost/phpDocument/submit.php", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.message) {
        console.log("Başvuru başarıyla tamamlandı:", data.message);
      } else if (data.error) {
        console.error("Hata:", data.error);
      }
    } catch (error) {
      console.error("Hata:", error);
    }

    setUsername("");
    setPassword("");

    alert("Başarılı");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Giriş Yap</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Kullanıcı Adı:
            </label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Şifre:
            </label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
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
