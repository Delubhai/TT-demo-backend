module.exports = {
    GetEpoach: function () {
        const date = Math.floor(Date.now() / 1000);
        return date;
    },

    ListAllData: function (tableName, query) {
        return new Promise((resolve, reject) => {
            tableName.find(query, (err, result) => {
                if (err) {
                    reject({ status: 0, data: err, length: 0 })
                } else {
                    resolve({ status: 1, data: result, length: result.length })
                }
            }).sort({ createdAt: -1 });
        })

    }
}