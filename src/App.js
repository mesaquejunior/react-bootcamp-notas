import React, { Component } from 'react';
import Calculations from './components/grades/Calculations';
import Grades from './components/grades/Grades';
import css from './components/grades/grades.module.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      modules: [
        {
          id: 1,
          desc: 'Módulo 01 - Fundamentos (0-100)',
          grade: 100,
        },
        {
          id: 2,
          desc: 'Módulo 02 - Angular (0-100)',
          grade: 100,
        },
        {
          id: 3,
          desc: 'Módulo 03 - React (0-100)',
          grade: 100,
        },
        {
          id: 4,
          desc: 'Módulo 04 - Vue (0-100)',
          grade: 100,
        },
        {
          id: 5,
          desc: 'Módulo 05 - Desafio Final (0-100)',
          grade: 100,
        },
      ],
    };
  }

  render() {
    const { modules } = this.state;
    return (
      <div className="container">
        <h1 className={css.title}>
          Controle de Notas do Bootcamp IGTI com React
        </h1>
        <div className="flexBlocks">
          <Grades modules={modules} />
          <Calculations />
        </div>
      </div>
    );
  }
}
