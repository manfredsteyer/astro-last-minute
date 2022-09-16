import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { CHECKOUT_URL } from "../conf";

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "angular-price",
  template: `
    <div class="island">
      <h2 class="mt0"><img class="fw-logo" src="/assets/angular.png"/>Book now!</h2>
      <h3>{{ title }}</h3>
      <button class="mr10 counter" (click)="subtract()">-</button>
      {{ count }} People
      <button class="ml10 counter" (click)="add()">+</button>
      <span class="ml20">€ {{ price }}</span>
      <button (click)="checkout()" class="ml20 checkout">Checkout!</button>
    </div>
  `,
})
export default class PriceComponent {
  @Input() title = "";
  count = 1;
  price = 1000;

  add(): void {
    this.count++;
    this.price = this.count * 1000;
  }

  subtract(): void {
    this.count--;
    this.price = this.count * 1000;
  }

  checkout(): void {
    location.href = CHECKOUT_URL;
  }
}
