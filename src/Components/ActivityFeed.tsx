import { activityData } from '../Data/activityData';

function ActivityFeed() {
const maxHeight = 130;
 return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-lg font-medium">Activity</h3>
        <div className="text-sm text-gray-600">
          3 appointments on this week
        </div>
      </div>
      
      <div className="h-86 flex items-end justify-between px-2">
        {activityData.map((day, index) => (
          <div key={index} className="flex flex-col items-center">
            {day.bars.map((bar, i) => (
              <div
                key={i}
                className={`w-2 mb-1 rounded-full ${bar.color}`}
                style={{ 
                  height: `${(bar.value / 100) * maxHeight}px`,
                }}
              ></div>
            ))}
            <div className="mt-2 text-xs text-gray-500">{day.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;