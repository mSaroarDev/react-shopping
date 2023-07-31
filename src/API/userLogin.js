const baseUrl = "https://cart-api.teamrabbil.com/api";

export default async function userLogin(email) {
  let res = await fetch("https://cart-api.teamrabbil.com/api/user-login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      UserEmail: email,
    }),
  });

  const data = await res.json();
  return data;
}
