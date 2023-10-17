import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Chip } from "@nextui-org/chip";
import FlagIcon from "./_icons/Flag-Icon";
import TrashIcon from "./_icons/Trash-Icon";
import EditIcon from "./_icons/Edit-Icon";
import { Button } from "@nextui-org/react";

const TaskCard = ({ task }) => {
  return (
    <Card className="w-[350px]">
      <CardHeader className="flex justify-between">
        <h1 className="text-xl font-bold px-2">{task.name}</h1>
        <div className="flex gap-4">
          <Button isIconOnly variant="flat" color="primary">
            <EditIcon />
          </Button>
          <Button isIconOnly variant="flat" color="danger">
            <TrashIcon />
          </Button>
        </div>
      </CardHeader>

      <Divider />

      <CardBody>
        <div className="flex flex-col gap-2 items-start">
          <h2 className="font-semibold text-lg">Description:</h2>
          <span>{task.description}</span>
          <h2 className="font-semibold text-lg">Status:</h2>
          <Chip variant="dot">{task.status}</Chip>
          <h2 className="font-semibold text-lg">Deadline:</h2>
          <Chip variant="flat" color={"success"}>
            {task.deadline.toDateString()}
          </Chip>
        </div>
      </CardBody>

      <Divider />

      <CardFooter className="flex flex-col gap-4 items-start">
        <h2 className="font-semibold text-lg pl-2">Labels:</h2>
        <div className="flex gap-3">
          {task.labels.map((label) => (
            <Chip variant="flat" color={"primary"} key={label.name}>
              {label.name}
            </Chip>
          ))}
        </div>
        <div className="flex gap-4">
          <h2 className="font-semibold text-lg pl-2">Priority:</h2>
          <div>
            <Chip
              classNames={{ content: "font-bold" }}
              variant="flat"
              endContent={<FlagIcon />}
            >
              {task.priority}
            </Chip>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
