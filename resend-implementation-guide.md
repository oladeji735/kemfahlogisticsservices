# Resend Email Integration Guide

This guide explains how the Resend email flow is implemented in this codebase, how the contact form connects to the API route, and how the email templates are structured. It also includes setup steps, configuration requirements, and troubleshooting tips.

---

## 1) Prerequisites (Resend Setup)

1. **Create a Resend account** and generate an API key.
2. **Verify a sending domain** in Resend (required for sending emails to any address).
   - Example verified domain: `070351.xyz`
3. **Choose a verified sender address** (does not require an inbox unless you want replies):
   - Example: `hello@070351.xyz`

> If the domain is not verified, Resend will only allow emails to be sent to the email address associated with the API key (testing mode).

---

## 2) Environment Variables

Create or update `.env.local`:

```env
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=hello@070351.xyz
NOTIFICATION_EMAIL=owner@example.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Key variables:**
- `RESEND_API_KEY`: Your Resend API key.
- `EMAIL_FROM`: Must use your verified domain (e.g., `hello@070351.xyz`).
- `NOTIFICATION_EMAIL`: The business owner’s email (where notifications go).

---

## 3) Contact Form Flow (Frontend)

**File:** `src/app/contact/page.tsx`

### What happens:
1. User completes the form.
2. `handleSubmit` gathers form data.
3. Data is sent as JSON to `/api/contact`.

### Core logic (simplified):

```ts
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

The form includes:
- `name`, `email`, `phone`, `message`
- Optional quote fields: `serviceType`, `poolType`, `location`

---

## 4) API Route (Backend)

**File:** `src/app/api/contact/route.ts`

### Responsibilities:
1. Parse and validate the request body.
2. Send **notification email** to the owner (`NOTIFICATION_EMAIL`).
3. Send **thank-you email** to the customer (`email` from form).

### Key steps in the code:

```ts
// Notification email (business owner)
await resend.emails.send({
  from: process.env.EMAIL_FROM,
  to: [process.env.NOTIFICATION_EMAIL],
  subject: notificationSubject,
  react: notificationHtml,
});

// Thank-you email (customer)
await resend.emails.send({
  from: process.env.EMAIL_FROM,
  to: [email],
  subject: 'Thank you for contacting us!',
  react: ThankYouEmail({ name }),
});
```

### Validation:
- Checks required fields
- Validates email format
- Validates phone format

---

## 5) Email Templates

All templates are in `src/emails/` and use **@react-email/components**.

### Owner Notifications

- **General Inquiry:** `ContactFormNotification.tsx`
- **Quote Request:** `QuoteRequestNotification.tsx`

Both templates display:
- Customer name
- Email
- Phone
- Message
- Quote details (if applicable)

### Customer Confirmation

- **Thank You:** `ThankYouEmail.tsx`

This template confirms receipt and includes contact info.

---

## 6) Troubleshooting

### ❌ Email only sends to your Resend account
**Cause:** Domain not verified or `EMAIL_FROM` not using verified domain.
**Fix:** Verify a domain and use it for `EMAIL_FROM`.

### ❌ Notification email not delivered
**Cause:** `NOTIFICATION_EMAIL` is missing or invalid.
**Fix:** Ensure it is set in `.env.local`.

### ❌ 403 error from Resend
**Cause:** Still in testing mode.
**Fix:** Use a verified domain sender.

---

## 7) Testing Checklist

✅ Submit the contact form on `/contact`

✅ Owner receives notification email at `NOTIFICATION_EMAIL`

✅ Customer receives thank-you email at form email

✅ No Resend 403 errors in logs

---

## 8) Customization Tips

To update design:
- Edit templates in `src/emails/`
- Use Tailwind classes inside `@react-email/components`
- Keep layouts minimal (centered card, soft background, clean typography)

---

If you need help extending this flow (e.g. adding attachments, CC, or logging into a database), let me know.
