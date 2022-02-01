let db;
// create a new db request for a "training" database.
const request = window.indexedDB.open("training", 1);

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  // create object store called "pending" and set autoIncrement to true
  db.createObjectStore("pending", { keyPath: "id", autoIncrement: true });

};

request.onsuccess = function (event) {
  db = event.target.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  console.log(event)
};

function saveRecord(record) {
  // create a transaction on the pending db with readwrite access
  const transaction = db.transaction(["pending"], "readwrite");

  // access your pending object store
  const objectStore = transaction.objectStore("pending");

  // add record to your store with add method.
  objectStore.add(record);

}

function checkDatabase() {
  const transaction = db.transaction(["pending"]);
  const objectStore = transaction.objectStore("pending");

  // open a transaction on your pending db
  // access your pending object store
    // get all records from store and set to a variable
  const getAll = objectStore.getAll();
   
    getAll.onsuccess = function () {
      if (getAll.result.length > 0) {
        fetch("/api/transaction/bulk", {
          method: "POST",
          body: JSON.stringify(getAll.result),
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
          }
        })
          .then(response => response.json())
          .then(() => {
            // if successful, open a transaction on your pending db
            // access your pending object store
            // clear all items in your store
            const transaction = db.transaction(["pending"], "readwrite");
            const objectStore = transaction.objectStore("pending");

            objectStore.clear();

          });
      }
    };
}

//And a delete?

// listen for app coming back online
window.addEventListener("online", checkDatabase);