import { KeyRound, ShieldCheck } from 'lucide-react';
import Card, { CardHeader } from '../common/Card.jsx';
import Input from '../common/Input.jsx';
import Button from '../common/Button.jsx';

export default function SecurityTab() {
  return (
    <div className="flex flex-col gap-5">
      <Card>
        <CardHeader
          title="Change Password"
          subtitle="Choose a strong password you don't use elsewhere"
          action={<KeyRound className="h-4 w-4 text-text-secondary" />}
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input label="Current Password" type="password" containerClassName="sm:col-span-2" />
          <Input label="New Password" type="password" />
          <Input label="Confirm New Password" type="password" />
        </div>
        <div className="mt-5">
          <Button>Update Password</Button>
        </div>
      </Card>

      <Card>
        <CardHeader
          title="Two-Factor Authentication"
          subtitle="Add an extra layer of security to your account"
          action={<ShieldCheck className="h-4 w-4 text-text-secondary" />}
        />
        <Button variant="secondary">Enable Two-Factor Authentication</Button>
      </Card>
    </div>
  );
}
