import Card, { CardHeader } from '../common/Card.jsx';
import SkillsList from './SkillsList.jsx';

export default function ResumeTab({ profile, editable = false }) {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      <div className="flex flex-col gap-5 lg:col-span-2">
        <Card>
          <CardHeader title="About" />
          <p className="text-sm leading-relaxed text-text-secondary">{profile.about}</p>
        </Card>
        <Card>
          <CardHeader title="What I Love About My Job" />
          <p className="text-sm leading-relaxed text-text-secondary">{profile.whatILoveAboutMyJob}</p>
        </Card>
        <Card>
          <CardHeader title="My Interests and Hobbies" />
          <p className="text-sm leading-relaxed text-text-secondary">{profile.interestsAndHobbies}</p>
        </Card>
      </div>
      <div className="flex flex-col gap-5">
        <Card>
          <SkillsList title="Skills" items={profile.skills} editable={editable} />
        </Card>
        <Card>
          <SkillsList title="Certification" items={profile.certifications} editable={editable} />
        </Card>
      </div>
    </div>
  );
}
