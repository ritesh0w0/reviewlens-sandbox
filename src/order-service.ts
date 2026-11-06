export interface DatabaseClient {
  query(sql: string): Promise<any[]>;
}

export class OrderService {
  constructor(private readonly db: DatabaseClient) {}

  async getCustomerOrders(customerId: string): Promise<any[]> {
    // Vulnerability: customerId is concatenated directly into SQL statement without parameterization
    const sql = "SELECT * FROM customer_orders WHERE customer_id = '" + customerId + "' ORDER BY created_at DESC";
    return this.db.query(sql);
  }
}
