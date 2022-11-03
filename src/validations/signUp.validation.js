export const inLocal = () => {
  const local = window.localStorage;
  if (!local.length) return false;
  return true;
};

export const userValidation = ({ user, error, setError }) => {
  if (!user.length) setError({ message: "Empty input", sta: false });
  if (user.length < 8) {
    setError({
      message: "User must contain 8 characters at least",
      sta: false,
    });
  } else if (user.length === Number) {
    setError({ message: "The User cannot be a Number", sta: false });
  } else {
    setError({ message: "", sta: true });
  }
  return error;
};

export const passwordValidation = ({ password, error, setError }) => {
  const regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*_:])[a-zA-Z0-9!@#$%^&*_:]{6,16}$/;

  if (!password.length) {
    setError({ message: "Fill The password please", sta: false });
  } else if (!regularExpression.test(password)) {
    setError({
      message:
        "password should contain at least one number and one special character",
      sta: false,
    });
  } else {
    setError({ message: "", sta: true });
  }
  return error;
};

const validation = {
  userValidation,
  inLocal,
  passwordValidation,
};

export default validation;
