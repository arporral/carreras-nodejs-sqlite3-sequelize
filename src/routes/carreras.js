module.exports = app => {

    const Carreras = app.db.models.Carreras;

    app.route('/carreras')
        .get((req, res) => {
            Carreras.findAll({})
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            })
        })
        .post((req, res) => {
            Carreras.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});            
            })
        });

    app.route('/carreras/:num_sec')
        .get((req, res) => {
            Carreras.findOne({where: req.params})
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            })
        })
        .put((req, res) => {
            Carreras.update(req.body, {where: req.params})
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({msg: error.message});            
            })
        })
        .delete((req, res) => {
            Carreras.destroy({where: req.params})
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({msg: error.message});            
            })
        })
}