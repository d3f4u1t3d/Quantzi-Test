import axios from "axios";

export const authenticateUser = async (username, password) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/authentication/token/new",
      {
        params: { api_key: "dac277d665159f4733492ddc86bbc1e3" },
      }
    );

    const request_token = response.data.request_token;

    await axios
      .get(
        "https://api.themoviedb.org/3/authentication/token/validate_with_login",
        {
          params: {
            api_key: "dac277d665159f4733492ddc86bbc1e3",
            request_token: request_token,
            username: username,
            password: password,
          },
        }
      )
      .catch((err) => {
        return "error";
      });

    const response2 = await axios.get(
      "https://api.themoviedb.org/3/authentication/session/new",
      {
        params: {
          request_token: request_token,
          api_key: "dac277d665159f4733492ddc86bbc1e3",
        },
      }
    );

    const session_id = response2.data.session_id;
    return session_id;
  } catch (error) {
    return "error";
  }
};
