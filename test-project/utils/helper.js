export function formatUser(user) {
  return {
    ...user,
    isAdult: user.age >= 18,
  };
}