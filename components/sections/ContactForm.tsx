'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from '@/components/providers/I18nProvider';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import handsTyping from '@/assets/lottie/handsTyping.json';
import sentAnimation from '@/assets/lottie/sent.json';
import robotAnimation from '@/assets/lottie/robot.json';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

type ContactFormProps = {
  onAnimationChange: (animation: object) => void;
  onLoopChange: (loop: boolean) => void;
};

export function ContactForm({ onAnimationChange, onLoopChange }: ContactFormProps) {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<ReCAPTCHA | null>(null);

  const [captchaValid, setCaptchaValid] = useState<boolean | null>(null);
  const [sendError, setSendError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onCaptchaChange = () => {
    setCaptchaValid(Boolean(captchaRef.current?.getValue()));
  };

  const handleSuccess = () => {
    setIsSubmitted(true);
    onAnimationChange(sentAnimation);
    onLoopChange(false);
    setSendError(false);
    formRef.current?.reset();
    captchaRef.current?.reset();

    setTimeout(() => {
      onAnimationChange(handsTyping);
      onLoopChange(true);
      setIsSubmitted(false);
    }, 4000);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSendError(false);

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setSendError(true);
      return;
    }

    if (!captchaRef.current?.getValue()) {
      setCaptchaValid(false);
      onAnimationChange(robotAnimation);
      onLoopChange(true);
      return;
    }

    if (!formRef.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => handleSuccess(), () => setSendError(true));
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="space-y-5 rounded-card border border-white/10 bg-card p-8 shadow-glow-sm"
    >
      <div className="space-y-2">
        <label htmlFor="contact-name" className="text-sm text-muted">
          {t('contact.labels.name')}
        </label>
        <Input id="contact-name" name="user_name" required />
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-email" className="text-sm text-muted">
          {t('contact.labels.email')}
        </label>
        <Input id="contact-email" name="user_email" type="email" required />
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-message" className="text-sm text-muted">
          {t('contact.labels.message')}
        </label>
        <Textarea id="contact-message" name="message" required />
      </div>

      {RECAPTCHA_KEY && (
        <ReCAPTCHA
          ref={captchaRef}
          sitekey={RECAPTCHA_KEY}
          onChange={onCaptchaChange}
        />
      )}

      {captchaValid === false && (
        <p className="text-sm text-primary">{t('contact.captchaError')}</p>
      )}
      {sendError && (
        <p className="text-sm text-primary">{t('contact.sendError')}</p>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitted}>
        {t('contact.button')}
      </Button>
    </form>
  );
}
