import test from 'node:test';
import assert from 'node:assert/strict';
import { QUESTIONNAIRE, buildInvestorVector, institutionalAllocation } from '../src/allocationEngine.js';

test('questionnaire captures institutional investor vector sections', () => {
  for (const section of ['financialCapacity', 'goalProfile', 'riskPreference', 'taxProfile', 'investmentStyle', 'marketState']) {
    assert.ok(QUESTIONNAIRE.some(q => q.section === section), `missing ${section}`);
  }
  assert.ok(QUESTIONNAIRE.some(q => q.id === 'requiredReturn'));
  assert.ok(QUESTIONNAIRE.some(q => q.id === 'liabilityMatchingNeed'));
});

test('builds investor vector with funding gap and risk capacity', () => {
  const vector = buildInvestorVector({ investableCapital: 500000, monthlyIncome: 10000, monthlySavings: 2500, emergencyFundMonths: 8, debtBurden: 10, dependents: 1, insuranceAdequacy: 80, incomeStability: 85, goalAmount: 1000000, horizonYears: 12, requiredReturn: 9, flexibility: 70, existingHoldings: { equity: 100000, debt: 100000 }, statedRiskTolerance: 70, panicSellRisk: 20, drawdownAcceptance: 35 });
  assert.equal(vector.goalProfile.fundingRatio, 70);
  assert.ok(vector.riskCapacity > 60);
  assert.ok(vector.riskPreference > 50);
});

test('allocation uses prior as fallback, then adapts to liabilities', () => {
  const conservativeGoal = institutionalAllocation({ riskBucket: 'aggressive', investableCapital: 800000, monthlyIncome: 12000, monthlySavings: 2000, emergencyFundMonths: 4, debtBurden: 25, incomeStability: 60, goalAmount: 1000000, horizonYears: 2, requiredReturn: 5, criticality: 95, liabilityMatchingNeed: 90, flexibility: 10, statedRiskTolerance: 90, panicSellRisk: 10, drawdownAcceptance: 40 });
  assert.equal(conservativeGoal.prior.name, 'aggressive');
  assert.ok(conservativeGoal.allocation.equity < conservativeGoal.prior.allocation.equity);
  assert.ok(conservativeGoal.allocation.cash >= 15);
  assert.ok(conservativeGoal.nearestInvestor.name);
});
