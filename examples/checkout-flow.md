# Example: checkout flow audit

An illustrative report showing the output format of the `ux-audit` skill. The product is fictional: a mobile checkout for an online store, five steps from cart to payment.

**Prompt:** "ux audit of this checkout, goal is completed payments" with screenshots of each step attached.

---

## Verdict

Users can complete a payment, but the flow loses them before they reach the card form. Five steps, a surprise total at the end and a promo code field that wipes the form make the path longer and riskier than it needs to be. The single biggest obstacle is the promo code error.

## Top 3 fixes

1. **Keep form data when the promo code fails.** Removes the only blocker.
2. **Merge address and delivery into one step.** Five steps become four.
3. **Show the full total, delivery included, from step 1.** No surprise on the last screen.

## Findings

### [Blocker] Promo code error clears the form
Where: step 4, payment
Problem: entering an invalid promo code reloads the step and empties the card fields.
Why it matters: users who try a code have to type their card again; many will leave instead.
Fix: validate the code inline, keep every field as entered, show the error under the promo field only.

### [Major] Primary button reads "Submit"
Where: step 5, review
Problem: the label does not say what happens or how much will be charged.
Why it matters: hesitation at the last step, the most expensive place to lose a user.
Fix: "Pay $84.20", with the amount updated live.

### [Major] Total appears only on the last step
Where: steps 1 to 4
Problem: delivery cost is added at review, so the total jumps.
Why it matters: surprise costs are a leading reason for checkout abandonment.
Fix: a sticky summary with the full total, delivery included, on every step.

### [Minor] No inline validation
Where: step 2, address
Problem: errors show only after "Continue", all at once at the top.
Fix: validate each field on blur and show the message under the field.

### [Polish] Inconsistent card icons
Where: step 4
Problem: card brand icons use two different styles and sizes.
Fix: one icon set, one size.

## What works

- Guest checkout is the default; no forced sign-up.
- Apple Pay is available, though it sits below the card form.
- Progress indicator shows the current step clearly.

## Not covered

Desktop layout, loading and error states of the payment provider, and accessibility beyond what screenshots show. Next step: a 5-user usability test of the full flow on mobile.
