import { MessageCircle } from "lucide-react";
import { useState, type ReactNode } from "react";
import { site, whatsappLink } from "@/lib/site";

/* === SHARED FORM FIELDS === */

export function Field({
  label,
  htmlFor,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string | undefined;
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/80">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error ? <p className="mt-1.5 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}

export const inputClass =
  "w-full rounded-sm border border-input bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange";

export function WhatsAppFallback({ label = "Prefer to talk now? Chat with us on WhatsApp instead." }: { label?: string }) {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="Chat"
      className="inline-flex items-center gap-2 rounded-sm border border-orange px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-orange transition-colors hover:bg-orange hover:text-primary-foreground"
    >
      <MessageCircle className="size-4" /> {label}
    </a>
  );
}

/* === STATIC FORM SUBMISSION ===
   Posts to site.formEndpoint (Formspree / Netlify Forms placeholder).
   With no endpoint configured it falls back to a local success state. */
export function useStaticForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const submit = async (form: HTMLFormElement, required: string[], subject = "New website enquiry") => {
    const data = new FormData(form);
    const nextErrors: Record<string, string> = {};

    required.forEach((name) => {
      const value = String(data.get(name) ?? "").trim();
      if (!value) nextErrors[name] = "This field is required.";
    });
    const email = String(data.get("email") ?? "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) nextErrors["email"] = "Enter a valid email address.";
    const phone = String(data.get("phone") ?? "").trim();
    if (phone && phone.replace(/\D/g, "").length < 8) nextErrors["phone"] = "Enter a valid phone number.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSubmitting(true);
    try {
      if (site.formEndpoint) {
        data.append("_subject", subject);
        data.append("_template", "table");
        data.append("_replyto", email);
        await fetch(site.formEndpoint, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
      }
      setSuccess(true);
      form.reset();
    } finally {
      setSubmitting(false);
    }
  };

  return { errors, submitting, success, submit, reset: () => setSuccess(false) };
}
