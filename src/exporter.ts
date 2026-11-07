import * as fs from "node:fs";

export async function exportReport(outputPath: string): Promise<void> {
  const stream = fs.createWriteStream(outputPath);
  stream.write("report header\n");
  stream.end();
}
