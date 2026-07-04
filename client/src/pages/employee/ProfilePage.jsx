import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileHeader from '../../components/employee/ProfileHeader.jsx';
import ResumeTab from '../../components/employee/ResumeTab.jsx';
import PrivateInfoTab from '../../components/employee/PrivateInfoTab.jsx';
import SalaryInfoTab from '../../components/employee/SalaryInfoTab.jsx';
import SecurityTab from '../../components/employee/SecurityTab.jsx';
import Tabs from '../../components/common/Tabs.jsx';
import { useAuth } from '../../hooks/useAuth.js';
import { EMPLOYEES, PROFILE_DETAILS } from '../../data/mockData.js';

export default function ProfilePage() {
  const { id } = useParams();
  const { user, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('resume');

  const employee = useMemo(() => {
    const found = EMPLOYEES.find((emp) => emp.id === id);
    return found
      ? { ...user, ...found, loginId: user.loginId, manager: user.manager }
      : user;
  }, [id, user]);

  const isOwnProfile = !id || id === user.id;

  const tabs = [
    { key: 'resume', label: 'Resume' },
    { key: 'private', label: 'Private Info' },
    ...(isAdmin ? [{ key: 'salary', label: 'Salary Info' }] : []),
    ...(isOwnProfile ? [{ key: 'security', label: 'Security' }] : []),
  ];

  return (
    <div className="flex flex-col gap-6">
      <ProfileHeader employee={employee} editable={isOwnProfile} />
      <Tabs tabs={tabs} activeKey={activeTab} onChange={setActiveTab} />

      {activeTab === 'resume' && <ResumeTab profile={PROFILE_DETAILS} editable={isOwnProfile} />}
      {activeTab === 'private' && <PrivateInfoTab privateInfo={PROFILE_DETAILS.privateInfo} editable={isOwnProfile} />}
      {activeTab === 'salary' && isAdmin && <SalaryInfoTab salaryInfo={PROFILE_DETAILS.salaryInfo} />}
      {activeTab === 'security' && isOwnProfile && <SecurityTab />}
    </div>
  );
}
