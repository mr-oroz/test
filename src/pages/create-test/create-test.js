import React, { useContext, useState } from 'react';
import MyButton from '../../components/my-button/my-button';
import MyInput from '../../components/my-input/my-input';
import s from './create-test.module.css';
import { MyContext } from '../../context/MyContext/MyContext';
import { Radio } from '@mui/material';
import List from '../../components/list/list';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const defaultState = {
  create: '',
  variantA: '',
  variantB: '',
  variantC: '',
  variant: ''
}
const CreateTest = () => {
  const [form, setForm] = useState(defaultState);
  
  const { addToquestion, questions, removeQuestion } = useContext(MyContext);
  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handlerClick = () => {
    addToquestion({ ...form })
    setForm(defaultState)
  }
  return (
    <div className={s.createTest}>
      <div className="container">
        <div className={s.content}>
          <div className={s.left}>
            <ol className={s.questions}>
              <List
                items={questions}
                renderItem={(elem) => {
                  return <li key={elem.id}>
                    {elem.question}
                    <IconButton
                      onClick={() => removeQuestion(elem.id)}
                      sx={{ color: '#d63031' }}
                      aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </li>
                }}
              />
            </ol>
            <MyButton onClick={handlerClick}>Добавить вопрос</MyButton>
          </div>
          <div className={s.right}>
            <MyInput
              value={form.create}
              name="create"
              onChange={handlerChange}
              label={'создать вопрос'} />
            <div className={s.variantList}>
              <div className={s.variantListItem}>
                <Radio
                  checked={form.variant === 'a'}
                  onChange={handlerChange}
                  value='a'
                  name='variant'
                  type="radio" />
                <MyInput
                  value={form.variantA}
                  name="variantA"
                  onChange={handlerChange}
                  label='вариант А' />
              </div>
              <div className={s.variantListItem}>
                <Radio
                  checked={form.variant === 'b'}
                  onChange={handlerChange}
                  value='b'
                  name='variant'
                  type="radio" />
                <MyInput
                  value={form.variantB}
                  name="variantB"
                  onChange={handlerChange}
                  label='вариант Б' />
              </div>
              <div className={s.variantListItem}>
                <Radio
                  checked={form.variant === 'c'}
                  onChange={handlerChange}
                  value='c'
                  name='variant'
                  type="radio" />
                <MyInput
                  value={form.variantC}
                  name="variantC"
                  onChange={handlerChange}
                  label='вариант В' />
              </div>
            </div>
            <MyButton onClick={handlerClick}>Сохранить вопрос</MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTest;