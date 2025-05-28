import { Bell, Plus, Search } from 'lucide-react';
import ReactNiceAvatar, { AvatarFullConfig } from 'react-nice-avatar';

function Header() {

    const fixedAvatarConfig: AvatarFullConfig = {
        sex: 'man',
        faceColor: '#F9C9B6',
        earSize: 'small',
        eyeStyle: 'circle',
        noseStyle: 'short',
        mouthStyle: 'smile',
        shirtStyle: 'hoody',
        glassesStyle: 'none',
        hairColor: '#000',
        hairStyle: 'mohawk',
        shirtColor: '#6bd9e9',
        bgColor: '#06b6d4'
    };


    return (
        <header className="bg-white px-4 py-2 flex items-center justify-between">
            <div className="flex items-start">
                <h1 className="text-xl font-bold">
                    <span className="text-cyan-500">Health</span>
                    <span style={{ color: '#311b92' }} className="text-gray-800">care.</span>
                </h1>
            </div>
 
            <div className="flex items-start flex-1 max-w-lg">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full bg-gray-50 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                </div>
                <button className="p-2 rounded-full hover:bg-gray-100 relative">
                    <Bell className="h-5 w-5 text-[#311b92] " />
                </button>
            </div>

            <div className="flex items-center space-x-4">

                <div className="flex items-center">
                    <div className="h-8 w-8 bg-cyan-500 rounded-md flex items-center justify-center text-white">
                        <ReactNiceAvatar
                            className="w-full h-full"
                            style={{ width: '100%', height: '100%' }}
                            {...fixedAvatarConfig}
                        />
                    </div>
                </div>

                <button className="p-1.5 rounded-md text-white hover:bg-cyan-600" style={{ backgroundColor: '#311b92' }}>
                    <Plus className="h-5 w-5" />
                </button>
            </div>
        </header>
    )
}

export default Header