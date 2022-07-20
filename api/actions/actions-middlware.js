// add middlewares here related to actions
// add middlewares here related to actions
const actMod = require('./actions-model')
module.exports = {
    async validateActId(req, res, next) {
        const {id} = req.params;
        let act = await actMod.get(id);
        if(!act) return next({status: 404, message: "no action with that id!"})
        next()
    },
    validateAction(req, res, next) {
        const { description, notes, project_id, completed } = req.body;
        if(!(description) || description.trim() === '' || !(notes) || notes.trim() === '' || !project_id) return next({status: 400, message: "invalid"})
        req.body = {...req.body, project_id, completed: completed === undefined ? null : completed};
        next()
    }
}