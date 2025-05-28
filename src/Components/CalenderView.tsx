import { ChevronLeft, ChevronRight } from 'lucide-react';
import { appointmentData, calendarData } from '../Data/calenderData';


function AppointmentCard({ title, titleColor, time, doctor, color }: any) {
  return (
    <div className={`px-4 py-2 rounded-2xl ${color} text-white`}>
      <h4 className={`text-md flex text-left ${titleColor}`}>
        {title}
      </h4>
      <p className={`text-xs opacity-90 mt-2 mb-1 flex items-start ${titleColor}`}>
        {time}
      </p>
      <p className={`text-sm flex items-start ${titleColor}`}>
        {doctor}
      </p>
    </div>
  );
}


function CalendarView() {
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <h3 className="text-lg font-medium text-[#311b92]">October 2021</h3>
                </div>
                <div className="flex space-x-1">
                    <button className="bg-none mx-2">
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button className="bg-none mx-2">
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 text-center gap-x-1">
                {calendarData.days.map((day, i) => (
                    <div
                        key={i}
                        className={`text-xs font-medium text-[#311b92] py-2 ${day.isToday ? 'bg-[#ede7f6] rounded-t-lg' : ''
                            }`}
                    >
                        {day.label}
                    </div>
                ))}
            </div>


            <div className="grid grid-cols-7 text-center gap-x-1">
                {calendarData.dates.map((date, i) => (
                    <div
                        key={i}
                        className={`py-2 ${date.isToday ? 'bg-[#ede7f6] rounded-b-lg' : ''
                            }`}
                    >
                        <div
                            className={`mx-auto w-8 h-8 flex items-center justify-center`}
                        >
                            {date.day}
                        </div>

                        <div className="mt-1 px-1 space-y-1 space-y-2">
                            {date.timeSlots.map((slot, j) => (
                                <div
                                    key={j}
                                    className={`text-xs py-0.5 px-1 rounded-lg ${slot.isScheduled
                                        ? 'bg-[#311b92] text-white'
                                        : 'text-gray-500'
                                        }`}
                                >
                                    {slot.time}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 justify-space-between">
                {appointmentData.map((appointment, i) => (
                    <AppointmentCard
                        key={i}
                        title={appointment.title}
                        titleColor={appointment.titleColor}
                        time={appointment.time}
                        doctor={appointment.doctor}
                        color={appointment.color}
                    />
                ))}
            </div>
        </div>
    );
};

export default CalendarView;