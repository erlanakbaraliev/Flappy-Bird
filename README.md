### Name: **Flappy Bird Clone**

This project is a simplified version of the classic **Flappy Bird** game, built with HTML5 Canvas and JavaScript. The player controls a bird, navigating it through columns while avoiding collisions. The goal is to score as many points as possible by passing through the gaps between columns.

### Features:
- **Dynamic Gameplay:** Randomly generated columns with varying heights.
- **Gravity and Jump Mechanics:** The bird falls due to gravity and jumps when the spacebar is pressed.
- **Collision Detection:** Game ends when the bird collides with a column.
- **Score Display:** Tracks the number of columns successfully passed.

### Controls:
- Press the **spacebar** to make the bird jump.

### How It Works:
1. **Rendering:** Uses `canvas` to draw the background, bird, and columns.
2. **Physics:** Incorporates gravity (`ay`) and velocity (`vy`) for bird movement.
3. **Randomization:** Heights of columns are randomized for each new pair.
4. **Collision Handling:** Checks for overlapping areas between the bird and columns to detect collisions.

### Files:
- `index.html`: Contains the structure and assets for the game.
- `script.js`: Implements the game logic, rendering, and physics.
- `style.css`: Minimal inline styling for the canvas.
- **Assets**:
  - `bird.png`: Bird sprite.
  - `bg.png`: Background image.
  - `column.png`: Column image.

### How to Run:
1. Clone the repository.
2. Place the files in a web server (or open `index.html` directly in a browser).
3. Enjoy the game!


![Screenshot 2024-12-04 183520](https://github.com/user-attachments/assets/1f4328cc-bb5e-40a9-9e5e-767f5b23cc4a)
![Screenshot 2024-12-04 183543](https://github.com/user-attachments/assets/b600f3b8-3e53-48b0-bf9a-05b5bc5e37a1)
![Screenshot 2024-12-04 183534](https://github.com/user-attachments/assets/e78619ad-ed77-4d6f-a6aa-642b3779a504)
