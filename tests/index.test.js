const Pacman = require('../src');

describe('Pacman should', () => {
  let pacman = null;
  beforeEach(() => {
    pacman = new Pacman();
  });

  it('ignore commands when not on the grid', () => {
    pacman.move();
    pacman.left();
    pacman.right();
    expect(pacman.report()).toBeNull();
  });

  it('move north', () => {
    pacman.place(0, 0, 'NORTH');
    pacman.move();
    expect(pacman.report()).toEqual({ x: 0, y: 1, f: 'NORTH' });
  });

  it('turn left', () => {
    pacman.place(0, 0, 'NORTH');
    pacman.left();
    expect(pacman.report()).toEqual({ x: 0, y: 0, f: 'WEST' });
  });

  it('move east then north', () => {
    pacman.place(1, 2, 'EAST');
    pacman.move();
    pacman.move();
    pacman.left();
    pacman.move();
    expect(pacman.report()).toEqual({ x: 3, y: 3, f: 'NORTH' });
  });

  it('ignore moves that would cause it to fall off the grid', () => {
    pacman.place(4, 4, 'NORTH');
    pacman.move();
    expect(pacman.report()).toEqual({ x: 4, y: 4, f: 'NORTH' });
  });

  it('pacman ignores move, left, right, and report commands until a valid place command has been executed', () => {
    pacman.move();
    expect(pacman.report()).toBeNull();

    pacman.left();
    expect(pacman.report()).toBeNull();

    pacman.right();
    expect(pacman.report()).toBeNull();

    pacman.place(0, 0, 'NORTH');
    expect(pacman.report()).toEqual({ x: 0, y: 0, f: 'NORTH' });
  });

  it('pacman accepts any sequence of commands after a valid place command, including another place command', () => {
    pacman.place(0, 0, 'NORTH');
    pacman.move();
    expect(pacman.report()).toEqual({ x: 0, y: 1, f: 'NORTH' });

    pacman.right();
    expect(pacman.report()).toEqual({ x: 0, y: 1, f: 'EAST' });

    pacman.place(1, 1, 'SOUTH');
    expect(pacman.report()).toEqual({ x: 1, y: 1, f: 'SOUTH' });

    pacman.left();
    expect(pacman.report()).toEqual({ x: 1, y: 1, f: 'EAST' });
  });

  it('pacman not on the grid ignores move, left, right, and report commands', () => {
    const pacman = new Pacman();

    pacman.move();
    expect(pacman.report()).toBeNull();

    pacman.left();
    expect(pacman.report()).toBeNull();

    pacman.right();
    expect(pacman.report()).toBeNull();
  });
});
