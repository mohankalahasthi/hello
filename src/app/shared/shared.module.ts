import { NgModule, ModuleWithProviders, ErrorHandler } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";
// import { DffCardsModule } from "dff-cards";

import { MatBadgeModule } from "@angular/material/badge";
import { FlexLayoutModule } from "@angular/flex-layout";

// setTimeout(() => {
//   const config1: SocketIoConfig = {
//     url: Props.PY_END_POINT,
//     options: {}
//   };
// }, 100);


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    // DffCardsModule,
    MatBadgeModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    // DffCardsModule,
    MatBadgeModule
  ]
})
export class SharedModule {
}