const redirect = (path, func) => {
  setTimeout(() => {
    func(path);
  }, 1000);
};

export default redirect;
