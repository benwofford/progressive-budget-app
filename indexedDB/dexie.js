const db = new Dexie("budgetTracker-Dexie");

db.version(1).stores({
  transactions: "name, value, date",
});

db.transactions
  .bulkPut([
    {
      listID: "1",
      name: " ",
      value: " ",
      date: " ",
    },
    {
      listID: "2",
      name: " ",
      value: " ",
      date: " ",
    },
    {
      listID: "3",
      name: " ",
      value: " ",
      date: " ",
    },
    {
      listID: "4",
      name: " ",
      value: " ",
      date: " ",
    },
  ])
  .then((items) => {});
