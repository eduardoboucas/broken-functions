module.exports.handler = async () => {
  aFunctionThatDoesNotExist()

  return {
    statusCode: 200,
    body: "Hello"
  }
}
