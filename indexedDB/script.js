const request = indexedDB.open("toDoList", 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;

  const toDoListStore = db.createObjectStore("toDoList", { keyPath: "listID" });

  toDoListStore.createIndex("statusIndex", "status");
};

request.onsuccess = () => {
  console.log("indexeddb created");
  console.log(request.result);

  const db = request.result;
  const transaction = db.transaction(["toDoList"], "readwrite");
  const toDoListStore = transaction.objectStore("toDoList");
  const statusIndex = toDoListStore.index("statusIndex");
  const titleIndex = toDoListStore.index("titleIndex");

  toDoListStore.add({
    listID: "1",
    name: " ",
    value: " ",
    date: " ",
  });
  ({
    listID: "2",
    name: " ",
    value: " ",
    date: " ",
  });
  ({
    listID: "3",
    name: " ",
    value: " ",
    date: " ",
  });
  ({
    listID: "4",
    name: " ",
    value: " ",
    date: " ",
  });

  // return an item by keypath
  const getRequest = transactions.get(" ");
  getRequest.onsuccess = () => {
    console.log(getRequest.result);
  };

  // return an item by index
  const getRequestIdx = statusIndex.getAll(" ");
  getRequestIdx.onsuccess = () => {
    console.log(getRequestIdx.result);
  };

  // return an item by title
  const getTitleIdx = titleIndex.getAll(" ");
  getTitleIdx.onsuccess = () => {
    console.log(getTitleIdx.result);
  };

  const getCursorRequest = toDoListStore.openCursor();
  getCursorRequest.onsuccess = (event) => {
    const cursor = event.target.cursor;

    if (cursor) {
      if (cursor.value.status === "backlog") {
        const todoItem = cursor.value;
        todoItem.status = "test";
        cursor.update(todoItem);
      }
      cursor.continue();
    }
  };
};
