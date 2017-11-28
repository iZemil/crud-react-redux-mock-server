// DEPARTMENTS
let nextId = 0;

export const fetchDepartments = (data) => {
  nextId = data.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1;
  console.log(data);

  return {
    type: "FETCH_DEPARTMENTS",
    data
  }
};

export const addDepartment = (name) => {

  let department = {
    name,
    id: nextId++
  }

  addDB(department);

  function addDB(data) {
    return fetch('http://localhost:3010/departments', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(checkStatus)
      .then(()=> console.log(`added new dep - ${data.name}`))
  }
  
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }
  
  // fetch(request)
  // .then(res => res.json())
  // .then(data => {
  //   putDep(data);
  // })
  // .catch((error) => console.log(`Ошибка ${error}`))

  return {
    type: "ADD_DEPARTMENT",
    department
  }
}

export const editDepartment = (id, newName) => {
  editDB(id, newName)

  function editDB(id, newName) {
    let data = {name: newName};

    return fetch(`http://localhost:3010/departments/${id}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res)
      .then(()=> console.log(`edited #${id} on ${newName}`))
  }
  return {
    type: "EDIT_DEPARTMENT",
    id,
    newName
  }
}

export const removeDepartment = (id) => {
  remove(id);
  function remove(id) {
    return fetch(`http://localhost:3010/departments/${id}`, {
      method: 'delete'
    })
      .then(res => res)
      .then(()=> console.log(`remove dep #${id}`))
  }

  return {
    type: "REMOVE_DEPARTMENT",
    id
  }
};

// EMPLOYEES


