//===============================================
// list - Model

const mongoose = require('mongoose');

//Define bucketlistschema with title, desctiption and category
const BucektlistSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: String,
        required: true,
        enum: ['High', 'Medium', 'Low']
    }
});

const BucketList = module.exports = mongoose.model('BucketList', BucektlistSchema);

//BucketList.find() returns all the lists
module.exports.getAllLists = (callback) => {
    BucketList.find(callback);
}

//newLit.save is used to insert the document to MongoDB
module.exports.addList = (newList, callback) => {
    newList.save(callback);
}

//Here we need to pass an id parameter to BucketList.remove
module.exports.deleteListById = (id, callback) => {
    let query = {_id: id};
    BucketList.remove(query, callback);
}