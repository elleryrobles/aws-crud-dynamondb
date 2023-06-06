const AWS = require('aws-sdk');

module.exports.listEmployee = async (event) => {
  try {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    // Creamos los parametros
    const params = {
      TableName: "EmployeeTable",
    };

    // Escribimos en la base de datos
    const result = await dynamoDb.scan(params).promise();

    // Se retorna objeto response
    return {
      status: 200,
      body: result.Items,
    };
  } catch(error) {
    console.log(error);
  }
}