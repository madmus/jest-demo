import { Request, Response } from "express";
import { MyApiService } from "./api.service";

export class MyApiController {
  constructor(
    private readonly myApiService: MyApiService,
    private readonly externalCustomerService: any
  ) {}

  /**
   * Get the customer from the external service.
   * @param {Request} req
   * @param {Response} res
   */
  public async getRemoteCustomer(req: Request, res: Response): Promise<void> {
    const { customerId } = req.params;
    const customer = await this.externalCustomerService.getCustomer(customerId);
    res.status(200).json(customer);
  }

  /**
   * Get the customer from the local service.
   * @param {Request} req
   * @param {Response} res
   */
  public async getLocalCustomer(req: Request, res: Response): Promise<void> {
    const { customerId } = req.params;
    const customer = await this.myApiService.getCustomer("C" + customerId);
    res.status(200).json(customer);
  }
}
