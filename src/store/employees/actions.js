let nextId = 1;

export const fetchEmployees = (data) => {
  nextId = data.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1;

  return {
    type: "FETCH_EMPLOYEES",
    data
  }
};

export const addEmployee = (fName, lName, depNo) => {

  let employee = {
    first_name: fName,
    last_name: lName,
    department_no: depNo,
    id: nextId++
  }

  addDB(employee);

  function addDB(data) {
    return fetch('http://localhost:3010/employees', {
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

  return {
    type: "ADD_EMPLOYEE",
    employee
  }
}

export const updateEmployee = (id, newFName, newLName, newDepNo) => {
  editDB(id, newFName, newLName, newDepNo)

  function editDB(id, newFName, newLName, newDep) {
    let data = {
      first_name: newFName,
      last_name: newLName,
      department_no: newDepNo
    };

    return fetch(`http://localhost:3010/employees/${id}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res)
      .then(()=> console.log(`updated!!!`))
  }
  return {
    type: "EDIT_EMPLOYEE",
    id,
    first_name: newFName,
    last_name: newLName,
    department_no: newDepNo
  }
}

export const removeEmployee = (id) => {
  remove(id);
  function remove(id) {
    return fetch(`http://localhost:3010/employees/${id}`, {
      method: 'delete'
    })
      .then(res => res)
      .then(()=> console.log(`remove dep #${id}`))
  }

  return {
    type: "REMOVE_EMPLOYEE",
    id
  }
};


