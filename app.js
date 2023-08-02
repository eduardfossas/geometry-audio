const BACK_COLOR = "#333";
const STICK_COLOR = "#faf0e6";

class Rectangle {
  constructor(x, y, w, h, context, color) {
    context.fillRect(x, y, w, h);
  }
}

class App {
  constructor() {
    const synth = new Tone.Synth().toDestination();
    this.svg = document.querySelector("svg");
    this.svg.addEventListener("click", (e) => {
      let className = e.target.className.baseVal;
      switch (className) {
        case "square":
          synth.triggerAttackRelease("C4", "10n");
          break;

        case "circle":
          synth.triggerAttackRelease("E4", "10n");
          break;

        case "triangle":
          synth.triggerAttackRelease("D4", "10n");
          break;

        case "hex":
          synth.triggerAttackRelease("G4", "10n");
          break;
        case "star":
          synth.triggerAttackRelease("Cb4", "10n");
          break;

        default:
          break;
      }
    });
  }
}

new App();
