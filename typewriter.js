const sentence = "hello from the other side";
let timer = 500;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer = timer + 500;
};
setTimeout(() => {
      process.stdout.write('\n');
}, 14000);