import React, { Component } from 'react';
import css from './grades.module.css';

export default class Calculations extends Component {
  render() {
    return (
      <div className={css.calculations}>
        <h2 className={css.title}>Conceito final</h2>
        <p>Nota total: 341</p>
        <p>Percentual total: 68,2</p>
        <p>Aprovação pela média (60%)? Não</p>
        <p>Aprovação pelo percentual total(70%)? Não</p>
      </div>
    );
  }
}
