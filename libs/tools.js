const Tools = function () {
    Tools.prototype.isNull = function (v) {
        return (typeof v === 'undefined' || v === null);
    };

    return this;
};

module.exports = Tools;