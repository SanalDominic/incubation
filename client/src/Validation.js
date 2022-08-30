// export const validEmail = new RegExp(
//   "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
// );
// export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

const loginValidation = (email, password) => {
  const validErrors = {};

  if (!email) {
    validErrors.email = "Email required";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    validErrors.email = "Not a valid email";
  }
  if (!password) {
    validErrors.password = "Password required";
  } else if (!/^[0-9]{3,}$/.test(password)) {
    validErrors.password = "number with min length 4";
  }
  return validErrors;
};

const signupValidation = (name, email, password) => {
  const validErrors = {};

  if (!name) {
    validErrors.name = "Name required";
  }

  if (!email) {
    validErrors.email = "Email required";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    validErrors.email = "Not a valid email";
  }
  if (!password) {
    validErrors.password = "Password required";
  } else if (!/^[0-9]{3,}$/.test(password)) {
    validErrors.password = "number with min length 4";
  }
  return validErrors;
};

export { loginValidation, signupValidation };
