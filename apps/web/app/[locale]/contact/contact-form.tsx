"use client"

import { useActionState, type ReactNode } from "react"
import { useFormStatus } from "react-dom"
import {
  Body,
  Button,
  GridContainer,
  Headline,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Textarea,
} from "@vix/ui/components"
import { Footer } from "@/components/footer"
import {
  contactCompanySizes,
  contactContent,
  contactCountries,
  contactInterests,
} from "@/lib/contact-data"
import { useLocale } from "next-intl"
import { sendContactEmail } from "./actions"
import { initialContactFormState } from "@/lib/types"

export default function ContactForm() {
  const locale = useLocale()
  const lang = locale === "en" ? "en" : "fr"
  const t = contactContent[lang]
  const [state, formAction] = useActionState(
    sendContactEmail,
    initialContactFormState
  )

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-6xl border-x pt-24 pb-20 md:pt-28">
        <GridContainer>
          <div className="relative p-0">
            <div className="grid md:grid-cols-[1.1fr_1fr]">
              <aside className="border-b border-border md:border-r md:border-b-0">
                <div className="min-h-[320px] p-8 md:p-12">
                  <Headline size="lg" className="max-w-md text-primary">
                    {t.title}
                  </Headline>

                  <div className="mt-8 space-y-10">
                    {t.actions.map((action) => (
                      <div key={action.title} className="flex gap-3">
                        <span className="material-symbols-outlined mt-0.5 text-[18px] leading-none text-primary">
                          {action.icon}
                        </span>
                        <Body className="max-w-md text-muted-foreground">
                          <strong className="font-semibold text-primary">
                            {action.title}
                          </strong>{" "}
                          {action.copy}
                        </Body>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid border-t border-border sm:grid-cols-2">
                  {t.proof.map((item, index) => (
                    <div
                      key={item.logo}
                      className={`min-h-40 p-8 md:p-12 ${
                        index === 0
                          ? "border-b border-border sm:border-r sm:border-b-0"
                          : ""
                      }`}
                    >
                      <p className="max-w-52 text-xl leading-tight font-semibold text-muted-foreground">
                        {item.metric}
                      </p>
                      <p className="mt-5 font-display text-xl font-bold tracking-wide text-primary">
                        {item.logo}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border p-8 md:p-12">
                  <blockquote className="max-w-lg text-xl leading-snug font-semibold text-muted-foreground">
                    "{t.quote}"
                  </blockquote>
                  <p className="mt-5 font-display text-lg font-bold tracking-[0.2em] text-primary">
                    {t.quoteLogo}
                  </p>
                </div>
              </aside>

              <div className="p-8 md:p-12">
                <form action={formAction} className="space-y-7">
                  <input type="hidden" name="locale" value={lang} />

                  <Field label={t.fields.email} htmlFor="company-email">
                    <Input
                      id="company-email"
                      name="email"
                      type="email"
                      required
                      placeholder={t.placeholders.email}
                      className="h-10 rounded-md border-border bg-surface-container-lowest px-3 text-sm text-foreground placeholder:text-muted-foreground"
                    />
                  </Field>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label={t.fields.name} htmlFor="contact-name">
                      <Input
                        id="contact-name"
                        name="name"
                        required
                        placeholder={t.placeholders.name}
                        className="h-10 rounded-md border-border bg-surface-container-lowest px-3 text-sm text-foreground placeholder:text-muted-foreground"
                      />
                    </Field>

                    <Field
                      label={t.fields.phone}
                      optional={t.fields.phoneOptional}
                      htmlFor="phone-number"
                    >
                      <div className="flex h-10 overflow-hidden rounded-md border border-border bg-surface-container-lowest">
                        <div className="flex w-12 items-center justify-center border-r border-border text-sm">
                          SN
                        </div>
                        <Input
                          id="phone-number"
                          name="phone"
                          type="tel"
                          placeholder={t.placeholders.phone}
                          className="h-full flex-1 border-0 bg-transparent px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-0"
                        />
                      </div>
                    </Field>
                  </div>

                  <Field label={t.fields.country}>
                    <Select
                      name="country"
                      required
                      defaultValue={contactCountries[0]}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={contactCountries[0]} />
                      </SelectTrigger>
                      <SelectContent>
                        {contactCountries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label={t.fields.website} htmlFor="company-website">
                      <Input
                        id="company-website"
                        name="website"
                        type="url"
                        placeholder={t.placeholders.website}
                        className="h-10 rounded-md border-border bg-surface-container-lowest px-3 text-sm text-foreground placeholder:text-muted-foreground"
                      />
                    </Field>

                    <Field label={t.fields.size}>
                      <Select name="companySize">
                        <SelectTrigger>
                          <SelectValue placeholder={t.placeholders.select} />
                        </SelectTrigger>
                        <SelectContent>
                          {contactCompanySizes.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  <Field label={t.fields.interest}>
                    <Select name="productInterest" required>
                      <SelectTrigger>
                        <SelectValue placeholder={t.placeholders.select} />
                      </SelectTrigger>
                      <SelectContent>
                        {contactInterests.map((interest) => (
                          <SelectItem key={interest} value={interest}>
                            {interest}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>

                  <Field label={t.fields.help} htmlFor="company-needs">
                    <Textarea
                      id="company-needs"
                      name="message"
                      rows={8}
                      required
                      placeholder={t.placeholders.help}
                      className="min-h-52 rounded-md border-border bg-surface-container-lowest px-3 py-3 text-sm text-foreground placeholder:text-muted-foreground"
                    />
                  </Field>

                  <div className="flex items-center gap-5 rounded-md border border-border bg-surface-container-lowest p-4">
                    <div className="min-w-0 flex-1">
                      <Label className="text-primary normal-case">
                        {t.fields.privacy}
                      </Label>
                      <Body size="sm" className="mt-2 text-muted-foreground">
                        {t.fields.consent}
                      </Body>
                    </div>
                    <Switch
                      aria-label={t.fields.privacy}
                      name="marketingConsent"
                      value="yes"
                      uncheckedValue="no"
                    />
                  </div>

                  {state.message ? (
                    <Body
                      role="status"
                      aria-live="polite"
                      size="sm"
                      className={
                        state.status === "success"
                          ? "text-primary"
                          : "text-destructive"
                      }
                    >
                      {state.message}
                    </Body>
                  ) : null}

                  <SubmitButton
                    label={t.fields.button}
                    pendingLabel={t.fields.sending}
                  />
                </form>
              </div>
            </div>
          </div>
        </GridContainer>
      </section>

      <Footer locale={locale} />
    </div>
  )
}

function SubmitButton({
  label,
  pendingLabel,
}: {
  label: string
  pendingLabel: string
}) {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      disabled={pending}
      className="h-12 w-full hover:text-white"
    >
      {pending ? pendingLabel : label}
    </Button>
  )
}

function Field({
  label,
  optional,
  htmlFor,
  children,
}: {
  label: string
  optional?: string
  htmlFor?: string
  children: ReactNode
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="block text-sm leading-none font-semibold text-primary"
      >
        {label}{" "}
        {optional ? (
          <span className="font-normal text-muted-foreground">
            ({optional})
          </span>
        ) : null}
      </label>
      {children}
    </div>
  )
}