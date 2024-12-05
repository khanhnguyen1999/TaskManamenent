import { CheckCircle, Edit, Trash, XCircle } from 'lucide-react';
import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { deleteTask, fetchTasks, updateTask } from '../store/taskSlice';
import { Task } from '../types';
import { Button } from './common/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './common/Card';
import { Input } from './common/Input';
import { Textarea } from './common/Textarea';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleStatusChange = () => {
    dispatch(updateTask({ ...task, status: task.status === 'complete' ? 'incomplete' : 'complete' }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateTask(editedTask));
    setIsEditing(false);
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(task.id));
      await dispatch(fetchTasks()).unwrap();
    }
  };

  if (isEditing) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            <Input
              value={editedTask.name}
              onChange={(e) => setEditedTask({ ...editedTask, name: e.target.value })}
              className="text-lg font-semibold"
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={editedTask.description}
            onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
            className="w-full"
          />
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button onClick={handleSave} variant="default">Save</Button>
          <Button onClick={() => setIsEditing(false)} variant="outline">Cancel</Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className={`${task.status === 'complete' ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}>
            {task.name}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleStatusChange}
          >
            {task.status === 'complete' ? (
              <XCircle className="h-5 w-5 text-green-500" />
            ) : (
              <CheckCircle className="h-5 w-5 text-yellow-500" />
            )}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">{task.description}</p>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button onClick={handleEdit} variant="outline" size="sm">
          <Edit className="h-4 w-4 mx-auto" />
          Edit
        </Button>
        <Button onClick={handleDelete} variant="destructive" size="sm">
          <Trash className="h-4 w-4 mx-auto" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TaskItem;

