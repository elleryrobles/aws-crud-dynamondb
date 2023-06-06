const AWS = require('aws-sdk');

module.exports.updateEmployee = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const { id, nombre, cargo, edad } =  JSON.parse(event.body);
  const timestamp = new Date().getTime();


  // Creamos los parametros
  const params = {
    TableName: "EmployeeTable",
    Key: { id },
    UpdateExpression: 'set edad = :edad',
    ExpressionAttributeValues: {
      ':edad': edad
    },
    ReturnValues: "ALL_NEW"
  };

  // Escribimos en la base de datos
  await dynamoDb.update(params).promise();

  // Se retorna objeto response
  return {
    status: 200,
    body: JSON.stringify({message: "Registro actualizado exitosamente!"}),
  };
}