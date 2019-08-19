(async () => {
  console.log("running integration tests...")
  await new Promise(resolve => setTimeout(resolve, 30000));
  console.log("finished integration tests")
})()