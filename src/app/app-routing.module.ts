import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
    children: [
      // {path: '', component: OrangeHomeContentComponent},
      // {path: 'search', component: OrangeSearchComponent},
      // // {path: 'orders', component: OrangeOrdersComponent},
      // {path: 'order/:productID', component: OrangeOrderComponent},
      // {path: 'cart', component: OrangeCartComponent},
      // {path: 'orders', component: OrangeOrderListComponent, canActivate: [AuthService]},
      // {path: 'orders/:orderId', component: OrangeOrderViewComponent, canActivate: [AuthService]},
      // {path: 'transactions', component: OrangeTransactionsComponent, canActivate: [AuthService]},
      // {path: 'payment/verify/:gateway', component: OrangePaymentVerifyComponent, canActivate: [AuthService]},
      // {path: 'payment/:paymentType/:orderId', component: OrangePaymentComponent, canActivate: [AuthService]},
      // {path: 'account', component: OrangeAccountComponent, canActivate: [AuthService]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
