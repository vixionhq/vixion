"use server"

import { Resend } from "resend"

export type ContactFormState = {
  status: "idle" | "success" | "error"
  message: string
}

function getString(formData: FormData, key: string) {
  const value = formData.get(key)

  return typeof value === "string" ? value.trim() : ""
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function fieldRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 10px 12px; color: #71717a; border-bottom: 1px solid #27272a;">${escapeHtml(label)}</td>
      <td style="padding: 10px 12px; color: #fafafa; border-bottom: 1px solid #27272a;">${escapeHtml(value || "Not provided")}</td>
    </tr>
  `
}

function getStatusMessage(
  locale: string,
  key: "missingConfig" | "required" | "email" | "success" | "failure"
) {
  const messages = {
    en: {
      missingConfig:
        "Contact email is not configured. Set RESEND_API_KEY and CONTACT_EMAIL_TO.",
      required: "Please complete the required fields before sending.",
      email: "Please enter a valid company email address.",
      success: "Your message has been sent. We will respond shortly.",
      failure: "Unable to send your message right now. Please try again later.",
    },
    fr: {
      missingConfig:
        "L'email de contact n'est pas configure. Definissez RESEND_API_KEY et CONTACT_EMAIL_TO.",
      required: "Veuillez completer les champs requis avant l'envoi.",
      email: "Veuillez entrer une adresse email professionnelle valide.",
      success: "Votre message a ete envoye. Nous vous repondrons rapidement.",
      failure:
        "Impossible d'envoyer votre message pour le moment. Veuillez reessayer plus tard.",
    },
  }

  return messages[locale === "fr" ? "fr" : "en"][key]
}

export async function sendContactEmail(
  _previousState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const locale = getString(formData, "locale")
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL_TO || process.env.RESEND_TO_EMAIL
  const from =
    process.env.CONTACT_EMAIL_FROM ||
    process.env.RESEND_FROM_EMAIL ||
    "Vixion Website <onboarding@resend.dev>"

  if (!apiKey || !to) {
    return {
      status: "error",
      message: getStatusMessage(locale, "missingConfig"),
    }
  }

  const email = getString(formData, "email")
  const name = getString(formData, "name")
  const phone = getString(formData, "phone")
  const country = getString(formData, "country")
  const website = getString(formData, "website")
  const companySize = getString(formData, "companySize")
  const productInterest = getString(formData, "productInterest")
  const message = getString(formData, "message")
  const marketingConsent = getString(formData, "marketingConsent") || "no"

  if (!email || !name || !country || !productInterest || !message) {
    return {
      status: "error",
      message: getStatusMessage(locale, "required"),
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: "error",
      message: getStatusMessage(locale, "email"),
    }
  }

  const resend = new Resend(apiKey)
  const subject = `New Vixion contact request from ${name}`
  const text = [
    subject,
    "",
    `Company email: ${email}`,
    `Name: ${name}`,
    `Phone: ${phone || "Not provided"}`,
    `Country: ${country}`,
    `Company website: ${website || "Not provided"}`,
    `Company size: ${companySize || "Not provided"}`,
    `Primary product interest: ${productInterest}`,
    `Marketing consent: ${marketingConsent}`,
    "",
    "Message:",
    message,
  ].join("\n")

  const html = `
    <div style="margin: 0; padding: 32px; background: #000; color: #fafafa; font-family: Inter, Arial, sans-serif;">
      <div style="max-width: 640px; margin: 0 auto; border: 1px solid #27272a;">
        <div style="padding: 24px; border-bottom: 1px solid #27272a;">
          <p style="margin: 0 0 8px; color: #a1a1aa; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase;">Vixion Website</p>
          <h1 style="margin: 0; color: #fff; font-size: 24px; line-height: 1.2;">New contact request</h1>
        </div>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          ${fieldRow("Company email", email)}
          ${fieldRow("Name", name)}
          ${fieldRow("Phone", phone)}
          ${fieldRow("Country", country)}
          ${fieldRow("Company website", website)}
          ${fieldRow("Company size", companySize)}
          ${fieldRow("Primary product interest", productInterest)}
          ${fieldRow("Marketing consent", marketingConsent)}
        </table>
        <div style="padding: 24px;">
          <p style="margin: 0 0 12px; color: #a1a1aa; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase;">Company needs</p>
          <p style="margin: 0; color: #fafafa; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      </div>
    </div>
  `

  try {
    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text,
      html,
    })

    if (result.error) {
      return {
        status: "error",
        message: result.error.message || "Unable to send your message.",
      }
    }

    return {
      status: "success",
      message: getStatusMessage(locale, "success"),
    }
  } catch (error) {
    console.error("Contact form email failed", error)

    return {
      status: "error",
      message: getStatusMessage(locale, "failure"),
    }
  }
}
