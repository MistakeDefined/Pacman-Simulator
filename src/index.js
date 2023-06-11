class Pacman {
  constructor() {
    this.position = null;
    this.direction = null;
    this.gridSize = { x: 5, y: 5 };
  }

  // marking this as private
  #isOnGrid() {
    return this.position !== null && this.direction !== null;
  }

  place(x, y, f) {
    if (x >= 0 && x < this.gridSize.x && y >= 0 && y < this.gridSize.y) {
      this.position = { x: x, y: y };
      this.direction = f;
    }
  }

  move() {
    if (!this.#isOnGrid()) return;

    let newPosition = { ...this.position };

    switch (this.direction) {
      case 'NORTH':
        newPosition.y += 1;
        break;
      case 'SOUTH':
        newPosition.y -= 1;
        break;
      case 'EAST':
        newPosition.x += 1;
        break;
      case 'WEST':
        newPosition.x -= 1;
        break;
    }

    if (
      newPosition.x >= 0 &&
      newPosition.x < this.gridSize.x &&
      newPosition.y >= 0 &&
      newPosition.y < this.gridSize.y
    ) {
      this.position = newPosition;
    }
  }

  left() {
    if (!this.#isOnGrid()) return;

    switch (this.direction) {
      case 'NORTH':
        this.direction = 'WEST';
        break;
      case 'SOUTH':
        this.direction = 'EAST';
        break;
      case 'EAST':
        this.direction = 'NORTH';
        break;
      case 'WEST':
        this.direction = 'SOUTH';
        break;
    }
  }

  right() {
    if (!this.#isOnGrid()) return;

    switch (this.direction) {
      case 'NORTH':
        this.direction = 'EAST';
        break;
      case 'SOUTH':
        this.direction = 'WEST';
        break;
      case 'EAST':
        this.direction = 'SOUTH';
        break;
      case 'WEST':
        this.direction = 'NORTH';
        break;
    }
  }

  report() {
    if (!this.#isOnGrid()) return null;
    return { x: this.position.x, y: this.position.y, f: this.direction };
  }
}

module.exports = Pacman;
