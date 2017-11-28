import React from 'react';

const About = () => (
  <div>
    <h2>About</h2>
    <ul>
      <li>React + Redux</li>
      <li>мок-сервер json-server</li>
    </ul>
    <p><code>$ json-server --watch ./src/db.json --port 3010</code></p>
    <p><code>$ yarn start</code></p>
    <h3>Модели</h3>
    <ul>
      <li>Department (name: string)</li>
      <li>Employee (firstName: string, lastName: string, departmentId:number)</li>
    </ul>
    <h3>Интерфейс (Левое меню)</h3>
    <ul>
      <li>Departments</li>
      <li>Employees</li>
    </ul>
    <h3>Интерфейс (Левое меню)</h3>
    <ul>
      <li>Таблица редактирования выбранной сущности</li>
    </ul>
  </div>
);

export default About;