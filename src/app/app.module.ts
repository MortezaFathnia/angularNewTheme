import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { HomeComponent } from "./components/home/home.component";
import { CarouselHolderComponentComponent } from "./components/carousel-holder-component/carousel-holder-component.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, CarouselHolderComponentComponent],
  imports: [BrowserModule, AppRoutingModule, CarouselModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
