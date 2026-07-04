import { useState } from 'react';
import { Paperclip } from 'lucide-react';
import Modal from '../common/Modal.jsx';
import Select from '../common/Select.jsx';
import Input from '../common/Input.jsx';
import Button from '../common/Button.jsx';
import { TIME_OFF_TYPES } from '../../utils/constants.js';

const TYPE_OPTIONS = Object.values(TIME_OFF_TYPES).map((label) => ({ label, value: label }));

export default function LeaveRequestModal({ isOpen, onClose, employeeName, onSubmit }) {
  const [form, setForm] = useState({ type: '', startDate: '', endDate: '', allocation: '' });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // NOTE: demo-only. Replace with leaveService.requestLeave(form).
    onSubmit?.(form);
    onClose?.();
  }

  const requiresAttachment = form.type === TIME_OFF_TYPES.SICK_LEAVE;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Time Off Type Request">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input label="Employee" value={employeeName} readOnly />
        <Select
          label="Time Off Type"
          name="type"
          options={TYPE_OPTIONS}
          value={form.type}
          onChange={handleChange}
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <Input label="Validity Period — From" name="startDate" type="date" value={form.startDate} onChange={handleChange} required />
          <Input label="Validity Period — To" name="endDate" type="date" value={form.endDate} onChange={handleChange} required />
        </div>
        <Input label="Allocation (Days)" name="allocation" type="number" min="0.5" step="0.5" value={form.allocation} onChange={handleChange} required />
        {requiresAttachment && (
          <div className="flex items-center gap-2 rounded-lg border border-dashed border-border px-3 py-2.5 text-xs text-text-secondary">
            <Paperclip className="h-4 w-4" />
            Attach sick leave certificate
            <input type="file" className="ml-auto text-xs" />
          </div>
        )}
        <div className="mt-2 flex justify-end gap-3">
          <Button type="button" variant="secondary" onClick={onClose}>
            Discard
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Modal>
  );
}
