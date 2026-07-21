# CoRyd Web Portal Structure

This directory is prepared for three separated portal areas in the Next.js App Router. The folders are intentionally code-free placeholders so each page can be implemented incrementally.

## Customer Portal

- `(customer)/landing` — product overview, subscription benefits, cities, pricing, login/sign-up CTAs.
- `(customer)/login` — phone OTP login, profile creation, city selection.
- `(customer)/dashboard` — pickup/destination search, map, bike/cab booking, ride status, live tracking, payment, ride history.
- `(customer)/membership` — plan viewing, subscription, renewal, subscription management.
- `(customer)/profile` — personal details, saved locations, payment methods, ride history.
- `(customer)/_components` — customer-only shared UI components.
- `(customer)/_hooks` — customer-only client hooks.
- `(customer)/_services` — customer-only data-access and workflow services.

## Driver Portal

- `(driver)/landing` — Drive with CoRyd marketing, earnings overview, apply/login CTAs.
- `(driver)/login` — driver OTP login.
- `(driver)/onboarding` — personal details, vehicle details, KYC, document upload, bank details, onboarding status.
- `(driver)/dashboard` — online/offline state, incoming ride requests, navigation, trip lifecycle, active ride management.
- `(driver)/earnings` — daily/weekly earnings, payouts, completed trips, incentives.
- `(driver)/profile` — vehicle information, documents, bank account, ratings, support.
- `(driver)/_components` — driver-only shared UI components.
- `(driver)/_hooks` — driver-only client hooks.
- `(driver)/_services` — driver-only data-access and workflow services.

## Admin Portal

- `(admin)/dashboard` — platform KPIs for rides, revenue, subscriptions, active drivers, customers.
- `(admin)/drivers` — driver approvals, KYC review, driver account management.
- `(admin)/customers` — customer management, subscriptions, ride history.
- `(admin)/trips` — live ride monitoring, ride status, driver/customer tracking.
- `(admin)/support` — support tickets, complaints, refunds, dispute resolution.
- `(admin)/finance` — subscription revenue, ride payments, driver payouts, settlements.
- `(admin)/_components` — admin-only shared UI components.
- `(admin)/_hooks` — admin-only client hooks.
- `(admin)/_services` — admin-only data-access and workflow services.

## Separation of Concern Notes

- Portal route groups keep customer, driver, and admin experiences isolated without adding URL path segments by themselves.
- Page folders are reserved for future `page.tsx` route implementations.
- Underscore-prefixed folders are private implementation areas for each portal and are not routable pages.
