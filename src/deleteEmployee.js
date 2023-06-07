const AWS = require('aws-sdk');

module.exports.deleteEmployee = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const { id } =  event.pathParameters;

  // Creamos los parametros
  const params = {
    TableName: "EmployeeTable",
    Key: {id: id},
  };

  // Escribimos en la base de datos
  await dynamoDb.delete(params).promise();

  // Se retorna objeto response
  return {
    status: 200,
    message: "Registro eliminado exitosamente!"
  };
}