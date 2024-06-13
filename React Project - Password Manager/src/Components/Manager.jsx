import React, { useEffect, useRef, useState } from "react";

const Manager = () => {
  const passwordRef = useRef();
  const ref = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("password");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    if (passwordRef.current.type === "password") {
      ref.current.src = "eye.png";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "hide.png";
      passwordRef.current.type = "password";
    }
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("password", JSON.stringify([...passwordArray, form]));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-green-50">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full opacity-50 blur-[80px]"></div>
      <div className="mycontainer mt-10">
        <h1 className="text-4xl font-bold text-center min-w-32">
          <span className="text-green-700">&lt;</span>
          Pass
          <span className="text-green-700">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-center min-w-32 text-lg">
          Your Own Password Manager
        </p>

        <div className="flex flex-col p-4 gap-8 text-black items-center">
          <input
            placeholder="Enter Website URL"
            value={form.site}
            onChange={handleChange}
            name="site"
            className="rounded-full border border-green-500 w-full text-black py-1 p-4"
            type="text"
          />
          <div className="flex w-full gap-8">
            <input
              placeholder="Enter Username"
              value={form.username}
              onChange={handleChange}
              name="username"
              className="rounded-full border border-green-500 w-full text-black py-1 p-4"
              type="text"
            />
            <div className="relative">
              <input
                ref={passwordRef}
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
                name="password"
                className="rounded-full border border-green-500 w-full text-black py-1 p-4"
                type="password"
              />
              <span
                className="absolute right-[3px] top-[3px] pe-2 cursor-pointer"
                onClick={showPassword}
              >
                <img ref={ref} src="hide.png" className="w-6" alt="" />
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-green-500 hover:bg-green-600 rounded-full px-8 py-2 w-fit gap-2 hover:border border-green-900"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            <span>Add Password</span>
          </button>
        </div>

        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 ? (
            <div>No passwords to show</div>
          ) : (
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-green-800">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 border border-white text-center w-32">
                      <div className="flex justify-center items-center gap-2 cursor-pointer">
                        <a
                          href={item.site}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.site}
                        </a>
                        <img
                          src="copy.gif"
                          alt="copy-btn"
                          width={15}
                          onClick={() => copyText(item.site)}
                        />
                      </div>
                    </td>
                    <td className="py-2 border border-white text-center w-32">
                      <div className="flex justify-center items-center gap-2">
                        {item.username}
                        <img
                          src="copy.gif"
                          alt="copy-btn"
                          width={15}
                          onClick={() => copyText(item.username)}
                          className="cursor-pointer"
                        />
                      </div>
                    </td>
                    <td className="py-2 border border-white text-center w-32">
                      <div className="flex justify-center items-center gap-2 yw-full">
                        {item.password}
                        <img
                          src="copy.gif"
                          alt="copy-btn"
                          width={15}
                          onClick={() => copyText(item.password)}
                          className="cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Manager;
