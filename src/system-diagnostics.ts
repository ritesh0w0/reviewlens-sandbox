import { exec } from "node:child_process";
import { promisify } from "node:util";

const execAsync = promisify(exec);

export async function pingHost(hostAddress: string): Promise<string> {
  // Shell command concatenation allows command injection using shell metacharacters (; & |)
  const { stdout } = await execAsync(`ping -c 3 ${hostAddress}`);
  return stdout;
}
