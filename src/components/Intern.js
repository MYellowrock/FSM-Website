import React, { useState } from "react";

function Intern() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [level, setLevel] = useState("");
  const [grade, setGrade] = useState("");
  const [gender, setGender] = useState("");
  const [comment, setComment] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleMailChange = (event) => {
    setMail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSchoolChange = (event) => {
    setSchool(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("mail", mail);
    formData.append("phone", phone);
    formData.append("school", school);
    formData.append("level", level);
    formData.append("grade", grade);
    formData.append("gender", gender);
    formData.append("comment", comment);

    try {
      const response = await fetch("http://localhost/phpDocument/intern.php", {
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

    setName("");
    setSurname("");
    setMail("");
    setPhone("");
    setSchool("");
    setLevel("");
    setGrade("");
    setGender("");
    setComment("");

    alert("Başarılı");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Stajyer Başvurusu</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              İsim:
            </label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Soyisim:
            </label>
            <input
              type="text"
              value={surname}
              onChange={handleSurnameChange}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Mail:
            </label>
            <input
              type="email"
              value={mail}
              onChange={handleMailChange}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Telefon Numarası:
            </label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Okul:
            </label>
            <input
              type="text"
              value={school}
              onChange={handleSchoolChange}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Sınıf:
            </label>
            <input
              type="text"
              value={level}
              onChange={handleLevelChange}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Not Ortalaması:
            </label>
            <input
              type="number"
              value={grade}
              onChange={handleGradeChange}
              step="0.01"
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Cinsiyet:
            </label>
            <input
              type="text"
              value={gender}
              onChange={handleGenderChange}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Yorum:
            </label>
            <input
              type="text"
              value={comment}
              onChange={handleCommentChange}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
}

export default Intern;
