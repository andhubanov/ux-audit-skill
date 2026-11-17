---
name: ux-audit
description: Run a structured UX audit of a screen, flow, landing page or app. Use when asked to review, audit or critique a product's usability, onboarding, conversion or interface, from a screenshot, a URL, a Figma link or a description.
---

# UX audit

Audit the product the way a senior product designer would: find what blocks the user from reaching their goal, rank it, and say exactly what to change.

## 1. Frame the audit

Before judging anything, settle these four things. Take them from the request or the material; ask only if one is missing and it changes the verdict.

- **Product and audience**: who uses it, in what situation, on what device.
- **Primary goal**: the one action the user or the business needs to succeed (sign up, pay, finish onboarding, find an answer).
- **Scope**: which screen or flow is under review. Do not drift outside it.
- **Evidence**: what was actually seen (screenshots, live page, prototype). Say what was not seen.

## 2. Walk the flow as the user

Go step by step through the main path to the goal. At each step note: what the user wants, what the screen offers, where they could hesitate, misread or leave.

## 3. Check against these lenses

1. **Clarity of purpose**: in five seconds, is it obvious what this is and what to do next?
2. **Hierarchy and focus**: one primary action per screen, visually dominant. Secondary actions quieter.
3. **Navigation and orientation**: the user always knows where they are, how to go back, what is next.
4. **Forms and input**: only necessary fields, clear labels, sensible defaults, inline validation, useful errors.
5. **Feedback and states**: loading, empty, error, success and disabled states exist and explain themselves.
6. **Copy**: plain words, specific buttons ("Start free trial", not "Submit"), no jargon, errors that say how to fix.
7. **Consistency**: same pattern, same look, same wording for the same thing.
8. **Trust and friction**: pricing, privacy, permissions and commitments are stated before they are needed.
9. **Mobile and touch**: reachable targets (about 44px), readable text, no hover-only interactions.
10. **Accessibility basics**: text contrast, visible focus, labels on inputs, meaning not carried by colour alone, alt text where it matters.
11. **Growth hooks** (if conversion matters): value proposition above the fold, social proof near the decision, one clear call to action, a short path to the first success.

Do not force every lens. Skip what does not apply and say so in one line.

## 4. Write the findings

For each finding, use this shape:

```
### [Severity] Short title
Where: screen / element
Problem: what goes wrong for the user, in one or two sentences
Why it matters: effect on the goal (drop-off, errors, confusion)
Fix: the concrete change, specific enough to hand to a designer or developer
```

Severity scale:

- **Blocker**: users cannot complete the primary goal.
- **Major**: many users struggle or drop off.
- **Minor**: friction or inconsistency that does not stop anyone.
- **Polish**: small refinement.

## 5. Deliver the report

Structure the final answer like this:

1. **Verdict**: two or three sentences. Can the user reach the goal, and what is the single biggest obstacle?
2. **Top 3 fixes**: the changes with the most impact for the least effort, in order.
3. **Findings**: grouped by severity, Blockers first.
4. **What works**: two or three things to keep. An audit that only lists faults is less trusted.
5. **Not covered**: what the evidence did not allow you to judge, and what to test next (for example a 5-user usability test on the main flow).

## Rules

- Base every finding on something visible. Never invent screens, metrics or user research.
- Separate observation from opinion. "The button is below the fold on a 375px screen" is an observation; "it feels cramped" is not enough on its own.
- Prefer a few well-argued findings over a long list. Merge duplicates.
- Name the fix, not just the flaw.
- Be direct and kind. Critique the design, not the people who made it.
