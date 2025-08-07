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

// styled components
const Container = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 2rem auto;
  border: 1px solid #a0b2cc;
  padding: 1rem;
  border-radius: 6px;
  box-sizing: border-box;
`;

const TaskRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 0.5rem;
`;

const Select = styled.select`
  padding: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 90px;
  font-size: 0.85rem;
`;

const TimeInput = styled.input`
  padding: 0.4rem;
  width: 60px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AddButton = styled.button`
  background-color: #4e8cff;
  color: white;
  font-weight: bold;
  border: none;
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
`;

const NoteArea = styled.textarea`
  width: 100%;
  height: 120px;
  margin: 1rem 0;
  padding: 0.6rem;
  font-size: 0.9rem;
  border: 1px solid #a0b2cc;
  border-radius: 4px;
  resize: none;
`;

const SaveButton = styled.button`
  width: 100%;
  background-color: #4e8cff;
  color: white;
  font-size: 1rem;
  padding: 0.7rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
`;
