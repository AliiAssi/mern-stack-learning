import React, { useCallback, useState } from 'react'
import Age from './Age';
import Salary from './Salary';
import Button from './Button';
function callBack() {
  const [age , setAge] = useState(20)
  const [salary ,setSalary] = useState(2000)
  const AgeUp = useCallback(()=>{
    setAge(age +  1)
  },[age])
  const salaryUp = ()=>{
    setSalary(salary +  1)
  }
  return (
   <>
   <Button text={<Age age = {age} />} role = {AgeUp} />
   <hr />
   <Button text={<Salary salary={salary} /> }  role = {salaryUp} /> 
   </>
  )
}

export default callBack
