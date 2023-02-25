const aws = require("aws-sdk");
const XLSX = require("xlsx");
const s3 = new aws.S3({ apiVersion: "2006-03-01" });
// const MOCK_FILE = XLSX.readFile("./guestList_YeWeon.xlsx");

const upload = async (bucket, key, convertedJson) => {
  const newKey = key.replace(".xlsx", ".json");
  const params = {
    ACL: "public-read",
    Body: convertedJson,
    ContentType: "application/json",
    Bucket: bucket,
    Key: newKey,
  };
  return await new Promise((resolve, reject) => {
    s3.putObject(params, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const getFile = async (bucket, key) => {
  // const s3Object = await s3.getObject({ Bucket: bucket, Key: key }).promise();
  const s3Object = await s3.getObject({ Bucket: bucket, Key: key }).promise();
  const file = XLSX.read(s3Object.Body, { type: "buffer" });

  return file;
};

const convert = (file) => {
  const rowObject = XLSX.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]);
  const convertedJson = JSON.stringify(rowObject);
  return convertedJson;
};

exports.handler = async (event, context) => {
  const bucket = event.Records[0].s3.bucket.name;

  const key = event.Records[0].s3.object.key;

  console.log(`#### BUCKET : ${bucket}`);
  console.log(`#### KEY : ${key}`);

  try {
    const file = await getFile(bucket, key);
    // const file = MOCK_FILE;

    console.log(`#### FILE : ${file}`);
    const convertedJson = convert(file);
    // console.log(convertedJson);
    // const convertedJson = convert(mockFile);
    return await upload(bucket, key, convertedJson);
    // return `aaang`;
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: error.message };
  }
};

exports.handler;
