import React from 'react';

const COMPANY = 'Timberline Ridge Tree Services';
const ADDRESS = '77 Sheffield Ave, Buffalo, NY 14220';
const PHONE = '+1 (716) 507-8767';
const EMAIL = 'info@timberlineridgetreeservices.com';

const smsDetails = <><h3>Program Description & Message Types</h3><p>By providing your phone number and checking the SMS consent checkbox, you agree to receive recurring automated text messages from {COMPANY}, including estimate confirmations, appointment reminders, project updates, customer support, follow-ups, and promotional or seasonal tree-care announcements.</p><h3>Message Frequency</h3><p>Frequency varies based on service activity and may be up to 4–8 messages per month, with additional messages during active service periods.</p><h3>Message & Data Rates</h3><p>Message and data rates may apply according to your carrier and plan. {COMPANY} is not responsible for carrier charges.</p><h3>Opt Out (STOP)</h3><p>Reply STOP at any time. After a one-time confirmation, messages will stop unless you re-enroll.</p><h3>Help (HELP)</h3><p>Reply HELP, call <a href="tel:+17165078767">{PHONE}</a>, or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p><h3>Carrier Disclaimer</h3><p>Carriers are not liable for delayed or undelivered messages. Delivery depends on carrier capability and coverage. Major U.S. carriers are supported, but not every carrier supports every message.</p></>;

const privacy = [
  ['1. Information We Collect', <><p>We may collect:</p><ul><li>Full name</li><li>Mailing or service address</li><li>Email address and mobile phone number</li><li>Service request details and project descriptions</li><li>Communication history and preferences</li></ul></>],
  ['2. SMS / Text Message Communications', smsDetails],
  ['3. Mobile Information & SMS Consent — No Third-Party Sharing', <>Mobile information, including phone numbers and SMS opt-in consent data, will not be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with third parties under any circumstances.</>],
  ['4. How We Use Your Information', <><ul><li>Provide and manage tree-care services</li><li>Respond to inquiries and service requests</li><li>Schedule appointments and send reminders</li><li>Send consented promotional communications</li><li>Improve our website and service quality</li><li>Comply with laws and regulations</li></ul></>],
  ['5. Cookies and Tracking Technologies', <>We use cookies and similar technologies to improve functionality, analyze traffic, and enhance user experience. Cookies do not store sensitive personal information.</>],
  ['6. Data Security', <>We use reasonable administrative, technical, and physical safeguards. However, no electronic transmission or storage method is completely secure.</>],
  ['7. Data Retention', <>We retain information only as long as necessary for the purposes in this policy or as required by law, then securely delete or anonymize it.</>],
  ['8. Your Privacy Rights', <>Depending on your location, you may request access, correction, or deletion of personal data; opt out of SMS by replying STOP; or opt out of marketing. Contact <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or <a href="tel:+17165078767">{PHONE}</a>.</>],
  ['9. Changes to This Privacy Policy', <>We may update this policy. Changes will be posted here with a revised “Last Updated” date. Continued use after changes constitutes acceptance.</>],
  ['10. Contact Information', <><strong>Company:</strong> {COMPANY}<br/><strong>Address:</strong> {ADDRESS}<br/><strong>Phone:</strong> <a href="tel:+17165078767">{PHONE}</a><br/><strong>Email:</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></>],
];

const terms = [
  ['1. Business Identity', <>These terms govern services provided by {COMPANY}, located at {ADDRESS}. Contact: <a href="tel:+17165078767">{PHONE}</a> | <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</>],
  ['2. Age Requirement (18+)', <>By using this website or enrolling in our services, including SMS, you confirm that you are at least 18 years old.</>],
  ['3. Terminology', <>“Client,” “You,” and “Your” refer to the website user. “The Company,” “We,” “Our,” and “Us” refer to {COMPANY}.</>],
  ['4. SMS Messaging Terms of Service', smsDetails],
  ['5. Cookies', <>We use cookies in accordance with our Privacy Policy to improve website functionality and user experience.</>],
  ['6. Intellectual Property & License', <>{COMPANY} owns the intellectual property rights for website content unless stated otherwise. You may not copy, reproduce, republish, sell, or redistribute it without written permission.</>],
  ['7. Comments & User Content', <>We may monitor and remove user content that is inappropriate, offensive, or violates these terms.</>],
  ['8. Content Liability', <>We are not responsible for content on external websites linking to us. You agree to protect {COMPANY} against claims arising from your website or digital properties.</>],
  ['9. Disclaimer', <>To the maximum extent permitted by law, {COMPANY} excludes warranties and conditions relating to our website and services and is not liable for loss or damage, including loss of business, profit, or revenue, arising from their use.</>],
  ['10. Changes to These Terms', <>We may update these terms at any time. Changes will be posted here with a revised “Last Updated” date. Continued use constitutes acceptance.</>],
  ['11. Contact Information', <><strong>Company:</strong> {COMPANY}<br/><strong>Address:</strong> {ADDRESS}<br/><strong>Phone:</strong> <a href="tel:+17165078767">{PHONE}</a><br/><strong>Email:</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></>],
];

export default function LegalPage({ type, onSwitch }) {
  const isPrivacy = type === 'privacy';
  const sections = isPrivacy ? privacy : terms;
  return <main className="legal-page relative z-10 min-h-screen px-4 pb-20 pt-36 sm:px-6"><article className="mx-auto max-w-4xl rounded-[2rem] border border-white/80 bg-white/95 p-6 shadow-2xl backdrop-blur-xl sm:p-10 lg:p-14"><p className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-forest-700">{COMPANY}</p><h1 className="font-display text-3xl font-extrabold text-slate-950 sm:text-5xl">{isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}</h1><p className="mt-4 border-b border-slate-200 pb-7 text-sm text-slate-500">Effective Date: January 19, 2025 &nbsp;|&nbsp; Last Updated: July 9, 2026</p><p className="mt-8 text-sm leading-7 text-slate-700">{isPrivacy ? `${COMPANY} (“we,” “our,” or “us”) is committed to protecting your privacy and personal information. This policy explains how we collect, use, disclose, and safeguard data under applicable U.S. laws, including the CCPA and GDPR where applicable.` : `Welcome to ${COMPANY}. By accessing this website or using our services, you agree to these Terms and Conditions. If you disagree, please do not use our website or services.`}</p><div className="legal-copy mt-10 space-y-9">{sections.map(([title, body]) => <section key={title}><h2>{title}</h2><div>{body}</div></section>)}</div><div className="mt-12 flex flex-wrap gap-3 border-t border-slate-200 pt-7 text-sm font-bold"><button onClick={() => onSwitch(isPrivacy ? 'terms' : 'privacy')} className="rounded-full bg-forest-700 px-5 py-3 text-white hover:bg-forest-800">View {isPrivacy ? 'Terms & Conditions' : 'Privacy Policy'}</button><button onClick={() => onSwitch(null)} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-slate-800 hover:bg-slate-50">Return to Website</button></div></article></main>;
}
