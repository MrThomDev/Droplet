const bucketsModel = require("./buckets.model");

module.exports = {
  async buckets(req, res) {
    const buckets = await bucketsModel.getAll();
    res.send(buckets);
  },

  async bucket(req, res) {
    const id = parseInt(req.params.id);
    const bucket = await bucketsModel.getById(id);
    res.send(bucket);
  },

  async userBuckets(req, res) {
    const id = parseInt(req.params.id);
    const buckets = await bucketsModel.getAllUserBuckets(id);
    res.send(buckets);
  },

  async save(req, res) {
    const { id, userId, bucketName, bucketDescription } = req.body;

    const bucketObj = {
      userId: userId,
      bucketName: bucketName,
      bucketDescription: bucketDescription,
    };

    id
      ? await bucketsModel.update(id, bucketObj)
      : await bucketsModel.create(bucketObj);

    const savedBucket = await bucketsModel.getByBucketName(bucketName);

    res.send(savedBucket);
  },
};
