import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import Input from '../common/Input.jsx';
import Button from '../common/Button.jsx';
import { useAuth } from '../../hooks/useAuth.js';
import { CURRENT_USER } from '../../data/mockData.js';

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ loginId: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // NOTE: demo-only flow. Replace with authService.login(form) once the
    // BetterAuth backend is connected.
    setIsLoading(true);
    setTimeout(() => {
      login(CURRENT_USER);
      setIsLoading(false);
      navigate('/dashboard');
    }, 400);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <Input
        label="Login ID / Email"
        name="loginId"
        type="text"
        autoComplete="username"
        placeholder="e.g. CO2026DS0001"
        value={form.loginId}
        onChange={handleChange}
        required
      />
      <Input
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        placeholder="••••••••"
        value={form.password}
        onChange={handleChange}
        required
      />
      <div className="flex items-center justify-end">
        <Link to="/forgot-password" className="text-xs font-medium text-primary hover:underline">
          Forgot password?
        </Link>
      </div>
      <Button type="submit" icon={LogIn} isLoading={isLoading} fullWidth>
        Sign In
      </Button>
      <p className="text-center text-xs text-text-secondary">
        Don't have an account?{' '}
        <Link to="/signup" className="font-medium text-primary hover:underline">
          Sign Up
        </Link>
      </p>
    </form>
  );
}
