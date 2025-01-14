const ValidPassword = () => <h1>Valid</h1>;
const InvalidPassword = () => <h1>Invalid</h1>;

const Password = ({ isValid }) => {
  // if (isValid) {
  //   return <ValidPassword />;
  // }
  // return <InvalidPassword />;

  // Using ternary oparator
  return isValid ? <ValidPassword /> : <InvalidPassword />;
};

const PassCheckComponent = () => {
  return (
    <div>
      <Password isValid={false} />
    </div>
  );
};

export default PassCheckComponent;
