# array operation add and remove    

- $pull (remove value)
- $each 
- $push 
- $pop (1,-1) (for removing the value from front or back)
- $slice
- $addToSet

db.posts.insertMany([
    {
    "title":"Masai 101",
    "author_id":"1",
    "author":"anish",
    "comments":[
        {
            "body":"Hello",
            "author":"sid",
            "author_id":"2"
        }
    ],
    "tags":["101","programming"],
    
},
{
    "title":"Masai 101",
    "author_id":"3",
    "comments":[
        {
            "body":"Hello",
            "author":"sid",
            "author_id":"2"
        }
    ],
    "tags":["101"]
    
}
])

# problem sort without adding or removing element 

# Aggregation
- example -
db.users.aggregate([
{//1},
{//2},          (array of stages)
{//3},
{//4},
...
])

<----match---->
db.users.aggregate([{$match},])