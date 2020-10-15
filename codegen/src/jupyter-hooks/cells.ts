import { ICellModel } from '@jupyterlab/cells';

export default class CellAPI {
  model: ICellModel;

  constructor(model: ICellModel) {
    this.model = model;
  }

  get text() {
    return this.model.value.text;
  }

  get type() {
    return this.model.type;
  }
}
