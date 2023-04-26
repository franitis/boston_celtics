import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["files"];

  connect() {
    console.log("Hello addfile");
  }

  addFile(event) {
    const originalInput = event.target
    const originalParent = originalInput.parentNode

    this.filesTarget.append(originalInput)

    const newInput = originalInput.cloneNode()

    newInput.value = ""

    originalParent.append(newInput)
  }
}
