import validation from "../validations/signUp.validation";
export function saveInLocal(user) {
  const db = window.localStorage;
  if (!validation.inLocal()) {
    return db.setItem("User", JSON.stringify(user));
  }
  return;
}
