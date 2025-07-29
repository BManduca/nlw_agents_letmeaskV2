import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ModeToggle } from '@/components/mode-toggle'
import { ThemeProvider } from '@/components/theme-provider'
import { CreateRoom } from './pages/create-room'
import { RecordRoomAudio } from './pages/record-room-audio'
import { Room } from './pages/room'

const queryClient = new QueryClient()

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* absolute top-2 right-6 z-50 */}
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="absolute top-2 right-6 z-50">
            <ModeToggle />
          </div>
          <div className="relative min-h-screen">
            <Routes>
              {/* rota principal index */}
              <Route element={<CreateRoom />} index />
              <Route element={<Room />} path="/room/:roomId" />
              <Route element={<RecordRoomAudio />} path="/room/:roomId/audio" />
            </Routes>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
