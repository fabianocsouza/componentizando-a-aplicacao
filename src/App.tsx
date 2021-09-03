import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

import { AuthProvider } from './contexts/Auth';


export function App() {
  
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <AuthProvider>
        <SideBar />
        <Content />
      </AuthProvider>
    </div>
  )
}