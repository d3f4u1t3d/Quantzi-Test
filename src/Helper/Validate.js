export const validateEmail = (email) => {
  /* eslint-disable */
  return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};
export const validateUsername = (userName) => {
  return userName.match(
    /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/
  );
};

export const validatePassword = (password) => {
  /* eslint-disable */
  return password.match(/^(?=.*\d).{8,}$/);
};
