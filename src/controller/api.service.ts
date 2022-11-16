import { Customer, LocalCustomer } from "./interfaces/general";

export class MyApiService {
  constructor(
    private readonly externalCustomerService: any,
    private readonly bookingService: any
  ) {}

  /**
   * We just use the external customer service to get the local customer.
   * @param {string} customerId
   */
  public async getCustomer(customerId: string): Promise<Customer> {
    const externalCustomer =
      this.externalCustomerService.getCustomer(customerId);

    const intermediateCustomer =
      this.bookingService.getCustomer(externalCustomer);
    if (intermediateCustomer) {
      const response = await fetch(intermediateCustomer.url);
      const { customer }: LocalCustomer = await response.json();
      return customer;
    }

    return externalCustomer;
  }
}
