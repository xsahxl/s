async function say(message: string) {
  return 'Hello, ' + message;
}

(async () => {
  const message = 'World';
  const data = await say(message);
  console.log(data);
})();
