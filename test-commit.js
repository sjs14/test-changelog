import shell from "shelljs";

let res = shell.exec("git status", { silent: true });
console.log(`🚀  res:\n`, res.toString());

res = shell.exec("git status -s -v", { silent: true });
console.log(`🚀  res:\n`, res.toString());
