import { useState } from 'react';
import { Plus } from 'lucide-react';
import Badge from '../common/Badge.jsx';
import Button from '../common/Button.jsx';

export default function SkillsList({ title, items = [], editable = false }) {
  const [skills, setSkills] = useState(items);
  const [draft, setDraft] = useState('');

  function addSkill() {
    if (!draft.trim()) return;
    setSkills((prev) => [...prev, draft.trim()]);
    setDraft('');
  }

  return (
    <div>
      <h4 className="mb-2 text-sm font-semibold text-text-primary">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="neutral">
            {skill}
          </Badge>
        ))}
      </div>
      {editable && (
        <div className="mt-3 flex gap-2">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={`Add ${title.toLowerCase()}`}
            className="flex-1 rounded-lg border border-border px-3 py-1.5 text-xs focus-ring focus-visible:border-primary-400"
          />
          <Button size="sm" variant="secondary" icon={Plus} onClick={addSkill} aria-label={`Add ${title}`} />
        </div>
      )}
    </div>
  );
}
