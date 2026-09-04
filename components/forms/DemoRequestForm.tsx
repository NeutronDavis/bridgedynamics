"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createLeadSubmissionClient } from "@/lib/forms/create-lead-client";
import { validateDemo, type ValidationErrors } from "@/lib/forms/validation";
import type { DemoSubmission } from "@/lib/forms/types";
import { FieldError } from "./FieldError";
import { HoneypotField } from "./HoneypotField";

const interests = ["Core Platform", "Workplace Suite", "Enterprise Content Management Suite", "People Suite", "Customer Suite", "Operations Suite", "Governance Suite", "Insights Suite"]; const initial: DemoSubmission = { kind: "demo", fullName: "", company: "", workEmail: "", phone: "", industry: "", organisationSize: "", areasOfInterest: [], message: "", consentToContact: false, website: "" };
export function DemoRequestForm() {
    const router = useRouter();
    const [value, setValue] = useState(initial);
    const [errors, setErrors] = useState<ValidationErrors>({});
    const [status, setStatus] = useState<"idle" | "sending" | "failure">("idle");
    const [message, setMessage] = useState("");
    const update = (key: keyof DemoSubmission, next: string | boolean | string[]) => setValue(current => ({ ...current, [key]: next }));
    const toggle = (area: string) => update("areasOfInterest", value.areasOfInterest.includes(area) ? value.areasOfInterest.filter(x => x !== area) : [...value.areasOfInterest, area]);
    async function submit(event: React.FormEvent) {
        event.preventDefault();
        const nextErrors = validateDemo(value);
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length) {
            setStatus("failure");
            setMessage("Please review the highlighted fields.");
            return
        }
        setStatus("sending");
        const result = await createLeadSubmissionClient().submit(value);
        if (result.ok) router.push("/request-demo/success");
        else {
            setStatus("failure");
            setMessage(result.message)
        }
    }
    return (
        <form className="lead-form" onSubmit={submit} noValidate>
            {status === "failure" && (<div className="form-status form-status--error" role="alert">{message}</div>)}
            <p className="form-note">Fields marked <span aria-hidden="true">*</span> are required.</p>
            <div className="form-grid">
                <Field label="Full name" name="fullName" value={value.fullName} error={errors.fullName} onChange={update} autoComplete="name" />
                <Field label="Company" name="company" value={value.company} error={errors.company} onChange={update} autoComplete="organization" />
                <Field label="Work email" name="workEmail" type="email" value={value.workEmail} error={errors.workEmail} onChange={update} autoComplete="email" />
                <Field label="Phone" name="phone" type="tel" value={value.phone} error={errors.phone} onChange={update} autoComplete="tel" />
                <Select label="Industry" name="industry" value={value.industry} error={errors.industry} options={["Oil & Gas Services", "Engineering & Construction", "Professional Services", "Public Sector", "Facility Management", "Other"]} onChange={update} />
                <Select label="Organisation size" name="organisationSize" value={value.organisationSize} error={errors.organisationSize} options={["1–49 employees", "50–199 employees", "200–499 employees", "500–999 employees", "1,000+ employees"]} onChange={update} />
                <fieldset className="field field--full">
                    <legend>Areas of interest <span aria-hidden="true">*</span></legend>
                    <div className="checkbox-grid">{interests.map(area => <label className="checkbox" key={area}><input type="checkbox" checked={value.areasOfInterest.includes(area)} onChange={() => toggle(area)} /><span>{area}</span></label>)}</div>
                    <FieldError id="areasOfInterest-error" message={errors.areasOfInterest} />
                </fieldset>
                <div className="field field--full">
                    <label htmlFor="message">Message (optional)</label>
                    <textarea id="message" rows={5} value={value.message} onChange={e => update("message", e.target.value)} placeholder="Tell us about your priorities, current systems or intended timeline." aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
                    <FieldError id="message-error" message={errors.message} />
                </div>
                <HoneypotField value={value.website ?? ""} onChange={next => update("website", next)} />
                <div className="field field--full">
                    <label className="checkbox consent">
                        <input type="checkbox" checked={value.consentToContact} onChange={e => update("consentToContact", e.target.checked)} /><span>I consent to Southbridge Technologies contacting me about this enquiry.</span>
                    </label>
                    <FieldError id="consent-error" message={errors.consentToContact} />
                </div>
                <div className="field--full">
                    <p className="form-note">Your information will be used to respond to this request. Read our <a href="/privacy">privacy notice</a>.</p>
                    <button className="button button--primary" disabled={status === "sending"} type="submit">{status === "sending" ? "Sending…" : "Request a Demonstration"}</button>
                </div>
            </div>
        </form>
    )
}
type Key = keyof DemoSubmission; type Update = (key: Key, value: string | boolean | string[]) => void; function Field({ label, name, value, error, onChange, type = "text", autoComplete }: { label: string; name: Key; value: string; error?: string; onChange: Update; type?: string; autoComplete?: string }) { const id = String(name); return <div className="field"><label htmlFor={id}>{label} <span aria-hidden="true">*</span></label><input id={id} type={type} value={value} autoComplete={autoComplete} onChange={e => onChange(name, e.target.value)} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} /><FieldError id={`${id}-error`} message={error} /></div> } function Select({ label, name, value, error, options, onChange }: { label: string; name: Key; value: string; error?: string; options: string[]; onChange: Update }) { const id = String(name); return <div className="field"><label htmlFor={id}>{label} <span aria-hidden="true">*</span></label><select id={id} value={value} onChange={e => onChange(name, e.target.value)} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined}><option value="">Select {label.toLowerCase()}</option>{options.map(x => <option key={x}>{x}</option>)}</select><FieldError id={`${id}-error`} message={error} /></div> }
