const UserStatus = (props) => {
  if (props.loogedIn) {
    if (props.isAdmin) {
      return (
        <h1
          style={{
            color: "white",
            backgroundColor: "teal",
            padding: "3rem",
            fontSize: "3rem",
          }}
        >
          Welcome Admin
        </h1>
      );
    } else {
      return <h1>Welcome User</h1>;
    }
  } else {
    return <h1>Please Login</h1>;
  }
};
export default UserStatus;
