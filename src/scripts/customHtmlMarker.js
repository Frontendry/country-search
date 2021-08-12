/* global google */
class HTMLMarker extends (new google.maps.OverlayView()) {
  constructor(latlng, html) {
    super();
    this.latlng = latlng;
    this.html = html;
  }

  onAdd() {
    this.div = document.createElement("div");
    this.div.className = "custom-google-marker";
    if (this.html) {
      this.div.innerHTML = this.html;
      let panes = this.getPanes();
      panes.overlayImage.appendChild(this.div);
    }
  }

  draw() {
    let overlayProjection = this.getProjection();
    let position = overlayProjection.fromLatLngToDivPixel(this.pos);
    let panes = this.getPanes();
    panes.overlayImage.style.left = position.x + "px";
    panes.overlayImage.style.top = position.y - 30 + "px";
  }

  remove() {
    if (this.div) {
      this.div.parentNode.removeChild(this.div);
      this.div = null;
    }
  }
}

export default HTMLMarker;
