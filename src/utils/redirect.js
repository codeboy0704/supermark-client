const redirect = (path, func) => {
  setTimeout(() => {
    func(path);
  }, 700);
};

export default redirect;
