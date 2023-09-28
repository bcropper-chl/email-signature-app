// CloudStorage.js (AWS S3)
import StorageInterface from './StorageInterface';
// import S3 from 'aws-sdk/clients/s3';

export default class CloudStorage extends StorageInterface {
  constructor() {
    // this.s3 = new S3(/* config */);
    super()
  }

  async save(key, data) {
    console.log(key + data)
    /*
    return this.s3.putObject({
      Bucket: 'your-bucket',
      Key: key,
      Body: JSON.stringify(data),
    }).promise();
    */
  }

  // ... Implement retrieve, update, and delete
}

