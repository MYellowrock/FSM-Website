function Hiring() {
    return (
      <div id="hiring">
        <div id="human-sources-form">
          <form className="my-24">
            <label className="block text-center">
              <span className="block text-xl font-semibold mb-2">İsim</span>
              <input
                type="text"
                className="peer border-2 rounded-2xl p-4 w-[256px] text-center"
                placeholder="First Name"
                name="name"
              />
            </label>
  
            <label className="block text-center mt-6">
              <span className="block text-xl font-semibold mb-2">Soyisim</span>
              <input
                type="text"
                className="peer border-2 rounded-2xl p-4 w-[256px] text-center"
                placeholder="Last Name"
                name="surname"
              />
            </label>
  
            <label className="block text-center mt-6">
              <span className="block text-xl font-semibold mb-2">Email</span>
              <input
                type="email"
                className="peer border-2 rounded-2xl p-4 w-[256px] text-center"
                placeholder="Email"
                name="email"
              />
            </label>
  
            <label className="block text-center mt-6">
              <span className="block text-xl font-semibold mb-2">
                Telefon Numarası
              </span>
              <input
                type="tel"
                className="peer border-2 rounded-2xl p-4 w-[256px] text-center"
                placeholder="Phone Number"
                name="phone"
              />
            </label>
  
            <label className="block text-center mt-6">
            <span className="block text-xl font-semibold mb-2">Okul</span>
            <input
              type="text"
              className="peer border-2 rounded-2xl p-4 w-[256px] text-center"
              placeholder="School"
              name="school"
            />
          </label>

          <label className="block text-center mt-6">
              <span className="block text-xl font-semibold mb-2">
                Mezun Not Ortalaması
              </span>
              <input
                type="tel"
                className="peer border-2 rounded-2xl p-4 w-[256px] text-center"
                placeholder="GPA (4'lük sistemde)"
                name="phone"
              />
            </label>

            <label className="block text-center mt-6">
              <span className="block text-xl font-semibold mb-2">Cinsiyet</span>
              <div className="flex justify-center items-center">
                <label className="mr-4">
                  <input type="radio" name="gender" value="male" />
                  <span className="ml-2">Erkek</span>
                </label>
                <label>
                  <input type="radio" name="gender" value="female" />
                  <span className="ml-2">Kadın</span>
                </label>
              </div>
            </label>

            <label className="block text-center mt-6">
            <span className="block text-xl font-semibold mb-2">Resim</span>
            <input type="file" accept="image/*" className="peer text-center" name="picture"/>
          </label>

          <label className="block text-center mt-6">
            <span className="block text-xl font-semibold mb-2">CV</span>
            <input type="file" accept="image/*" className="peer text-center" name="cv"/>
          </label>

            <label className="block text-center mt-6">
              <span className="block text-xl font-semibold mb-2">Yorum</span>
              <textarea
                className="peer border-2 rounded-2xl p-4 w-1/2 h-32 text-center"
                placeholder="Bize görüşlerinizi bildiriniz..."
                name="comments"
              />
            </label>

            <button type="submit" className="block mt-6 bg-fsm-blue text-white px-12 py-6 rounded-2xl hover:bg-blue-600 mx-auto">
            <p className="text-center font-semibold text-xl">Gönder</p>
          </button>

          </form>
        </div>
      </div>
    );
  }
  
  export default Hiring;
  