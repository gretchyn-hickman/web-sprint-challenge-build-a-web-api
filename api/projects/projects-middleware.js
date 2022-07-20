const ProjMod = require('./projects-model')
module.exports = {
    validateProj(req, res, next) {
        const {name, description, completed} = req.body;
        if(!(name) || !(description)) return next({message: "missing required field(s)", status: 400});
        req.body = {name: name.trim(), description: description.trim(), completed: completed === undefined ? null : completed};
        next()
    },

    async validatePjId(req, res, next) {
        const { id } = req.params;
        let proj = await ProjMod.get(id);
        if(!proj) return next({status: 404, message: "no project with that id"});
        next()
    },
    validateCompleted(req, res, next) {
        const {completed} = req.body;
        if(completed === null) return next({status: 400, message: "invalid completed info"});
        next()
    }

}