const database = require("./database.service");

function viewEvent() {
  return new Promise((resolve, reject) => {
    try {
      database.query("SELECT * FROM events", (err, results) => {
        if (err) reject(err);
        if (results) {
          let successObj = {
            status: "success",
            length: results?.length,
            responseData: results,
          };
          resolve(successObj);
        }
      });
    } catch (err) {
      reject(err);
    }
  });
}

// const createEvent = async (req) => {
//   const { event_name, event_desc, event_date } = req.body;
//   const result = await database.query(
//     "INSERT INTO events(event_name,event_desc,event_date) VALUES (`${event_name},${event_desc},${event_date}`)",
//     (err, rows, fields) => {
//       if (err) throw new Error("Something went wrong");
//       console.log("Record Created");
//     }
//   );
// };

const createEvent = (req) => {
  return new Promise((resolve, reject) => {
    try {
      const sql =
        "INSERT INTO events (event_name,event_desc,event_date) VALUES (?,?,?)";
      const eventDetails = req.body;
      const values = Object.values(eventDetails);
      database
        .query(sql, values)
        .then((results) => {
          let successObj = {
            status: 200,
            message: "success",
            responseData: results.values,
          };
          resolve(successObj);
        })
        .catch((err) => {
          if (err) reject(err);
        });
    } catch (err) {
      console.log("resposneERROR--", err);
      reject(err);
    }
    // try {
    //   database.query(sql, values, (err, results) => {
    //     if (err) reject(err);
    //     if (results) {
    //       let successObj = {
    //         status: 200,
    //         responseData: "record created successfully",
    //       };
    //       resolve(successObj);
    //     }
    //   });
    // } catch (errr) {
    //   console.log("catch errrrrrrrr=>", errr);
    // }
  });
};

const updateEvent = async () => {
  const result = database.query();
};

const removeEvent = async () => {
  const result = database.query();
};

module.exports = {
  viewEvent,
  createEvent,
  updateEvent,
  removeEvent,
};
