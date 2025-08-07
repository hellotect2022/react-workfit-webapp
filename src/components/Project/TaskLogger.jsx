// TaskLogger.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const TaskLogger = () => {
  const [tasks, setTasks] = useState([
    { project: '', task: '', time: '' },
  ]);
  const [note, setNote] = useState('');

  const addTask = () => {
    setTasks([...tasks, { project: '', task: '', time: '' }]);
  };

  const updateTask = (index, key, value) => {
    const updated = [...tasks];
    updated[index][key] = value;
    setTasks(updated);
  };

  const saveAll = () => {
    console.log('저장됨:', { tasks, note });
    alert('저장 완료!');
  };

  return (
    <Container>
      {tasks.map((item, index) => (
        <TaskRow key={index}>
          <Select value={item.project} onChange={(e) => updateTask(index, 'project', e.target.value)}>
            <option value="">프로젝트</option>
            <option value="projectA">Project A</option>
            <option value="projectB">Project B</option>
          </Select>

          <Select value={item.task} onChange={(e) => updateTask(index, 'task', e.target.value)}>
            <option value="">TASK</option>
            <option value="task1">Task 1</option>
            <option value="task2">Task 2</option>
          </Select>

          <TimeInput
            type="number"
            placeholder="시간"
            value={item.time}
            onChange={(e) => updateTask(index, 'time', e.target.value)}
          />

          <AddButton onClick={addTask}>+</AddButton>
        </TaskRow>
      ))}

      <NoteArea
        placeholder="구체적인 내용 작성하는 텍스트 AREA"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <SaveButton onClick={saveAll}>저장</SaveButton>
    </Container>
  );
};

export default TaskLogger;
