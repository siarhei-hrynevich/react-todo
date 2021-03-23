

export default class Task {
  constructor(text, completed) {
    this.text = text;
    this.completed = completed;
  }

  getText() {
    return this.text;
  }

  isCompleted() {
    return this.completed;
  }
}
