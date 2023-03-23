const Api = require('../model/api');
const views = require('../view/api');
const List = require('../model/getList');

module.exports = {
    create: async (req, res) => {
        let {sequence, isValid} = req.body;
        let sequenceScheme = new Api({sequence, isValid});
        sequenceScheme.save().then(() => {
            return views.created({isValid}, "Created", res);
        }).catch((e) => views.error(e, 400, "error", res));
    },
    showStats: async (req, res) => {
        try {
            let countValid = await Api.countDocuments({isValid: true});
            let countInvalid = await Api.countDocuments({isValid: false});
            let total = countValid + countInvalid;
            let ratio = total === 0 ? 0 : countValid / total;
            return views.showStats({countValid, countInvalid, ratio}, res);
        } catch (e) { views.error(e, 500, "error", res)}
    },
    getList: async (req, res) => {
        List(Api, req.query).then(({data, total}) =>
            views.showList(data, total, res)
        ).catch((e) => views.error(e, 500, "error", res));
    },
}
