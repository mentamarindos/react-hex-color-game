import { useColorContext } from '@/hooks/custom/useColorContext'
import { ChangeEvent } from 'react';
import { tw } from 'twind'

export const SelectDifficulty = () => {
  
  const { dispatch } = useColorContext()
  
  const changeDifficulty = ({target}: any): void => {
    dispatch({ type: 'CHANGE_DIFFICULTY', payload: {difficulty: target.value} })
  }
  
  return (
    <div className={tw`ml-5 mb-2`}>
    <span> Change difficulty </span>
      <select onChange={changeDifficulty}>
        <option value="1">Easy</option>
        <option value="2">Medium</option>
        <option value="3">Hard</option>
      </select>
    </div>
  )
  
}