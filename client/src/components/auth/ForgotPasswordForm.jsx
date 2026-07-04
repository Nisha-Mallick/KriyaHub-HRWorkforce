import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import Input from '../common/Input.jsx';
import Button from '../common/Button.jsx';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // NOTE: demo-only flow. Replace with authService.forgotPassword(email).
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 400);
  }

  if (isSent) {
    return (
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary">
          <Mail className="h-5 w-5" />
        </div>
        <p className="text-sm font-medium text-text-primary">Check your email</p>
        <p className="text-xs text-text-secondary">
          If an account exists for {email}, a password reset link has been sent.
        </p>
        <Link to="/login" className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Sign In
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <p className="text-sm text-text-secondary">
        Enter the email linked to your account and we'll send you a link to reset your password.
      </p>
      <Input
        label="Email"
        name="email"
        type="email"
        icon={Mail}
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit" isLoading={isLoading} fullWidth>
        Send Reset Link
      </Button>
      <Link to="/login" className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-primary hover:underline">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to Sign In
      </Link>
    </form>
  );
}
