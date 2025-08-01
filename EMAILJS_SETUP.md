# EmailJS Setup for Marwen Rabai Portfolio

## ✅ Your EmailJS Service is Ready!

**Service ID:** `service_7sh5m1m` ✅
**Email:** `marwenrabai6@gmail.com` ✅

## 🔧 What You Need to Do:

### Step 1: Get Your EmailJS User ID
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Log into your account
3. Go to "Account" → "API Keys"
4. Copy your **Public Key** (this is your User ID)

### Step 2: Create Email Template
1. In EmailJS dashboard, go to "Email Templates"
2. Create a new template with this content:

**Template Name:** `template_contact`

**Subject:** `New Contact Form Submission - Marwen Rabai Portfolio`

**HTML Content:**
```html
<h2>New Contact Form Submission</h2>
<p><strong>From:</strong> {{from_email}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
<p><strong>Sent to:</strong> {{to_email}}</p>
```

### Step 3: Update the Contact Form
Replace `YOUR_USER_ID` in `components/Contact.tsx` with your actual EmailJS User ID.

### Step 4: Test
1. Fill out the contact form on your website
2. Submit the form
3. Check your email (`marwenrabai6@gmail.com`) for the message

## 🎯 Current Status:
- ✅ Service ID configured: `service_7sh5m1m`
- ✅ Email updated: `marwenrabai6@gmail.com`
- ✅ Contact form updated with EmailJS
- ⚠️ Need your User ID and template creation

## 🚀 Once Complete:
- Contact form will send emails directly to `marwenrabai6@gmail.com`
- No more console logging
- Professional email delivery
- Automatic success/error messages

**Your Service ID:** `service_7sh5m1m` ✅
**Your Email:** `marwenrabai6@gmail.com` ✅ 