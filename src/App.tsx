import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/create-room";
import { RoomDetails } from "./pages/room-details";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<CreateRoom />} />
                    <Route path="/room/:roomId" element={<RoomDetails />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
