export interface GetRoomQuestionsItemResponse {
    id: string;
    question: string;
    answer: string | null;
    createdAt: string;
    isGeneratingAnswer?: boolean;
}
