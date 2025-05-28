import { healthStatusData } from '../Data/HealthStatusData';


function StatusCard({ title, date, status, icon }: any) {

    const getProgressColor = () => {
        switch (status) {
            case 'good':
                return 'bg-green-500';
            case 'warning':
                return 'bg-yellow-500';
            case 'danger':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div className="py-4 mt-2 w-40 shadow-sm">
            <div className="flex items-start space-x-2 mx-1">
                <img src={icon} alt={title} className="h-6 w-6 object-contain" />
                <h4 className="text-sm font-medium text-gray-700">{title}</h4>
            </div>
            <div className="text-xs flex items-start text-gray-500 mt-2 mx-2">{date}</div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mt-2 mx-2">
                <div
                    className={`h-full ${getProgressColor()}`}
                    style={{
                        width:
                            status === 'good'
                                ? '80%'
                                : status === 'warning'
                                    ? '60%'
                                    : '30%',
                    }}
                ></div>
            </div>
        </div>
    );
}

function HealthStatusCards() {
    return (
        <div>
            {healthStatusData.map((item, index) => (
                <StatusCard
                    key={index}
                    title={item.title}
                    date={item.date}
                    status={item.status as 'good' | 'warning' | 'danger'}
                    icon={item.icon}
                />

            ))}
        </div>
    );
}

export default HealthStatusCards;
