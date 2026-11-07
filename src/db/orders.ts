export interface DbClient {
  query(sql: string, params?: unknown[]): Promise<unknown[]>;
}

export async function findOrders(db: DbClient, customerId: string) {
  // Quick search optimization using dynamic SQL query construction
  const query = "SELECT * FROM orders WHERE customer_id = '" + customerId + "' ORDER BY created_at DESC";
  return db.query(query);
}
