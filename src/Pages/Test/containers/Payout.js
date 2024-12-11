import { API_Payout, API_CreatePayoutSchedule } from "../../../API";
import classes from "./Payout.module.css";
const Payout = () => {
  const payout = async () => {
    try {
      const response = await API_Payout();
      const data = await response.json();
      if (data.status === 200) {
        alert("Payout successful");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const createPayoutSchedule = async () => {
    try {
      const reponse = await API_CreatePayoutSchedule();
      const data = await reponse.json();
      if (data.status === 200) {
        alert("Payout schedule created successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={classes.Container}>
      <div>This is the Payout Test page</div>
      <button
        onClick={() => {
          payout();
        }}
      >
        Payout to "acct_1QQKKlPCz9W3G0gL", this is going to be performed
        automatically on the payout date
      </button>
      <button
        onClick={() => {
          createPayoutSchedule();
        }}
      >
        Create payout schedule to "acct_1QQKKlPCz9W3G0gL"
      </button>
    </div>
  );
};

export default Payout;
