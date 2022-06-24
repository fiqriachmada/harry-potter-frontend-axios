import * as yup from "yup";

export const bookSchema = yup.object().shape({
  title: yup.string().required("Title Required").min(6, "At least 6 char"),
  description: yup
    .string()
    .required("Description Required")
    .min(10, "At least 10 char"),
  language: yup.string().required("Language Required").min(4),
  publisher: yup.string().required("Publisher Required").min(5),
  pages: yup.number().required("Page Required").min(1),
  year: yup.number().required("Year Required").min(4),
  stock: yup.number().required("Stock Required").min(0),
  price: yup.number().required("Price Required").min(0),
  purchaseAmount: yup.number().required("Price Required").min(0),
});

export const memberSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name Required")
    .min(3, "At least 6 char"),
  lastName: yup.string().optional("Last Name is opsinal"),
  username: yup
    .string()
    .required("Username Required")
    .min(1, "At least 1 char"),
  email: yup.string().required("Email Required").min(5, "At least 5 char"),
  password: yup
    .string()
    .required("Password Required")
    .min(8, "At least 8 char"),
  status: yup.boolean(),
});
