---
id: index
title: Prompt Registry
sidebar_position: 0
---

# Brae Prompt Registry

## System Overview

Brae is an AI-powered M&A advisory platform that leverages multiple specialized agents to deliver enterprise-grade business intelligence, strategic analysis, and transaction advisory services. The platform uses LangGraph for sophisticated agent orchestration, enabling complex multi-agent workflows with quality control, human-in-the-loop validation, and real-time progress tracking.

## Core Agent Categories

### Company Research Agent

Conducts deep research and analysis of target companies for M&A advisory transactions.

**Key Components:**

- **Planner**: Generates up to 20 targeted research queries using investment banking methodology
- **Research Execution**: Parallel research using Perplexity Sonar Reasoning Pro
- **Synthesizer**: Compiles findings into structured markdown reports with citations

**Primary Use Cases:**

- Target company due diligence
- Competitive intelligence gathering
- Investment thesis development
- Valuation analysis preparation

### Pitch Drafter Agent

Creates compelling pitch decks and strategic presentations for M&A transactions.

**Key Components:**

- **Market Research**: Comprehensive industry and market analysis
- **Insight Reasoning**: Generates strategic insights and investment highlights (6-10 per presentation)
- **Slide Finalization**: Creates executive mini-deck outlines with 3-slide structure

**Primary Use Cases:**

- Sell-side pitch deck creation
- Investment committee presentations
- Client positioning materials
- Transaction marketing documentation

### Industry Research Agent

Provides comprehensive market intelligence and industry analysis using parallel processing.

**Key Components:**

- **Research Planner**: Creates structured research plans with chain-of-thought reasoning
- **6 Parallel Research Nodes**:
  - Market Overview & Growth Analysis
  - Value Chain Assessment
  - Industry Trends & Drivers
  - Competitive Landscape Mapping
  - Strategic Themes Analysis
  - M&A Activity & Transaction Review
- **Comprehensive Analysis**: Synthesizes strategic insights
- **Final Report**: Executive-ready industry analysis

**Primary Use Cases:**

- Market opportunity assessment
- Competitive positioning analysis
- Transaction strategy development
- Industry trend forecasting

### Buyer List Agent

Generates and qualifies buyer lists for sell-side M&A transactions using multi-stage workflow.

**Key Components:**

- **DEFINE Stage**: Creates initial buyer list (≥50 qualified buyers)
  - Buyer Research Define
  - Company Research Prompt
  - Industry Research Prompt
  - Quality Metrics Define
- **ENRICH Stage**: Enhances profiles with operational intelligence
  - Enrich Buyers Prompt
  - Quality Metrics Enrich
- **Supervisor Coordination**: Workflow orchestration and quality control

**Primary Use Cases:**

- Buyer universe identification
- Target list development
- Outreach prioritization
- Transaction marketing campaigns

---

_Brae Prompt Registry - Built with Docusaurus for comprehensive agent documentation_
