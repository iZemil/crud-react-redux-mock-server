import React from 'react';

const About = () => (
  <div>
    <h2>About</h2>
    <ul>
      <li>React + Redux</li>
      <li>мок-сервер json-server</li>
    </ul>
    <p><code>$ yarn server</code></p>
    <p><code>$ yarn start</code></p>
    <h3>Модели</h3>
    <ul>
      <li>Department
        <ul>
          <li>name: string</li>
        </ul>
      </li>
      <li>Employee
        <ul>
          <li>firstName: string</li>
          <li>lastName: string</li>
          <li>departmentId: number</li>
        </ul>
      </li>
    </ul>
    <h3>Интерфейс (Левое меню)</h3>
    <ul>
      <li>Departments</li>
      <li>Employees</li>
    </ul>
    <h3>Контент</h3>
    <ul>
      <li>Таблица редактирования выбранной сущности</li>
    </ul>
  </div>
);

export default About;