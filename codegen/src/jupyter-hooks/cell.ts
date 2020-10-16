import { ICellModel } from '@jupyterlab/cells';

export default class CellAPI {
  model: ICellModel;
  index: number;

  constructor(model: ICellModel, index: number) {
    this.model = model;
    this.index = index;
  }

  setText(text: string) {
    this.model.value.text = text;
  }

  get text() {
    return this.model.value.text;
  }

  get type() {
    return this.model.type;
  }
}
