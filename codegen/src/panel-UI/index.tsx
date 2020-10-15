import * as React from 'react';
import { NotebookAPI } from '../jupyter-hooks/notebook';

type MyAppUI_Props = { notebook: NotebookAPI };

export default class MyAppUI extends React.Component<MyAppUI_Props> {
  render() {
    return (
      <div>
        <div id="header-icon" />
        {this.showNotebook()}
        <i>analysis demo for great gain</i>
        {this.showSelectedCell()}
      </div>
    );
  }

  showNotebook() {
    if (this.props.notebook) {
      return (
        <div>
          <h4>{this.props.notebook.name}</h4>
        </div>
      );
    }
    return null;
  }

  showSelectedCell() {
    if (this.props.notebook) {
      let cell = this.props.notebook.activeCell;
      return (
        <div>
          <h5>Currently Active Cell is</h5>
          <h6>{`${cell.type}`}</h6>
          <p>{`${cell.text}`}</p>
        </div>
      );
    }
    return null;
  }
}
