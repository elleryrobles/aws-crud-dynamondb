const uuid = require('uuid');
const AWS = require('aws-sdk');

module.exports.addEmployee = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const data = JSON.parse(event.body);
  const timestamp = new Date().getTime();

  // Asignamos valores de la petición
  const newEmployee = {
    id: uuid.v4(),
    identificacion: data.identificacion,
    edad: data.edad,
    nombre: data.nombre,
    cargo: data.cargo,
    createdAt: timestamp,
    updatedAt: timestamp
  };

  // Creamos los parametros
  const params = {
    TableName: "EmployeeTable",
    Item: newEmployee,
  };

  // Escribimos en la base de datos
  await dynamoDb.put(params).promise();

  // Se retorna objeto response
  return {
    status: 200,
    body: newEmployee,
  };
}
