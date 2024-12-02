export const API_Login = async (body) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/tutors/login",
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const API_CheckEmailExists = async (email) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + `/tutors/email-exists?email=${email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const API_Signup = async (body) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/tutors/signup",
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
