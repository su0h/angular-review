import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  constructor() { }

  calculateInvestmentResults(
    initialAmount: number, 
    annualInvestment: number, 
    expectedReturn: number, 
    duration: number,

  ) {
    const annualData = [];
    let investmentValue = initialAmount;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
      investmentValue - annualInvestment * year - initialAmount;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialAmount + annualInvestment * year,
      });
    }

    return annualData;
  }
}
