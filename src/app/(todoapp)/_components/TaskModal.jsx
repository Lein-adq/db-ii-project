import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";
import { Input } from "@nextui-org/input";
import { priorities } from "../_data-to-read/priorities";

const TaskModal = ({ isOpen, onOpenChange }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Create a new Task
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-2">
                <Input label="Task Name" placeholder="Enter your Task Name" />
                <Input
                  label="Task Description"
                  placeholder="Enter your Task Description"
                />
                <Select
                  items={priorities}
                  label="Priority"
                  placeholder="Select your task's priority"
                >
                  {(priority) => (
                    <SelectItem key={priority.value}>
                      {priority.label}
                    </SelectItem>
                  )}
                </Select>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default TaskModal;
