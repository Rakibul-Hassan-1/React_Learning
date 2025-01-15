import { useState } from "react";

const AddFriend = () => {
  const [friend, setFriend] = useState([
    "Rakibul",
    "Rasel",
    "Rahim",
    "Karim",
    "Jabbar",
  ]);
  const addFriend = () => setFriend([...friend, "Nurul"]);
  const removeFriend = () => setFriend([friend.filter((f) => f === "Rakibul")]);
  return (
    <section>
      <h1>Friends:</h1>
      {friend.map((f) => (
        <ul key={f}>
          <li>{f}</li>
        </ul>
      ))}
      <button onClick={addFriend}>Add Friend</button>
      <button onClick={removeFriend}>Remove Friend</button>
    </section>
  );
};

export default AddFriend;
