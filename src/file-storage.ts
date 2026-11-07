import * as fs from "node:fs/promises";
import * as path from "node:path";

const STORAGE_DIR = "/var/data/uploads";

export async function readUserFile(fileName: string): Promise<string> {
  // Unsanitized path joining allows traversing directory boundaries using ../
  const targetPath = path.join(STORAGE_DIR, fileName);
  return fs.readFile(targetPath, "utf-8");
}
