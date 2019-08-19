(async () => {
  console.log("running unit tests...")
  await new Promise(resolve => setTimeout(resolve, 10000));
  console.log("finished unit tests")
})()