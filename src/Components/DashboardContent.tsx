import HealthStatusCards from './HealthStatusView'
import HumanBody from './AnatomySection'
import { ChevronDown } from 'lucide-react';
import ActivityFeed from './ActivityFeed';
import CalendarView from './CalenderView';
import UpcomingSchedule from './UpcomingSchedule';

function DashboardContent() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-6">
                    <div className="bg-white rounded-xl shadow-sm p-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-semibold text-gray-800" style={{ color: '#311b92' }}>
                                Dashboard
                            </h1>
                            <span className="inline-flex items-center space-x-1 text-sm font-medium text-gray-700">
                                <span className='text-[#311b92]'>This week</span>
                                <ChevronDown className="w-4 h-4 text-[#311b92]" />
                            </span>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <HumanBody />
                            <HealthStatusCards />
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm">
                        <ActivityFeed />
                    </div>
                </div>

                <div className="lg:col-span-6">
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                        <CalendarView />
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm">
                        <UpcomingSchedule />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardContent