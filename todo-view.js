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

import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';



import './todo-list.js'
import './todo-header.js'

/**
 * A Todo View Wrapper 
 *
 */
export class TodoView extends LitElement {
/**
 * styles for the custom component 
 */
  static get styles(){
    return css`
    #todoForm {
      display: flex;
      align-items:center;
      flex-grow:1;

    }
    `
  }
  /**
   * defines properties
   * todos -- array of todos
   * task -- each todo item
   */
  static get properties(){
    return {
      todos: {type: Array},
      task: {type: String},

    }
  }
  /**
   * initializes the properties
   */
  constructor(){
    super();
    this.todos = []
    this.task = ''
    this._removeTodo = this._removeTodo.bind(this)
  }
  /**
   * renders a html template 
   * @returns {html}
   */
  render(){
    return html`
    <todo-header></todo-header>

    <div id="todoForm">
      <iron-icon icon="create"></iron-icon>
      <paper-input @input="${this._handleInputChange}" label="Task to be done" value="${this.task}"></paper-input>
    </div>

    <paper-button @click="${this._addTodo}" raised class="indigo">Add Task</paper-button>
    <todo-list .todos="${this.todos}" ._removeTodo="${this._removeTodo}"></todo-list>

    `
  }
  /**
   * binds the value of task to the input field value
   * @param {Object} e 
   */
  _handleInputChange(e){
    this.task = e.target.value;
  }
  /**
   * makes a new todos array out of old one adding the new one 
   * sets the task to empty again
   */
  _addTodo(){
    this.todos = [...this.todos, this.task]
    this.task = ''
  }
  /**
   * removes todo from the todos array without mutating 
   * @param {Object} e 
   */
  _removeTodo(e){
    this.todos = this.todos.filter((todo ,index) => index != e.target.id )
  }
}
 
window.customElements.define('todo-view', TodoView);
