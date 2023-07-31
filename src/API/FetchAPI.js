import axios from "axios";

const baseUrl = "https://cart-api.teamrabbil.com/api";

export default async function productList() {
  let res = await axios.get(baseUrl + "/product-list");
  const data = await res.data;

  return data.data;
}
