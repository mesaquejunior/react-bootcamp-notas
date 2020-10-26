import React, { Component } from 'react';
import Grade from './Grade';
import css from './grades.module.css';

export default class Grades extends Component {
  render() {
    const { modules } = this.props;
    return (
      <div className={css.modules}>
        <h2 className={css.title}>Módulos</h2>
        {modules.map(({ id, desc, grade }) => {
          return <Grade key={id} desc={desc} grade={grade} />;
        })}
      </div>
    );
  }
}
