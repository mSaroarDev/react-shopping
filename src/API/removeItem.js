export default async function removeItem(productId) {
  const res = await fetch(
    `https://cart-api.teamrabbil.com/api/remove-cart/${productId}`,
    {
      method: "GET",
      headers: {
        token: localStorage.getItem("token"),
      },
    }
  );

  const data = res.json();

  return data;
}
