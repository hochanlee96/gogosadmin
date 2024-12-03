import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/payout");
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleClick}>Go to Payout Page</button>
    </div>
  );
};
export default Home;
