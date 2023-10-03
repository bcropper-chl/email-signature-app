const dbname = 'email-sig-app'
const version = 1
let db = ''
let request = ''
let store = ''
let tx = ''

/**
 * Open DB
 */
function openDB () {
  if (!window.indexedDB) {
    window.alert('Browser not support IndexedDB')
    throw new Error('Browser not support IndexedDB')
  }

  request = window.indexedDB.open(dbname, version)

  request.onupgradeneeded = e => {
    db = e.target.result
    store = db.createObjectStore('store', { keyPath: 'id' })
  }

  request.onerror = e => {
    throw new Error('The database failed to open:' + e)
  }
}

/**
 * Promisify onsuccess handler of indexedDB
 * @param {function} cb - callback Promise.resolve()
 * @returns {Promise} Promise
 */
function onSuccess (cb) {
  return new Promise((resolve, reject) => {
    request.onsuccess = e => {
      db = e.target.result
      tx = db.transaction('store', 'readwrite')
      store = tx.objectStore('store')

      db.onerror = e => {
        reject(new Error(e))
      }

      cb(resolve)

      // eslint-disable-next-line no-unused-vars
      tx.oncomplete = e => db.close()
    }
  })
}

/**
 * Save project
 * @param {object} data - project data
 * @param {boolean} asCurrent - save project as current, set new record in DB
 * with 'currentProject' key
 * @returns {Promise} Promise
 */
export function saveProject (data, asCurrent) {
  openDB()

  return onSuccess(resolve => {
    if (!asCurrent) {
      data = {
        id: new Date().getTime(),
        name: 'Untitled project',
        ...data
      }
    }

    try {
      const save = store.put(data)

      save.onsuccess = e => {
        resolve(e)
      }
    } catch (e) {
      console.log(JSON.stringify(e))
    }
  })
}

/**
 * Update project
 * @param {object} data - project data
 * @returns {Promise} Promise
 */
export function updateProjectById (data) {
  openDB()

  return onSuccess(resolve => {
    console.log(JSON.stringify(data))
    try {
      const save = store.put(data)
      save.onsuccess = e => {
        resolve(e)
      }
      save.onerror = e => {
        console.log(JSON.stringify(e))
      }
    } catch (e) {
      console.log(JSON.stringify(e))
    }
  })
}

/**
 * Get all projects
 * @returns {Promise} Promise array of projects
 */
export function getAllProjects () {
  openDB()

  return onSuccess(resolve => {
    const query = store.getAll()

    query.onsuccess = () => {
      resolve(query.result)
    }
  })
}

export function getProjectById (id) {
  openDB()

  return onSuccess(resolve => {
    const query = store.get(id)

    query.onsuccess = () => {
      resolve(query.result)
    }
  })
}

export function deleteProjectById (id) {
  openDB()

  return onSuccess(resolve => {
    const query = store.delete(id)

    query.onsuccess = () => {
      resolve(query.result)
    }
  })
}
