import { Heart, Eye, Brain, Check } from 'lucide-react';
import { upcomingAppointments } from '../Data/appointmentData';

function AppointmentCard({ title, titleColor, time, icon, color = 'bg-gray-100' }: any) {
    const getIcon = () => {
        switch (icon) {
            case 'heart': return <Heart className="h-4 w-4 text-red-500" />;
            case 'eye': return <Eye className="h-4 w-4 text-blue-500" />;
            case 'brain': return <Brain className="h-4 w-4 text-purple-500" />;
            case 'check': return <Check className="h-4 w-4 text-green-500" />;
            default: return null;
        }
    };

    return (
        <div className={`${color} rounded-lg p-3 flex items-center justify-between mb-1`}>
            <div className="flex items-center">

                <div>
                    <div className=' flex justify-between items-center'>
                        <h4 className={`p-1.5 rounded-md mr-3 font-medium text-xs ${titleColor}`}>
                            {title}
                        </h4>
                        {getIcon()}
                    </div>
                    <p className={`text-xs text-gray-500 text-start p-1.5 ${titleColor}`}>{time}</p>
                </div>

            </div>
        </div>
    );
}

function UpcomingSchedule() {
    return (
        <div>
            <div className="flex items-start mb-4">
                <h3 className="text-lg font-medium">The Upcoming Schedule</h3>
            </div>

            <div className="space-y-2">
                {Object.entries(upcomingAppointments).map(([day, appointments], idx) => (
                    <div key={idx}>
                        <h4 className="text-sm font-medium text-gray-600 mb-2 flex items-start">On {day}</h4>
                        <div className="grid grid-cols-2 gap-4 mt-2 justify-space-between">
                            {appointments.map((appt, i) => (
                                <AppointmentCard
                                    key={i}
                                    title={appt.title}
                                    titleColor={appt.titleColor}
                                    time={appt.time}
                                    icon={appt.icon}
                                    color={appt.color}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpcomingSchedule;
