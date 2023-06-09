const AWS = require('aws-sdk');

module.exports.getEmployee = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const { id } =  event.pathParameters;

  // Creamos los parametros
  const params = {
    TableName: "EmployeeTable",
    Key: {id: id},
  };

  // Escribimos en la base de datos
  const result = await dynamoDb.get(params).promise();

  // Se retorna objeto response
  return {
    status: 200,
    body: result && result.Item,
  };
}