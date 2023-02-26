// Middleware Entry point
const ExpressS3Manager = require('./libs/express-s3-manager');

const ExpressS3ManagerFactory = function (options) {
    const isNull = function (v) {
        return (typeof v === 'undefined' || v === null);
    };

    //Constructor
    if (isNull(this.expressS3Manager)) {
        this.expressS3Manager = new ExpressS3Manager(options);
    }
    return this.expressS3Manager;
};

module.exports = ExpressS3ManagerFactory;