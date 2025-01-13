const Props = () => {
  return (
    <Child
      name="Rakibul Hassan"
      age={24}
      img="https://avatars.githubusercontent.com/u/129542986?v=4"
    />
  );
};

// const Child = (props) => {
//   return (
//     <div>
//       <h1>This is Props Use:</h1>
//       <h2>{props.name}</h2>
//       <h2>{props.age}</h2>
//       <img src={props.img} alt="" />
//     </div>
//   );
// };

//smme but using destructuring methos
const Child = ({ name, age, img }) => {
  return (
    <div>
      <h1>This is Props Use:</h1>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <img src={img} alt="" />
    </div>
  );
};
export default Props;
