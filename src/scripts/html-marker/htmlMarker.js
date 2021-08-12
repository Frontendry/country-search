/* global google */

const createHTMLMapMarker = ({ ...args }) => {
  let OverlayView = google.maps.OverlayView;

  class HTMLMapMarker extends OverlayView {
    constructor() {
      super();
      this.latlng = new google.maps.LatLng(args.position);
      this.html = args.html;
      this.setMap(args.map);
    }

    createDiv() {
      this.div = document.createElement("div");
      this.div.className = "custom-country-marker";
      this.div.style.position = "absolute";
      if (this.html) {
        this.div.innerHTML = this.html;
      }
      google.maps.event.addDomListener(this.div, "click", (event) => {
        google.maps.event.trigger(this, "click");
      });
    }

    appendDivToOverlay() {
      const panes = this.getPanes();
      panes.overlayImage.appendChild(this.div);
    }

    positionDiv() {
      const point = this.getProjection().fromLatLngToDivPixel(this.latlng);
      /* let offset = 25; initial value */
      let offset = 0;
      if (point) {
        this.div.style.left = `${point.x - offset}px`;
        this.div.style.top = `${point.y - offset}px`;
      }
    }

    draw() {
      if (!this.div) {
        this.createDiv();
        this.appendDivToOverlay();
      }
      this.positionDiv();
    }

    remove() {
      if (this.div) {
        this.div.parentNode.removeChild(this.div);
        this.div = null;
      }
    }

    getPosition() {
      return this.latlng;
    }

    getDraggable() {
      return false;
    }
  }

  return new HTMLMapMarker();
};

export default createHTMLMapMarker;
