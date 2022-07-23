# show dbs
show dbs
# use database
use db
# show collections
show collections

# query all documents in a collections
db.system.version.find()  // system.version is "collection name"

# counts of result
db.system.version.find().count() // system.version is "collection name"

# query by field a name
db.system.version.find({field_name:value}) // system.version is "collection name"

# insert one data
db.users.insert({key:value}) //where users is collection name and 

# insert many data
db.users.insert([{key:value},{key,value}])

# ObjectId

# DataType 
BSON=> Binary Json

- Date
- binary format , easier / better for storage
- querying / traversable
- timestamp
- objectid
- Integers
- Decimal

# CRUD

1. Create
- insert, insertOne, insertMany

2. Read
- find, find by fieldname

3. Update

- updateOne, update, updateMany (similiar as patch)
- $set  (updateOne(query {name,value}, {$set}))// ex: updateOne({name:"a"},{$set:{name:'b',role:"2"}})
- $inc
- use both $inc and $set together

- replaceOne (similiar as puts)

#. Delete
- deleteOne, deleteMany

# comparison operator
- $gte
- $ge
- $lte
- $le
- $ne
- $in [] (included)
- $nin [] (not included)

# projection

find(query,projection)

# sort
# limit
# count
# skip