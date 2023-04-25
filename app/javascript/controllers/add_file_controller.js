import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["files"];

  connect() {
    console.log("Hello addfile");
  }

  addFile(event) {
    const originalInput = event.target
    const originalParent = originalInput.parentNode

    const selectedFile = document.createElement("div")
    selectedFile.className = "selected-file"
    selectedFile.append(originalInput)

    const newInput = originalInput.cloneNode()

    newInput.value = ""

    originalParent.append(newInput)
  }
}
