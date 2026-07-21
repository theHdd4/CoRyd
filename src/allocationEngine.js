const ASSETS = ['equity', 'debt', 'gold', 'cash', 'alternatives', 'international'];

const PRIOR_MIX_BY_RISK = {
  conservative: { equity: 20, debt: 50, gold: 10, cash: 15, alternatives: 0, international: 5 },
  balanced: { equity: 45, debt: 30, gold: 10, cash: 8, alternatives: 2, international: 5 },
  growth: { equity: 65, debt: 15, gold: 7, cash: 5, alternatives: 3, international: 5 },
  aggressive: { equity: 78, debt: 7, gold: 5, cash: 3, alternatives: 4, international: 3 }
};

const FAMOUS_INVESTORS = [
  {
    name: 'Warren Buffett',
    style: 'quality-value compounding',
    attributes: ['patient holding periods', 'business quality', 'margin of safety', 'concentrated but understandable bets'],
    vector: { riskPreference: 62, concentrationComfort: 78, activePreference: 72, quality: 95, value: 88, momentum: 18, dividend: 55, complexityTolerance: 35, stabilityPreference: 70 }
  },
  {
    name: 'Peter Lynch',
    style: 'growth-at-a-reasonable-price stock picking',
    attributes: ['broad opportunity set', 'company-level research', 'consumer insight', 'tolerance for many holdings'],
    vector: { riskPreference: 72, concentrationComfort: 48, activePreference: 88, quality: 68, value: 58, momentum: 45, dividend: 25, complexityTolerance: 58, stabilityPreference: 45 }
  },
  {
    name: 'Ray Dalio',
    style: 'macro risk-balanced diversification',
    attributes: ['asset-class balance', 'correlation awareness', 'inflation/rate regimes', 'drawdown control'],
    vector: { riskPreference: 54, concentrationComfort: 25, activePreference: 60, quality: 55, value: 45, momentum: 42, dividend: 35, complexityTolerance: 86, stabilityPreference: 78 }
  },
  {
    name: 'John Bogle',
    style: 'low-cost passive indexing',
    attributes: ['broad diversification', 'low turnover', 'tax efficiency', 'simplicity'],
    vector: { riskPreference: 50, concentrationComfort: 12, activePreference: 8, quality: 50, value: 50, momentum: 15, dividend: 30, complexityTolerance: 18, stabilityPreference: 72 }
  },
  {
    name: 'Cathie Wood',
    style: 'disruptive innovation growth',
    attributes: ['high upside seeking', 'thematic growth', 'high volatility acceptance', 'long-duration equity'],
    vector: { riskPreference: 92, concentrationComfort: 82, activePreference: 90, quality: 45, value: 10, momentum: 68, dividend: 0, complexityTolerance: 82, stabilityPreference: 12 }
  },
  {
    name: 'Benjamin Graham',
    style: 'deep value and margin-of-safety investing',
    attributes: ['intrinsic value discipline', 'net-net opportunities', 'balance-sheet conservatism', 'rules-based security analysis'],
    vector: { riskPreference: 42, concentrationComfort: 35, activePreference: 78, quality: 62, value: 96, momentum: 5, dividend: 48, complexityTolerance: 42, stabilityPreference: 82 }
  },
  {
    name: 'Charlie Munger',
    style: 'quality compounder investing',
    attributes: ['mental models', 'durable moats', 'high-quality businesses', 'extreme patience'],
    vector: { riskPreference: 58, concentrationComfort: 86, activePreference: 70, quality: 98, value: 72, momentum: 8, dividend: 38, complexityTolerance: 46, stabilityPreference: 74 }
  },
  {
    name: 'Seth Klarman',
    style: 'risk-averse value and special situations',
    attributes: ['margin of safety', 'cash optionality', 'distressed opportunities', 'downside-first underwriting'],
    vector: { riskPreference: 38, concentrationComfort: 62, activePreference: 82, quality: 58, value: 92, momentum: 4, dividend: 28, complexityTolerance: 74, stabilityPreference: 88 }
  },
  {
    name: 'Howard Marks',
    style: 'credit-cycle and contrarian value investing',
    attributes: ['cycle awareness', 'risk control', 'distressed credit', 'second-level thinking'],
    vector: { riskPreference: 46, concentrationComfort: 44, activePreference: 75, quality: 56, value: 82, momentum: 12, dividend: 42, complexityTolerance: 80, stabilityPreference: 84 }
  },
  {
    name: 'George Soros',
    style: 'global macro reflexivity investing',
    attributes: ['macro catalysts', 'currency and rates expertise', 'reflexivity framework', 'rapid risk management'],
    vector: { riskPreference: 88, concentrationComfort: 76, activePreference: 96, quality: 28, value: 34, momentum: 75, dividend: 0, complexityTolerance: 96, stabilityPreference: 20 }
  },
  {
    name: 'Stanley Druckenmiller',
    style: 'concentrated global macro growth investing',
    attributes: ['asymmetric bets', 'top-down macro', 'capital preservation discipline', 'trend recognition'],
    vector: { riskPreference: 84, concentrationComfort: 84, activePreference: 94, quality: 52, value: 38, momentum: 82, dividend: 5, complexityTolerance: 92, stabilityPreference: 30 }
  },
  {
    name: 'Jim Simons',
    style: 'quantitative statistical arbitrage',
    attributes: ['systematic models', 'data-driven signals', 'high diversification', 'short holding periods'],
    vector: { riskPreference: 66, concentrationComfort: 18, activePreference: 92, quality: 35, value: 35, momentum: 70, dividend: 0, complexityTolerance: 100, stabilityPreference: 58 }
  },
  {
    name: 'David Swensen',
    style: 'endowment-model asset allocation',
    attributes: ['illiquidity premium', 'alternative assets', 'manager selection', 'equity-oriented diversification'],
    vector: { riskPreference: 68, concentrationComfort: 32, activePreference: 62, quality: 60, value: 48, momentum: 22, dividend: 20, complexityTolerance: 92, stabilityPreference: 62 }
  },
  {
    name: 'Joel Greenblatt',
    style: 'quality-value special situations',
    attributes: ['high returns on capital', 'earnings yield discipline', 'spinoffs and special situations', 'systematic value ranking'],
    vector: { riskPreference: 64, concentrationComfort: 58, activePreference: 82, quality: 86, value: 86, momentum: 18, dividend: 18, complexityTolerance: 62, stabilityPreference: 62 }
  },
  {
    name: 'Philip Fisher',
    style: 'scuttlebutt growth-quality investing',
    attributes: ['long-term growth companies', 'management quality', 'research through industry contacts', 'innovation focus'],
    vector: { riskPreference: 70, concentrationComfort: 72, activePreference: 84, quality: 90, value: 38, momentum: 28, dividend: 8, complexityTolerance: 56, stabilityPreference: 50 }
  },
  {
    name: 'Bill Gross',
    style: 'active fixed-income and duration management',
    attributes: ['bond-market specialization', 'duration positioning', 'income generation', 'macro rate views'],
    vector: { riskPreference: 36, concentrationComfort: 28, activePreference: 78, quality: 62, value: 50, momentum: 32, dividend: 82, complexityTolerance: 78, stabilityPreference: 86 }
  },
  {
    name: 'Carl Icahn',
    style: 'activist value investing',
    attributes: ['corporate activism', 'control influence', 'catalyst-driven value', 'concentrated positions'],
    vector: { riskPreference: 82, concentrationComfort: 92, activePreference: 96, quality: 48, value: 78, momentum: 35, dividend: 25, complexityTolerance: 82, stabilityPreference: 28 }
  },
  {
    name: 'Paul Tudor Jones',
    style: 'global macro and trend-following trading',
    attributes: ['technical trend signals', 'macro themes', 'strict risk controls', 'crash-risk awareness'],
    vector: { riskPreference: 78, concentrationComfort: 46, activePreference: 94, quality: 35, value: 32, momentum: 90, dividend: 0, complexityTolerance: 90, stabilityPreference: 38 }
  },
  {
    name: 'John Templeton',
    style: 'global contrarian value investing',
    attributes: ['international diversification', 'maximum pessimism buying', 'long-term discipline', 'valuation sensitivity'],
    vector: { riskPreference: 60, concentrationComfort: 45, activePreference: 76, quality: 65, value: 88, momentum: 8, dividend: 34, complexityTolerance: 58, stabilityPreference: 68 }
  },
  {
    name: 'Rakesh Jhunjhunwala',
    style: 'India-focused growth-at-value investing',
    attributes: ['high-conviction equity', 'emerging-market growth', 'long-term compounding', 'opportunistic trading roots'],
    vector: { riskPreference: 82, concentrationComfort: 82, activePreference: 90, quality: 72, value: 58, momentum: 42, dividend: 18, complexityTolerance: 62, stabilityPreference: 34 }
  },
  {
    name: 'Mohnish Pabrai',
    style: 'cloned concentrated value investing',
    attributes: ['heads-I-win underwriting', 'cloning proven ideas', 'concentrated bets', 'patience around mispricing'],
    vector: { riskPreference: 66, concentrationComfort: 88, activePreference: 82, quality: 68, value: 88, momentum: 8, dividend: 20, complexityTolerance: 44, stabilityPreference: 62 }
  }
];

