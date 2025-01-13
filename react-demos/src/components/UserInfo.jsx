const UserInfo = () => {
  const users = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Saiful", age: 30 },
    { id: 3, name: "Larry Wong", age: 10 },
    { id: 4, name: "Rakibul Hassan", age: 40 },
    { id: 5, name: "John Wong", age: 50 },
  ];
  return (
    <div>
      <h1>User infomation:</h1>
      {users.map((users) => (
        <ul key={users.id}>
          <li>User Id: {users.id}</li>
          <li>Name: {users.name}</li>
          <li>Age: {users.age}</li>
        </ul>
      ))}
    </div>
  );
};
export default UserInfo;
