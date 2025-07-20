import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useCreateQuestion } from "@/http/use-create-question";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createQuestionSchema = z.object({
    question: z
        .string()
        .min(1, "Question is required.")
        .min(10, "Question must have at least more than 10 chars.")
        .max(500, "Question must have less than 500 chars."),
});

type CreateQuestionFormData = z.infer<typeof createQuestionSchema>;

interface QuestionFormProps {
    roomId: string;
}

export function QuestionForm({ roomId }: QuestionFormProps) {
    const { mutateAsync: createQuestion } = useCreateQuestion(roomId);

    const form = useForm<CreateQuestionFormData>({
        resolver: zodResolver(createQuestionSchema),
        defaultValues: {
            question: "",
        },
    });

    const handleCreateQuestion = async (data: CreateQuestionFormData) => {
        await createQuestion(data);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Ask a question</CardTitle>
                <CardDescription>
                    Ask something to be answered by AI.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={form.handleSubmit(handleCreateQuestion)}
                    >
                        <FormField
                            control={form.control}
                            name="question"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Sua Pergunta</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            className="min-h-[100px]"
                                            placeholder="What do you like to know?"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit">Send your question</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
