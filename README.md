# aws-crud-dynamondb

# El aplicativo es un backend api http en donde podemos conseguir servicios de:
# 
# - Get
# - List
# - Add
# - Update
# - Delete
# 
# Esto implementado en AWS con apoyo del framework Serverless y en la # persistencia se implemetó dynamoDB creando una tabla llamada EmployeeTable el # cual contiene los campos:
# 
# - Id
# - Nombre
# - Edad
# - Cargo
# - CreatedAt
# - UpdateAt
# 
# Estos 2 ultimos con el fin de conocer el momento en el que registro fue creado y actualizado

# Endpoints

# Obtiene un listado con todos los empleados
# Metodo: Get
# https://dsl15k9vl0.execute-api.us-west-2.amazonaws.com/list

# Crea un empleado
# https://dsl15k9vl0.execute-api.us-west-2.amazonaws.com/create
# Metodo: Post
# Request
# {
#    "identificacion": "84450851",
#    "edad": "35",
#    "nombre": "Sandra Sarmientos",
#    "cargo": "Developer Senior"
# }

# Obtiene un empleado dado su ID
# Metodo: Get
# Request
# https://dsl15k9vl0.execute-api.us-west-2.amazonaws.com/464311bd-1b96-4bb7-8d5f-94d340436f1b

# Actualiza la edad de un empleado dado su ID
# https://dsl15k9vl0.execute-api.us-west-2.amazonaws.com/update
# Metodo: Post
# Request
# {
#    "id": "464311bd-1b96-4bb7-8d5f-94d340436f1b",
#    "edad": "22"
# }


# Elimina un empleado dado su ID
# https://dsl15k9vl0.execute-api.us-west-2.amazonaws.com/464311bd-1b96-4bb7-8d5f-94d340436f1b
# Metodo: Delete