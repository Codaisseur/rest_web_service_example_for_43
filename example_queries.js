const { treetype, treelocation } = require("./models");

treetype
  .findAll({
    include: [treelocation],
  })
  .then((types) => {
    const plain_types = types.map((t) => t.get({ plain: true }));

    console.log(JSON.stringify(plain_types, null, 2));
  });
