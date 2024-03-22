
export default async function Hash(password: string) {
  const msgUint8 = new TextEncoder().encode(password); // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8); // hash the password
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
  return hashHex;
}
// async function main() {
//   const passwordStore= await digestMessage(text)
//   const passwordInp=await digestMessage(text)
//   console.log(passwordStore)
//   if (passwordInp==passwordStore){
//     console.log("match")
//   }
//   else{
//     console.log("no match")
//   }
// }