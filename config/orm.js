const connection = require('./connection')

const QuestionMarks = (num) => {
  const arr = []
  for (var i = 0; i < num; i++) {
    arr.push('?')
  }
  return arr.toString();
}

const ObjToSql = (ob) => {
  const arr = []

  for (let key in ob) {
    const value = ob[key]

    if (Object.hasOwnProperty.call(ob, key)) {

      if (typeof value === 'string' && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }

      arr.push(key + "=" + value)

    }
  }

  return arr.toString();

}

const orm = {
  all: (tableInput, cb) => {
    const Query = `SELECT * FROM ${tableInput}`
    connection.query(Query, (err, result) => {
      if (err) throw err;
      cb(result)
    })
  },
  create: (table, cols, vals, cb) => {
    const Query =  `INSERT INTO ${table} (${cols.toString()}) VALUES (${QuestionMarks(vals.length)})`;
  
    connection.query(Query, vals, (err, result) => {
      if (err) throw err;
      cb(result);
    })
  },
  update: (table, objColVals, condition, cb) => {
    const Query =  `UPDATE ${table} SET ${ObjToSql(objColVals)} WHERE ${condition}`
    connection.query(Query, (err, result) => {
      if (err) throw err;
      cb(result);
    })
  },
  delete: (table, condition, cb) => {
    const Query =  `DELETE FROM ${table} WHERE ${condition}`
    
    connection.query(Query, (err, result) => {
      if (err) throw err;
      cb(result);
    })

  }

}

module.exports = orm;