const QUESTIONNAIRE = [
  { id: 'investableCapital', section: 'financialCapacity', prompt: 'How much investable capital can be allocated now?', type: 'currency' },
  { id: 'monthlyIncome', section: 'financialCapacity', prompt: 'What is your stable monthly income?', type: 'currency' },
  { id: 'monthlySavings', section: 'financialCapacity', prompt: 'What amount do you reliably save each month?', type: 'currency' },
  { id: 'emergencyFundMonths', section: 'financialCapacity', prompt: 'How many months of expenses are covered by your emergency fund?', type: 'number' },
  { id: 'debtBurden', section: 'financialCapacity', prompt: 'What percentage of income goes to EMIs/debt service?', type: 'percent' },
  { id: 'dependents', section: 'financialCapacity', prompt: 'How many dependents rely on this capital or income?', type: 'number' },
  { id: 'insuranceAdequacy', section: 'financialCapacity', prompt: 'How adequate are health/life insurance covers?', type: 'scale_0_100' },
  { id: 'incomeStability', section: 'financialCapacity', prompt: 'How stable is your income?', type: 'scale_0_100' },
  { id: 'existingHoldings', section: 'financialCapacity', prompt: 'Summarize existing liquid holdings by asset class.', type: 'asset_map' },
  { id: 'illiquidAssets', section: 'financialCapacity', prompt: 'Summarize real estate, business, ESOP, or other illiquid assets.', type: 'asset_map' },
  { id: 'upcomingLiabilities', section: 'financialCapacity', prompt: 'List major liabilities with amount, date, and criticality.', type: 'liability_list' },
  { id: 'goalType', section: 'goalProfile', prompt: 'What is the primary goal?', options: ['retirement', 'child education', 'home purchase', 'wealth creation', 'income', 'legacy', 'tax optimization'] },
  { id: 'goalAmount', section: 'goalProfile', prompt: 'What corpus or liability amount is required?', type: 'currency' },
  { id: 'horizonYears', section: 'goalProfile', prompt: 'How many years until the goal?', type: 'number' },
  { id: 'requiredReturn', section: 'goalProfile', prompt: 'What annual return is required to close the funding gap?', type: 'percent' },
  { id: 'criticality', section: 'goalProfile', prompt: 'How critical is this goal?', type: 'scale_0_100' },
  { id: 'flexibility', section: 'goalProfile', prompt: 'Can timing/amount be adjusted if markets disappoint?', type: 'scale_0_100' },
  { id: 'liabilityMatchingNeed', section: 'goalProfile', prompt: 'How much should cash flows be matched to known liabilities?', type: 'scale_0_100' },
  { id: 'drawdownToleranceBeforeFailure', section: 'goalProfile', prompt: 'Maximum portfolio drawdown tolerable before goal failure?', type: 'percent' },
  { id: 'statedRiskTolerance', section: 'riskPreference', prompt: 'What risk level do you prefer?', type: 'scale_0_100' },
  { id: 'drawdownAcceptance', section: 'riskPreference', prompt: 'What temporary fall can you emotionally accept?', type: 'percent' },
  { id: 'panicSellRisk', section: 'riskPreference', prompt: 'How likely are you to sell during a sharp fall?', type: 'scale_0_100' },
  { id: 'lossAversion', section: 'riskPreference', prompt: 'How painful are losses versus equal gains?', type: 'scale_0_100' },
  { id: 'investingExperience', section: 'riskPreference', prompt: 'How experienced are you with market cycles?', type: 'scale_0_100' },
  { id: 'volatilityComfort', section: 'riskPreference', prompt: 'How comfortable are you with volatility?', type: 'scale_0_100' },
  { id: 'taxResidency', section: 'taxProfile', prompt: 'What is your tax residency?', type: 'text' },
  { id: 'taxBracket', section: 'taxProfile', prompt: 'What marginal tax bracket applies?', type: 'percent' },
  { id: 'holdingPeriodExpectation', section: 'taxProfile', prompt: 'Expected holding period in years?', type: 'number' },
  { id: 'taxLossHarvestingNeed', section: 'taxProfile', prompt: 'Need systematic tax-loss harvesting?', type: 'scale_0_100' },
  { id: 'lowTurnoverPreference', section: 'taxProfile', prompt: 'Preference for low turnover?', type: 'scale_0_100' },
  { id: 'dividendTaxSensitivity', section: 'taxProfile', prompt: 'Sensitivity to dividend taxation?', type: 'scale_0_100' },
  { id: 'passiveActivePreference', section: 'investmentStyle', prompt: 'Prefer passive (0) or active (100)?', type: 'scale_0_100' },
  { id: 'directStockComfort', section: 'investmentStyle', prompt: 'Comfort with direct stocks?', type: 'scale_0_100' },
  { id: 'pmsConcentrationAcceptance', section: 'investmentStyle', prompt: 'Comfort with PMS-like concentration?', type: 'scale_0_100' },
  { id: 'factorPreference', section: 'investmentStyle', prompt: 'Rate quality, value, momentum, low volatility, dividend, and growth preferences.', type: 'factor_map' },
  { id: 'esgExclusions', section: 'investmentStyle', prompt: 'Any ESG or business exclusions?', type: 'text_list' },
  { id: 'sectorTilts', section: 'investmentStyle', prompt: 'Any desired sector tilts or restrictions?', type: 'text_list' },
  { id: 'complexityTolerance', section: 'investmentStyle', prompt: 'Comfort with complex strategies/products?', type: 'scale_0_100' },
  { id: 'marketState', section: 'marketState', prompt: 'Current capital-market assumptions: expected returns, volatility, correlations, valuation, rates, credit spreads, stress, drawdown, momentum, and liquidity.', type: 'market_state' }
];

