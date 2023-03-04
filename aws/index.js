const AWS = require("aws-sdk");
const xlsx = require("xlsx");
const fileToImport = require("./json.json");

exports.handler = async (event, context) => {
  const s3 = new AWS.S3();
  const { bucket, key } = event;

  const params = {
    Bucket: bucket,
    Key: key,
  };

  try {
    // const data = await s3.getObject(params).promise();
    const jsonData = JSON.parse(fileToImport);
    const worksheet = xlsx.utils.json_to_sheet(jsonData);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const buffer = xlsx.write(workbook, { bookType: "xlsx", type: "buffer" });

    const s3Params = {
      Bucket: bucket,
      Key: `${key.split(".")[0]}.xlsx`,
      Body: buffer,
      ContentType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    };

    await s3.putObject(s3Params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `File converted successfully to XLSX format and saved as ${s3Params.Key}`,
      }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "An error occurred while converting the file to XLSX format",
      }),
    };
  }
};
