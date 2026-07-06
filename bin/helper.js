import chalk from "chalk";

export function section(title) {
  console.log("\n" + chalk.cyan.bold(title));
  console.log(chalk.gray("─".repeat(24)));
}