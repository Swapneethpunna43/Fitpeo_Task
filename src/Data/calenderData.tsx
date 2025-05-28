export const calendarData = {
  days: [
    { label: 'Mon', isToday: false, isSelected: true },
    { label: 'Tues', isToday: false, isSelected: true },
    { label: 'Wed', isToday: false, isSelected: true },
    { label: 'Thurs', isToday: true, isSelected: true },
    { label: 'Fri', isToday: false, isSelected: true },
    { label: 'Sat', isToday: false, isSelected: true },
    { label: 'Sun', isToday: false, isSelected: true }
  ],
  dates: [
    {
      day: '25',
      isToday: false,
      isSelected: true,
      timeSlots: [
        { time: '10:00', isScheduled: false },
        { time: '11:00', isScheduled: true },
        { time: '12:00', isScheduled: false }
      ]
    },
    {
      day: '26',
      isToday: false,
      isSelected: true,
      timeSlots: [
        { time: '08:00', isScheduled: false },
        { time: '09:00', isScheduled: true },
        { time: '10:00', isScheduled: false }
      ]
    },
    {
      day: '27',
      isToday: false,
      isSelected: true,
      timeSlots: [
        { time: '12:00', isScheduled: false },
        { time: '13:00', isScheduled: true }
      ]
    },
    {
      day: '28',
      isToday: true,
      isSelected: true,
      timeSlots: [
        { time: '10:00', isScheduled: false },
        { time: '11:00', isScheduled: true }
      ]
    },
    {
      day: '29',
      isToday: false,
      isSelected: true,
      timeSlots: [
        { time: '14:00', isScheduled: false },
        { time: '16:00', isScheduled: false }
      ]
    },
    {
      day: '30',
      isToday: false,
      isSelected: true,
      timeSlots: [
        { time: '14:00', isScheduled: false },
        { time: '15:00', isScheduled: false }
      ]
    },
    {
      day: '31',
      isToday: false,
      isSelected: true,
      timeSlots: [
        { time: '15:00', isScheduled: true },
        { time: '09:00', isScheduled: true },
        { time: '10:00', isScheduled: false }
      ]
    }
  ]
};

export const appointmentData = [
  {
    title: 'Dentist',
    titleColor: 'white',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    color: 'bg-[#311b92]'
  },
  {
    title: 'Physiotherapy Appointment',
    titleColor: 'text-[#311b92]',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Dymes',
    color: 'bg-[#d1c4e9]'
  }
];
