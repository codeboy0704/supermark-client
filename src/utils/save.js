import validation from "../validations/signUp.validation";
export function saveInLocal(user) {
  const local = window.localStorage;
  if (!validation.inLocal()) {
    return local.setItem("User", JSON.stringify(user));
  }
  return;
}
