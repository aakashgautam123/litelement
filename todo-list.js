/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

 import {LitElement, html, css} from 'lit-element';

 import '@polymer/paper-item/paper-item.js';
 import '@polymer/paper-listbox/paper-listbox.js';

 import './todo-item.js'


 
 /**
  * A Todo List Component which iterates and pass each todo to todo-item 
  *
  */
 export class TodoList extends LitElement {
   /**
    * sets the styles for the custom component
    */
  static get styles() {
    return css`
      div { 
        width:960px;
        margin: 0 auto;
        text-align:center;
       }
    `;
  }
  /**
   * sets the properties for the custom component
   * todos -- array of todo items
   * _removeTodo -- function which removes the todo with the provided id 
   */
   static get properties(){
     return {
       todos: {type: Array},
       _removeTodo : Function
 
     }
   }
   constructor(){
     super();
     this.todos = [];
     this._removeTodo = () => {};
   }
   /**
    * renders the html template for the custom component
    * @returns {html}
    */
   render(){
     return html`
     <div>
     <h1>Todos</h1><paper-listbox>
     ${this.todos.map((todo, index) => html`<todo-item .todo=${todo} .id=${index} ._removeTodo=${this._removeTodo}></todo-item>`)}
     </paper-listbox>
     </div>
     `
   }
 }
 
 window.customElements.define('todo-list', TodoList);
 