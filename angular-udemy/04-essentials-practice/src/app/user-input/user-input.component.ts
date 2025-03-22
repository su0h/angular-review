import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  investmentService: InvestmentService;
  initialAmount: number;
  annualInvestment: number; 
  expectedReturn: number;
  duration: number;

  onCalculateClicked = output<any>();

  constructor(investmentService: InvestmentService) {
    this.investmentService = investmentService;

    this.initialAmount = 0;
    this.annualInvestment = 0;
    this.expectedReturn = 0;
    this.duration = 1;
  }

  onSubmit() {
    if (this.duration >= 1) {
      this.onCalculateClicked.emit(this.investmentService.calculateInvestmentResults(
        this.initialAmount, 
        this.annualInvestment, 
        this.expectedReturn, 
        this.duration
      ));

      this.initialAmount = 0;
      this.annualInvestment = 0;
      this.expectedReturn = 0;
      this.duration = 1;
    }
  }
  
}
