import { formSchema } from "./validation";

const invalidResult = formSchema.safeParse({
  name: "",
  email: "x",
  age: 10,
});

console.log("Invalid result:");
console.log(invalidResult);

const validResult = formSchema.safeParse({
  name: "Alishba",
  email: "alishba@example.com",
  age: 22,
});

console.log("Valid result:");
console.log(validResult);