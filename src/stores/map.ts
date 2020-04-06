import { store } from "react-easy-state";

import {IMapStore, SummaryMarker} from "../interfaces";


export const MapStore: IMapStore = store({
    lat: 17.3850,
    lng: 78.4867,
    open: false,
    summaryMarkers: [],
});

export const MapActions = {
    setMarkerPosition(lat: number, lng: number) {
        MapStore.lat = lat;
        MapStore.lng = lng;
    },
    setSummary(summaryMarkers: SummaryMarker[]) {
        MapStore.summaryMarkers = summaryMarkers;
    },
    setMapToggle(open: boolean) {
        MapStore.open = open;
    }
};
