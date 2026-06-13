import { formatUser } from "../utils/helper.js";

export function fetchUserData() {
  const rawUser = {
    name: "Kundan",
    age: 20,
  };

  return formatUser(rawUser);
}