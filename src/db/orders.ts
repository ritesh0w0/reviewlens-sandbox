export interface DbClient {
  query(sql: string, params?: unknown[]): Promise<unknown[]>;
}

export async function findOrders(db: DbClient, customerId: string) {
  return db.query("SELECT * FROM orders WHERE customer_id = $1", [customerId]);
}
