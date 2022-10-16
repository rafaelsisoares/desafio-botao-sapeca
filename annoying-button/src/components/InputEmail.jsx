import React, { Component } from "react";

class InputEmail extends Component {
  render() {
    return (
      <div className="input-container">
        <h1>Digite seu e-mail</h1>
        <form>
          <label htmlFor="email">
            E-mail:
            {' '}
            <input type="email" id="email" />
            <br />
            <button type="button" className="btn-escape">Salvar</button>
          </label>
        </form>
      </div>
    );
  }
}

export default InputEmail;
