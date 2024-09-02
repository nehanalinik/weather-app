import {useState} from 'react';
import { MainContent, Sidebar } from "./components";
import { UserTypes } from './utils/AdviceData';

function App() {
  const [userGroup, setUserGroup] = useState<UserTypes>('Event Planners');
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-gray-900 text-white">
      <Sidebar userGroup={userGroup} setUserGroup={setUserGroup}/>
      <MainContent userType={userGroup} />
    </section>
  );
}

export default App;
