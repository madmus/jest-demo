import { LocalCustomer } from "../interfaces/general";
import { customerMock } from "./customer.mock";

export const localCustomerMock: LocalCustomer = {
  order: "123",
  createdAt: "2020-01-01",
  customer: customerMock, // <-- This is the same as the customerMock above.
};
