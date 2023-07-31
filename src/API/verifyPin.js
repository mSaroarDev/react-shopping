export default async function verigyPin(email, otp) {
  let res = await fetch("https://cart-api.teamrabbil.com/api/verify-login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      UserEmail: email,
      OTP: otp,
    }),
  });

  const data = await res.json();
  return data;
}
