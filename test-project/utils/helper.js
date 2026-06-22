import { fetchUserData } from "../services/userService.js";

export function formatUser(user) {
  return {
    ...user,
    isAdult: user.age >= 18,
  };
}