    const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

    function golfScore(par, strokes) {
      if (strokes === 1) {
        return names[0];
      } else if (strokes <= par - 2) {
        return names[1];
      } else if (strokes === par - 1) {
        return names[2];
      } else if (strokes === par) {
        return names[3];
      } else if (strokes === par + 1) {
        return names[4];
      } else if (strokes === par + 2) {
        return names[5];
      } else {
        return names[6];
      }
    }

    function showGolfScore() {
      const strokes = parseInt(document.getElementById("strokesInput").value);
      const par = 4; // You can make this dynamic if needed
      const result = golfScore(par, strokes);
      document.getElementById("result").textContent = `Result: ${result}`;
    }

    document.writeln("Hello world");