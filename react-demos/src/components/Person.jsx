const Person = () => {
  return (
    <div>
      <Child
        name="Rakibul Hassan"
        age={24}
        email="rakibulhassan29052000@gmail.com"
      />
    </div>
  );
};

const Child = ({ name, age, email }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h2>Email: {email}</h2>
    </div>
  );
};
export default Person;
