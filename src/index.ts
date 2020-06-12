import { User } from "./User";
// import { Company } from "./Company";
// import {} from "googlemaps";
//const mapDiv = document.querySelector("#map");
import { CustomMap } from "./CustomMap";

const user = new User();

const customMap = new CustomMap("map");

customMap.addUserMarker(user);
