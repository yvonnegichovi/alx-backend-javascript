export default class ClassRoom {
  constructor(maxStudentSize) {
    this._maxStudentSize = maxStudentSize;
  }
  get maxStudentSize() {
    return this._maxStudentSize;
  }
}
