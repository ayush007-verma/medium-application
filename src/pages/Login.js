const { useState } = require("react");

export const Login = () => {
  const loginInfo = "register"; //useContext(loginInfo);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    const userInfo = {
      email: email,
      username: name,
      password: password
    };

    console.log("userInfo");
  };

  return (
    <>
      <h2>loginInfo</h2>
      <form onSubmit={onSubmit}>
        {loginInfo == "login" ? (
          <>
            <label> username : </label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <label> password : </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        ) : (
          <>
            <label> email </label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </>
        )}
      </form>
    </>
  );
};
