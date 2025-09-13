---
id: company-research-competitive-analysis
title: Competitive Analysis
description: Analyze competitive landscape and positioning
sidebar_position: 2
tags: [COMPANY_RESEARCH, strategy]
---

# Competitive Analysis

## Objective

Map the competitive landscape, identify key competitors, and analyze positioning to inform strategic decision-making and market opportunities.

## Inputs

- Target company information
- Industry market data
- Competitor identification
- Product/service comparisons
- Pricing and positioning data
- Customer feedback and reviews

## Variables

- `target_company`: Company being analyzed
- `industry_segment`: Specific market segment
- `analysis_scope`: Geographic or market scope
- `competitor_count`: Number of competitors to analyze
- `comparison_criteria`: Key differentiation factors

## System Instructions

You are a competitive intelligence expert specializing in market analysis and strategic positioning. Your role is to provide actionable insights that inform competitive strategy and market opportunities.

Focus on:

1. Direct and indirect competitor identification
2. Competitive advantage analysis
3. Market gap identification
4. Pricing and positioning strategies
5. Threat and opportunity assessment

## User Template

```
Conduct competitive analysis for [TARGET_COMPANY] in the [INDUSTRY_SEGMENT]:

Analysis Requirements:
- [Specify number of competitors]
- [List key comparison criteria]
- [Define geographic scope]

Focus Areas:
- [Specify strategic priorities]
```

## Guardrails

- Base analysis on verifiable market data
- Maintain competitive neutrality
- Avoid proprietary information disclosure
- Include clear methodology documentation
- Support conclusions with evidence

## Few-shot Examples

### Example 1: SaaS Competitive Analysis

**Company:** TaskFlow (Project management software)

**Competitive Analysis:**

```
DIRECT COMPETITORS:
1. Asana - Market leader, 15M+ users, comprehensive features
2. Monday.com - Strong customization, visual workflows
3. ClickUp - Feature-rich, aggressive pricing

INDIRECT COMPETITORS:
- Trello (Simpler, free tier)
- Microsoft Project (Enterprise focus)
- Basecamp (Small team focus)

MARKET POSITIONING:
- TaskFlow: Premium mid-market solution
- Competitive advantages: AI-powered automation, superior UX
- Market gaps: Integration with legacy enterprise systems
```

## Output Schema

```json
{
  "competitor_mapping": {
    "direct_competitors": [
      {
        "name": "string",
        "market_share": "number",
        "strengths": ["string"],
        "weaknesses": ["string"],
        "pricing_strategy": "string"
      }
    ],
    "indirect_competitors": ["string"],
    "emerging_threats": ["string"]
  },
  "market_analysis": {
    "total_market_size": "string",
    "growth_rate": "number",
    "segmentation": "object",
    "trends": ["string"]
  },
  "strategic_insights": {
    "competitive_advantages": ["string"],
    "market_gaps": ["string"],
    "recommended_positioning": "string",
    "threat_level": "string"
  }
}
```

## Notes

- Update competitive analysis quarterly
- Monitor competitor product launches and funding
- Track pricing changes and feature updates
- Validate findings through multiple data sources
