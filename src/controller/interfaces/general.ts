export type Customer = {
  phone: string;
  customerId: string;
  name: string;
  email: string;
};

export type LocalCustomer = {
  order: string;
  createdAt: string;
  customer: Customer;
};
