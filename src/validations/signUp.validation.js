export const inLocal = () => {
  const local = window.localStorage;
  if (!local.length) return false;
  return true;
};

export const userValidation = ({ user, error, setError }) => {
  if (!user.length == 0) setError({ message: "Empty input", sta: true });
  if (user.length < 8) {
    setError({
      message: "User must contain 8 characters at least",
      sta: true,
    });
  } else if (typeof user === "number") {
    setError({ message: "The User cannot be a Number", sta: true });
  } else {
    setError({ message: "", sta: false, error: false });
  }
  console.log(error);
  return error;
};

export const passwordValidation = ({ password, error, setError }) => {
  const regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*_:])[a-zA-Z0-9!@#$%^&*_:]{6,16}$/;

  if (!password.length) {
    setError({ message: "Fill The password please", sta: true });
  } else if (!regularExpression.test(password)) {
    setError({
      message:
        "password should contain at least one number and one special character",
      sta: true,
    });
  } else {
    setError({ message: "", sta: false });
  }
  return error;
};

const validation = {
  userValidation,
  inLocal,
  passwordValidation,
};

export default validation;