function clamp(value, min = 0, max = 100) { return Math.min(max, Math.max(min, Number.isFinite(value) ? value : 0)); }
function scoreInverse(value, maxGood) { return clamp(100 - (value / maxGood) * 100); }
function weighted(parts) { const total = parts.reduce((s, p) => s + p[1], 0); return clamp(parts.reduce((s, p) => s + clamp(p[0]) * p[1], 0) / total); }
function sumAssetMap(map = {}) { return Object.values(map).reduce((sum, v) => sum + (Number(v) || 0), 0); }

function buildInvestorVector(input) {
  const income = Number(input.monthlyIncome) || 0;
  const savingsRate = income > 0 ? ((Number(input.monthlySavings) || 0) / income) * 100 : 0;
  const liquidExisting = sumAssetMap(input.existingHoldings);
  const capital = Number(input.investableCapital) || 0;
  const goalAmount = Number(input.goalAmount) || 0;
  const fundingRatio = goalAmount > 0 ? ((capital + liquidExisting) / goalAmount) * 100 : 100;
  const diversification = input.existingHoldings ? clamp(Object.values(input.existingHoldings).filter(v => Number(v) > 0).length * 20) : 40;

  const financialCapacity = weighted([
    [Math.log10(capital + 1) * 8, 1], [savingsRate * 3, 1.2], [(input.emergencyFundMonths || 0) * 12, 1.2],
    [scoreInverse(input.debtBurden || 0, 60), 1.2], [scoreInverse(input.dependents || 0, 6), 0.6], [input.insuranceAdequacy ?? 50, 0.8], [input.incomeStability ?? 50, 1]
  ]);
  const goalProfile = {
    type: input.goalType || 'wealth creation', amount: goalAmount, horizonYears: Number(input.horizonYears) || 0,
    requiredReturn: Number(input.requiredReturn) || 0, criticality: clamp(input.criticality ?? 50), flexibility: clamp(input.flexibility ?? 50),
    liabilityMatchingNeed: clamp(input.liabilityMatchingNeed ?? 0), drawdownToleranceBeforeFailure: clamp(input.drawdownToleranceBeforeFailure ?? input.drawdownAcceptance ?? 20), fundingRatio: clamp(fundingRatio)
  };
  const riskCapacity = weighted([
    [Math.min((input.horizonYears || 0) / 10, 1) * 100, 1.2], [input.incomeStability ?? 50, 1], [savingsRate * 3, 1],
    [(input.emergencyFundMonths || 0) * 12, 1], [scoreInverse(input.debtBurden || 0, 60), 1], [input.flexibility ?? 50, 0.9], [fundingRatio, 1], [diversification, 0.7], [scoreInverse(input.liquidityNeed ?? input.liabilityMatchingNeed ?? 0, 100), 1]
  ]);
  const riskPreference = weighted([
    [input.statedRiskTolerance ?? input.riskTolerance ?? 50, 1.3], [input.drawdownAcceptance ?? 20, 1], [scoreInverse(input.panicSellRisk ?? 50, 100), 1.2],
    [scoreInverse(input.lossAversion ?? 50, 100), 0.8], [input.investingExperience ?? 40, 0.7], [input.volatilityComfort ?? 50, 1]
  ]);
  const taxProfile = {
    residency: input.taxResidency || 'unspecified', bracket: clamp(input.taxBracket ?? 0), holdingPeriodYears: Number(input.holdingPeriodExpectation) || 0,
    taxLossHarvestingNeed: clamp(input.taxLossHarvestingNeed ?? 0), lowTurnoverPreference: clamp(input.lowTurnoverPreference ?? input.taxSensitivity ?? 50),
    dividendTaxSensitivity: clamp(input.dividendTaxSensitivity ?? input.taxSensitivity ?? 50), stcgLtcgSensitivity: clamp(input.stcgLtcgSensitivity ?? input.taxSensitivity ?? 50),
    debtFundSuitability: clamp(input.debtFundTaxationSuitability ?? 50), internationalFundSuitability: clamp(input.internationalFundTaxationSuitability ?? 50)
  };
  const factor = input.factorPreference || {};
  const investmentStyle = {
    passiveActivePreference: clamp(input.passiveActivePreference ?? (input.vehiclePreference === 'passive' ? 0 : 50)), directStockComfort: clamp(input.directStockComfort ?? 30),
    mutualFundPreference: clamp(input.mutualFundPreference ?? 70), pmsConcentrationAcceptance: clamp(input.pmsConcentrationAcceptance ?? 20),
    factorPreference: { quality: clamp(factor.quality ?? 50), value: clamp(factor.value ?? 50), momentum: clamp(factor.momentum ?? 30), lowVolatility: clamp(factor.lowVolatility ?? 50), dividend: clamp(factor.dividend ?? 30), growth: clamp(factor.growth ?? 50) },
    esgExclusions: input.esgExclusions || input.exclusions || [], sectorTilts: input.sectorTilts || input.sectors || [], complexityTolerance: clamp(input.complexityTolerance ?? 40)
  };
  return { financialCapacity, goalProfile, riskCapacity, riskPreference, taxProfile, investmentStyle, marketState: input.marketState || {}, derived: { savingsRate: clamp(savingsRate), capitalAdequacy: clamp(fundingRatio), existingPortfolioDiversification: diversification } };
}

