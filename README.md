# Express S3 Manager
## Quick Guide
This is a 3rd-party Express middleware to help you with uploading / downloading files to / from an Amazon S3 bucket. To setup, follow the steps below:

1. Include the framework in your project: `npm install --save express-s3-manager`

2. Using Hello World as example:
    ```
    const port = 3000;
    const express = require('express');

    // Include Express S3 Manager
    const ExpressS3Manager = require('express-s3-manager');

    const app = express();
    // Include Express S3 Manager as a middleware for all routes starting with "/s3"
    // This example uses process.env as the options.
    // Refer to Options section for the settings that needs to be included.

    //Upload Files
    app.post('/s3/upload', ExpressS3Manager(process.env).uploader(), function(req,res) {
        //Return the s3 metadata that was replied upon uploading of the file.
        res.send(req.s3metadata);
    });
    
    //Download Files
    app.get('/s3/download/:key', ExpressS3Manager(process.env).downloader(), function(req,res) {
        // Return the s3 file that was retrieved from S3 bucket
        // Set the content type header based on the file extension
        res.setHeader('Content-Type', req.contentType);
        // Pipe the file stream to the response object
        req.stream.pipe(res);
    });

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
    ```
## Environment Variables
The following environment variables should be set in your project for this middleware to work properly. See [Amazon Documentation - Environment Configuration](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html) for more details.
| Environment Variable  | Description | 
| ------------- | ------------- |
| AWS_ACCESS_KEY_ID  | AWS API Access Key  |
| AWS_SECRET_ACCESS_KEY  | AWS API Secret  |
| AWS_DEFAULT_REGION  | AWS Default Region  |


## Options
| Variable name  | Description | Required |
| ------------- | ------------- | ------------- |
| bucket  | S3 Bucket Name  | No |

## License
Copyright 2023 XIAOLINTANGYUAN

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.