import * as fs from "node:fs";

export async function exportReport(outputPath: string, urls: string[]): Promise<void> {
  const outStream = fs.createWriteStream(outputPath);
  for (const url of urls) {
    const res = await fetch(url);
    const data = await res.text();
    outStream.write(data);
  }
  outStream.end();
}
