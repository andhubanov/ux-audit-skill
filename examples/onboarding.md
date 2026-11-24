# Example: onboarding audit

An illustrative report showing the output format of the `ux-audit` skill. The product is fictional: a personal budgeting app for iOS. Onboarding runs from the welcome screen to the first budget, across seven screens.

**Prompt:** "audit this onboarding, goal is users creating their first budget" with screenshots of each screen attached.

---

## Verdict

Most users can finish onboarding, but they reach the first budget tired and unsure what they got. The flow asks for a bank connection before showing any value, and a three-screen tour delays the one action that matters. The single biggest obstacle is the bank connection being mandatory on screen 3.

## Top 3 fixes

1. **Make bank connection optional and move it after the first budget.** Removes the only blocker.
2. **Replace the three-screen tour with one line of value on the welcome screen.** Seven screens become five.
3. **Pre-fill the first budget from three questions instead of an empty form.** The user sees a result in under a minute.

## Findings

### [Blocker] Bank connection is required before anything else
Where: screen 3, "Connect your bank"
Problem: there is no way to continue without linking an account, and no explanation of why it is needed or what is shared.
Why it matters: users who are not ready to share bank access leave here, before they have seen any value.
Fix: add "Skip for now" with equal visual weight, explain read-only access in one line, and ask again after the first budget is created.

### [Major] Three tour screens before the first action
Where: screens 4–6
Problem: illustrated slides describe features the user has not tried yet; the only control is "Next".
Why it matters: every extra screen before the first success loses users, and the content is forgotten by the time it matters.
Fix: cut the tour; show feature hints in context the first time each feature appears.

### [Major] Empty budget form with no guidance
Where: screen 7, "Create your budget"
Problem: eight empty category fields and a total; no suggested amounts, no example.
Why it matters: a blank form at the end of a long flow invites "I'll do it later", which usually means never.
Fix: ask monthly income, rent and one savings goal, then propose a filled budget the user can adjust.

### [Minor] Notification permission asked on screen 2
Where: screen 2
Problem: the system prompt appears before the user knows what notifications would be for.
Fix: ask after the first budget, with a pre-prompt that names the benefit ("We'll tell you when a category is close to its limit").

### [Minor] Progress indicator counts the tour
Where: all screens
Problem: "Step 2 of 7" makes the flow feel longer than the real work.
Fix: count only steps that need input, or remove the indicator once the flow is shorter.

### [Polish] Mixed button labels
Where: screens 1, 4 and 7
Problem: "Get started", "Continue" and "Next" are used for the same action.
Fix: one label for forward navigation, a specific label for the final step ("Create budget").

## What works

- Sign in with Apple is offered first, so most users skip passwords.
- Copy is short and friendly throughout.
- The final screen celebrates the created budget clearly.

## Not covered

Android, the bank connection provider's own screens, returning-user flows, and accessibility beyond what screenshots show. Next step: compare completion rates of the current flow against the shortened one with 5 users each.
