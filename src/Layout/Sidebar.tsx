import { 
  LayoutDashboard, 
  Clock, 
  Calendar, 
  CalendarClock, 
  BarChart2, 
  MessageSquare,
  LifeBuoy,
  Settings
} from 'lucide-react';
import { navigationLinks } from '../Data/navigationLinks';


function NavItem({ icon, label, active }: any) {
  return (
    <li>
      <a 
        href="#" 
        className={`flex items-center py-2 px-4 rounded-md ${
          active ? 'bg-blue-50 text-[#311b92]' : 'text-gray-500 hover:bg-gray-100'
        }`}
      >
        <span className="mr-3">{icon}</span>
        <span className={active ? 'font-medium' : ''}>{label}</span>
      </a>
    </li>
  );
}

function Sidebar() {
  const iconMap = {
    LayoutDashboard,
    Clock,
    Calendar,
    CalendarClock,
    BarChart2,
    MessageSquare,
    LifeBuoy,
    Settings
  };

  const getIconComponent = (iconName: string, size = 18) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent size={size} /> : null;
  };

  return (
    <div className="w-56 bg-white h-full flex flex-col justify-between">
      <div className="p-4 d-flex align-items-start flex-column mb-3">
        <div className="mb-6">
          <h3 className="text-left text-xs font-medium uppercase text-gray-400 tracking-wider mb-3">
            General
          </h3>
          <ul className="space-y-1">
            {navigationLinks.general.map(item => (
              <NavItem 
                key={item.label}
                icon={getIconComponent(item.icon)}
                label={item.label}
                active={item.active}
              />
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-left text-xs font-medium uppercase text-gray-400 tracking-wider mb-3">
            Tools
          </h3>
          <ul className="space-y-1">
            {navigationLinks.more.map(item => (
              <NavItem 
                key={item.label}
                icon={getIconComponent(item.icon)}
                label={item.label}
                active={item.active}
              />
            ))}
          </ul>
        </div>

        
      </div>

      <div className='p-4 d-flex align-items-end flex-column'>
          <ul>
            <NavItem 
              icon={getIconComponent('Settings')}
              label="Settings"
              active={false}
            />
          </ul>
      </div>
    </div>
  );
}

export default Sidebar;
