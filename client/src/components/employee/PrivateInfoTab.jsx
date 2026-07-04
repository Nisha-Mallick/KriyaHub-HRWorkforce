import Card, { CardHeader } from '../common/Card.jsx';
import Input from '../common/Input.jsx';

const FIELD_LABELS = {
  address: 'Home Address',
  personalEmail: 'Personal Email',
  phone: 'Phone Number',
  bankName: 'Bank Name',
  accountNumber: 'Account Number',
  ifscCode: 'IFSC Code',
  emergencyContact: 'Emergency Contact',
  dateOfBirth: 'Date of Birth',
  dateOfJoining: 'Date of Joining',
};

export default function PrivateInfoTab({ privateInfo, editable = false }) {
  return (
    <Card>
      <CardHeader title="Private Information" subtitle="Visible only to the employee and HR" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {Object.entries(FIELD_LABELS).map(([key, label]) => (
          <Input key={key} label={label} defaultValue={privateInfo[key]} readOnly={!editable} />
        ))}
      </div>
    </Card>
  );
}
