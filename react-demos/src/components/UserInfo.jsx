const UserInfo = () => {
  const user = [
    {
      username: "John",
      email: "john@gmail.com",
      location: "India",
    },
    {
      username: "Rakib",
      email: "Rakib@gmail.com",
      location: "Bangladesh",
    },
    {
      username: "Kawser",
      email: "kawser@gmail.com",
      location: "China",
    },
    {
      username: "Wong",
      email: "Wong@gmail.com",
      location: "China",
    },
    {
      username: "Saiful",
      email: "Saiful@gmail.com",
      location: "Barishal",
    },
  ];
  return (
    <div>
      <h1>This is all User Infomation:</h1>
      {user.map((user) => (
        <ul key={Math.random()}>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>
        </ul>
      ))}
    </div>
  );
};

export default UserInfo;
