import { useCreateRoom } from "@/http/use-create-room";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const createRoomSchema = z.object({
    name: z
        .string()
        .min(3, { error: "Name needs to have at least 3 characters" }),
    description: z.string(),
});

type CreateRoomFormData = z.infer<typeof createRoomSchema>;

export const CreateRoomForm = () => {
    const { mutateAsync: createRoom } = useCreateRoom();

    const createRoomForm = useForm<CreateRoomFormData>({
        resolver: zodResolver(createRoomSchema),
        defaultValues: {
            name: "",
            description: "",
        },
    });

    const handleCreateRoom = async ({
        name,
        description,
    }: CreateRoomFormData) => {
        await createRoom({
            name,
            description,
        });

        createRoomForm.reset();
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Craete Room</CardTitle>
                <CardDescription>
                    Create a new room and start getting answers from AI.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...createRoomForm}>
                    <form
                        onSubmit={createRoomForm.handleSubmit(handleCreateRoom)}
                        className="flex flex-col gap-4"
                    >
                        <FormField
                            control={createRoomForm.control}
                            name="name"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>Room name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter the room name..."
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />

                        <FormField
                            control={createRoomForm.control}
                            name="description"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />

                        <Button className="w-full" type="submit">
                            Create room
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};
