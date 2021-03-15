
import { LitElement, html, css } from 'lit-element';

import '@polymer/paper-item/paper-item.js'
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-icon-button/paper-icon-button.js';

class TodoItem extends LitElement {
/**
 * sets the style for the paper-item 
 */
  static get styles(){
    return css`
      paper-item {
        display: flex;
        justify-content:space-between;
        background: orange;
        color: white;
        margin-bottom: 5px;
      }
    `;
  }
  /**
   * set the properties  for the custom element
   */
  static get properties(){
    return {
      todo : {type: String},
      id : {type: Number},
      _removeTodo : Function
    }
  }
  constructor(){
    super();
    this.todo = ''
    this.index = 0
    this._removeTodo = () => {}
  }
  /**
   * renders the html template for the custom element 
   * @returns {html}
   */
  render(){
    return html`
    <paper-item><p>${this.todo}</p><paper-icon-button icon="delete" id="${this.id}" @click="${this._removeTodo}">X</paper-icon-button></paper-item>
    `
  }
}
customElements.define('todo-item', TodoItem)