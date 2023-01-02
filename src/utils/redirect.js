const redirect = (path, func) => {
  setTimeout(() => {
    func(path);
  }, 600);
};

export default redirect;
