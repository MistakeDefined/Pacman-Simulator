# Pacman Simulator

Pacman Simulator is a simple Node.js application that simulates the movement of Pacman on a 5x5 grid. The application follows the rules of a code challenge where the movements of Pacman are determined by a set of commands including `PLACE`, `MOVE`, `LEFT`, `RIGHT`, and `REPORT`.

## Requirements

To run this project, you will need:

- Node.js (v14 or later recommended)

## Setup

First, clone this repository to your local machine:

`git clone https://github.com/MistakeDefined/Pacman-Simulator.git`

Navigate to the project directory:

`cd Pacman-Simulator`

Next, install the project dependencies:

`npm install`

## Running Tests

You can run the unit tests for this project by executing:

`npm test`

The test suite includes a number of scenarios that validate the behavior of the Pacman based on the commands issued.

## Commands

The application supports the following commands:

- `PLACE X,Y,F`: Place the Pacman on the grid at coordinates X, Y and facing direction F (NORTH, SOUTH, EAST, WEST).
- `MOVE`: Move the Pacman one unit forward in the direction it is currently facing.
- `LEFT`: Rotate the Pacman 90 degrees to the left without changing its position.
- `RIGHT`: Rotate the Pacman 90 degrees to the right without changing its position.
- `REPORT`: Output the current X, Y and F of the Pacman.

## Linting

This project uses ESLint and Prettier for linting and code formatting. To check for linting errors, you can run:

`npm run lint:fix`

## Contributing

Contributions are welcome. Please submit a pull request or open an issue to propose changes or additions.
