import React, { useContext } from 'react';
import MyButton from '../../components/my-button';
import MyInput from '../../components/my-input';
import s from './create-test.module.css';
import { MyContext } from '../../context/MyContext/MyContext';

const defaultState = {
  create: '',
  variantA: '',
  variantB: '',
  variantC: ''
}
const CreateTest = () => {
  const [form, setForm] = useState(defaultState);
  const { addToquestion } = useContext(MyContext);

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handlerClick = ( ) => {
    setForm(defaultState)
  }
  return (
    <div className={s.createTest}>
      <div className="container">
        <div className={s.content}>
          <div className={s.left}>
            <ul>
              <li>что такое html?</li>
            </ul>
            <MyButton>Добавить вопрос</MyButton>
          </div>
          <div className={s.right}>
            <MyInput 
              value={form.create}
              name="create"
              onChange={handlerChange} 
              label={'создать вопрос'} />
            <div className={s.variantList}>
              <div className={s.variantListItem}>
                <input name='variant' type="radio" />
                <MyInput
                  value={form.variantA}
                  name="variantA"
                  onChange={handlerChange}
                  label='вариант А' />
              </div>
              <div className={s.variantListItem}>
                <input name='variant' type="radio" />
                <MyInput
                  value={form.variantB}
                  name="variantB"
                  onChange={handlerChange}
                  label='вариант Б' />
              </div>
              <div className={s.variantListItem}>
                <input name='variant' type="radio" />
                <MyInput
                  value={form.variantC}
                  name="variantC"
                  onChange={handlerChange}
                  label='вариант В' />
              </div>
            </div>
            <MyButton>Сохранить вопрос</MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTest;