import { PlusCircle } from 'lucide-react';
import React, { useState } from 'react';
import { Input } from '../components/common/Input';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { addTask } from '../store/taskSlice';
import { Button } from './common/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './common/Card';
import { Textarea } from './common/Textarea';

const AddTaskForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(addTask({ name, description, status: 'incomplete' }));
      setName('');
      setDescription('');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Task</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              placeholder="Task name" 
              required
            />
          </div>
          <div>
            <Textarea
              id="description"
              value={description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
              placeholder="Description (optional)"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            <PlusCircle className="h-4 w-4 mx-auto" />
            Add Task
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default AddTaskForm;

