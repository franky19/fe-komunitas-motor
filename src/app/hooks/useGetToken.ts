import { cookies } from "next/headers";

const UseGetToken = (tokenNamestring: string) => {
  const cookieStore = cookies();
  const token = cookieStore.get(tokenNamestring)?.value;
  return token;
};

export default UseGetToken;