function institutionalAllocation(input) {
  const vector = buildInvestorVector(input);
  const priorName = input.riskBucket || (vector.riskPreference > 75 ? 'aggressive' : vector.riskPreference > 58 ? 'growth' : vector.riskPreference > 38 ? 'balanced' : 'conservative');
  const prior = { ...PRIOR_MIX_BY_RISK[priorName] };
  const usableRisk = Math.min(vector.riskCapacity, vector.riskPreference);
  const goal = vector.goalProfile;
  const cashFloor = Math.max(prior.cash, goal.liabilityMatchingNeed * 0.18, (input.liquidityNeed || 0) * 0.2);
  let equity = usableRisk * 0.85 + Math.max(goal.requiredReturn - 6, 0) * 3 - goal.criticality * 0.18 - goal.liabilityMatchingNeed * 0.22;
  equity = clamp(equity, 5, 85);
  let international = clamp(prior.international + (vector.investmentStyle.complexityTolerance - 50) * 0.05, 0, 15);
  let alternatives = clamp((vector.investmentStyle.pmsConcentrationAcceptance + vector.investmentStyle.complexityTolerance) / 40, 0, 10);
  let gold = clamp(prior.gold + ((input.marketState?.goldCurrencyStress || 0) / 20), 3, 15);
  let cash = clamp(cashFloor, 2, 35);
  let debt = Math.max(0, 100 - equity - international - alternatives - gold - cash);
  const total = equity + debt + gold + cash + alternatives + international;
  const allocation = Object.fromEntries(ASSETS.map(k => [k, Math.round(({ equity, debt, gold, cash, alternatives, international }[k] / total) * 1000) / 10]));
  return { allocation, investorVector: vector, prior: { name: priorName, allocation: prior }, nearestInvestor: nearestFamousInvestor(vector), rationale: buildRationale(vector, allocation, priorName) };
}

