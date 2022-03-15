module.exports.handler = async (event) => {
  console.log(event)
  
  aFunctionThatDoesNotExist()

  return {
    statusCode: 200,
    body: "Hello"
  }
}
