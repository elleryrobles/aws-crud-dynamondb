const AWS = require('aws-sdk');

module.exports.updateEmployee = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const data =  JSON.parse(event.body);
  const timestamp = new Date().getTime();

  // Creamos los parametros
  const params = {
    TableName: "EmployeeTable",
    Key: { id: data.id },
    ExpressionAttributeValues: {
      ':nombre': data.nombre,
      ':edad': data.edad,
      ':cargo': data.cargo,
      ':updatedAt': timestamp,
    },
    UpdateExpression: 'SET nombre = :nombre, edad = :edad, cargo = :cargo, updatedAt = :updatedAt',
    ReturnValues: "ALL_NEW"
  };

  // Escribimos en la base de datos
  await dynamoDb.update(params).promise();

  // Se retorna objeto response
  return {
    status: 200,
    message: "Registro actualizado exitosamente!"
  };
}