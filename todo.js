
module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function (req, res) {
        // use mongoose to get all todos in the database
       var data={
			"id":1,
			"nome":"pippo"
		}

		res.json(data);
    });

};
