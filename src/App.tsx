import Layout from './Layout'
import './App.css'
import DashboardContent from './Components/DashboardContent'

function App() {
  return (
    <>
        <div className="min-h-screen w-full bg-white rounded-2xl shadow-2xl px-4 py-2">
          <Layout>
            <DashboardContent />
          </Layout>
        </div>
    </>
  )
}

export default App
