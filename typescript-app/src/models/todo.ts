export default class Todo {
  id: number;
  text: string;

  constructor(text: string) {
    this.id = Math.random();
    this.text = text;
  }
}
