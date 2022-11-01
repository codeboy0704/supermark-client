const inLocal = () => {
  const local = window.localStorage;
  if (!local.length) return false;
  return true;
};

const userValidation = ({ user, setError }) => {
  if (!user.length) setError({ message: "Empty input", sta: false });
  if (user.length < 8)
    return setError({
      message: "User must contain 8 characters at least",
      sta: false,
    });
  if (user.length === Number) {
    return setError({ message: "The User cannot be a Number", sta: false });
  }
  return setError({ message: "", sta: true });
};

const passwordValidation = ({ password, setError }) => {
  const regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if (!password.length)
    return setError({ message: "Fill The password please", sta: false });
  if (!regularExpression.test(password)) {
    return setError({
      message:
        "password should contain at least one number and one special character",
      sta: false,
    });
  }
  return setError({ message: "", sta: true });
};

const validation = {
  userValidation,
  inLocal,
  passwordValidation,
};

export default validation;
