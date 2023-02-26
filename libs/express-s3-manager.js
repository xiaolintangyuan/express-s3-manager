const Uploader = require('./uploader.js');
const Downloader = require('./uploader.js');

const ExpressS3Manager = function (options) {
    this.uploader = new Uploader(options);
    this.downloader = new Downloader(options);

    ExpressS3Manager.prototype.uploader = function () {
        return this.uploader;
    };

    ExpressS3Manager.prototype.downloader = function () {
        return this.downloader;
    };

    return this;
};