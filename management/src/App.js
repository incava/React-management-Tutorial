import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { render } from '@testing-library/react';
import { Component } from 'react';

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name': '최길동',
    'birthday' : '961222',
    'gender' : '남자',
    'job' : '대학생'
    },
    {
      'id' : 3,
      'image' : 'https://placeimg.com/64/64/3',
      'name': '이길동',
      'birthday' : '961222',
      'gender' : '남자',
      'job' : '대학생'
      }
]

class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => {return(<Customer key={c.id}id={c.id}image={c.image}name={c.name}birthday={c.birthday}gender={c.gender}job={c.job}/>);})} 
        </div>
      );}}
export default App;
