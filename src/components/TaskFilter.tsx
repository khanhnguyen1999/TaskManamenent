import React from 'react';
import { Button } from './common/Button';

interface TaskFilterProps {
  filter: 'all' | 'incomplete' | 'complete';
  setFilter: (filter: 'all' | 'incomplete' | 'complete') => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="flex space-x-2">
      <Button
        onClick={() => setFilter('all')}
        variant={filter === 'all' ? 'default' : 'outline'}
      >
        All
      </Button>
      <Button
        onClick={() => setFilter('incomplete')}
        variant={filter === 'incomplete' ? 'default' : 'outline'}
      >
        Incomplete
      </Button>
      <Button
        onClick={() => setFilter('complete')}
        variant={filter === 'complete' ? 'default' : 'outline'}
      >
        Complete
      </Button>
    </div>
  );
};

export default TaskFilter;
