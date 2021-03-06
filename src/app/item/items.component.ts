import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { enableLocationRequest, getCurrentLocation } from 'nativescript-geolocation'


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;

    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    getLocation() {
      getCurrentLocation({
        desiredAccuracy: Accuracy.any,
        maximumAge: 10000,
        timeout: 11000,
        iosOpenSettingsIfLocationHasBeenDenied: true,
      }).then(function (loc) {
            if (loc) {
                that.locations.push(loc);
            }
        }, function (e) {
            console.log("Error: " + (e.message || e));
        });
    }
}
