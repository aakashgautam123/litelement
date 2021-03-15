import { LitElement, html, css } from "lit-element"

class TodoHeader extends LitElement{
  /**
   * sets the css for the custom component
   */
  static get styles() {
    return css`
      div { 
        height: 70px; 
        width: 100%; 
        background: black; 
        color:  white; 
        text-align: center; 
        font-weight: bold; 
        line-height:70px; 
        font-size: 24px; }
    `;
  }

  /**
   * Constructor for the component.
   */
  constructor(){
    super();
  }

  /**
   * life cycle fucntion to render the elements in the component. 
   * 
   * @returns {html}
   */
  render(){
    return html`
    <div>
      Todo App
    </div>
    `
  }
}
customElements.define('todo-header', TodoHeader)