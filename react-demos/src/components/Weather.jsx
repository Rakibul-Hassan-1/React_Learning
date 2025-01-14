const Weather = () => {
  const val = 25;

  if (val < 20) {
    return <h1>It's cold outside</h1>;
  } else if (val >= 20 && val < 30) {
    return <h1>It's warm outside</h1>;
  } else {
    return <h1>It's hot outside</h1>;
  }
};

export default Weather;
