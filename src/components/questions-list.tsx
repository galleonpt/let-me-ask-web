import { useRoomQuestions } from "@/http/use-room-questions";
import { QuestionItem } from "./question-item";

interface IQuestionListProps {
    roomId: string;
}

export const QuestionsList = ({ roomId }: IQuestionListProps) => {
    const { data } = useRoomQuestions(roomId);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-2xl text-foreground">
                    Questions & Answers
                </h2>
            </div>

            {data?.map((question) => {
                return <QuestionItem key={question.id} question={question} />;
            })}
        </div>
    );
};
