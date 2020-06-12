import {} from "googlemaps";
import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.querySelector(`#${id}`), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }
  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      }
    });
  }
  addCompanyMarker(Company: Company): void {}
}