function nearestFamousInvestor(vector) {
  const comparable = { riskPreference: vector.riskPreference, concentrationComfort: vector.investmentStyle.pmsConcentrationAcceptance, activePreference: vector.investmentStyle.passiveActivePreference, quality: vector.investmentStyle.factorPreference.quality, value: vector.investmentStyle.factorPreference.value, momentum: vector.investmentStyle.factorPreference.momentum, dividend: vector.investmentStyle.factorPreference.dividend, complexityTolerance: vector.investmentStyle.complexityTolerance, stabilityPreference: 100 - vector.riskPreference };
  return FAMOUS_INVESTORS.map(investor => ({ ...investor, similarity: Math.round(100 - Math.sqrt(Object.keys(comparable).reduce((s, k) => s + (comparable[k] - investor.vector[k]) ** 2, 0) / Object.keys(comparable).length)) })).sort((a, b) => b.similarity - a.similarity)[0];
}

function buildRationale(vector, allocation, priorName) {
  return [`Started from ${priorName} base mix only as a fallback prior.`, `Capped risky assets using risk capacity (${Math.round(vector.riskCapacity)}) and risk preference (${Math.round(vector.riskPreference)}).`, `Raised liability-aware cash/debt when goal criticality or liability matching need is high.`, `Final mix: ${JSON.stringify(allocation)}.`];
}

export { QUESTIONNAIRE, PRIOR_MIX_BY_RISK, FAMOUS_INVESTORS, buildInvestorVector, institutionalAllocation, nearestFamousInvestor };
