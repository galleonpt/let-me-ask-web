import { Navigate, useParams } from "react-router-dom";

type RoomParams = {
    roomId: string;
};

export const RoomDetails = () => {
    const { roomId } = useParams<RoomParams>();

    if (!roomId) {
        return <Navigate to="/" replace />;
    }

    return <div>Room details</div>;
};
