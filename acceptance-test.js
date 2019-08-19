(async () => {
  console.log("running acceptance tests...")
  await new Promise(resolve => setTimeout(resolve, 25000));
  console.log("finished acceptance tests")
})()