
import styles from './../../styles/feedbacks.module.css';
import { useRef, useState } from 'react';

export default function Feedback(){
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const ageRef = useRef();
  const genderRef = useRef();
  const bloodGroupRef = useRef();
  const genotypeRef = useRef();
  const maritalStatusRef = useRef();


  // submit form
  const [errorMSg,setErrorMsg]=useState()
  function submitHandler(){
    // get the value
    const firstNameValue = firstNameRef.current.value;
    const lastNameValue = lastNameRef.current.value;
    const ageValue = ageRef.current.value;
    const genderValue = genderRef.current.value;
    const bloodGroupValue = bloodGroupRef.current.value;
    const genotypeValue = genotypeRef.current.value;
    const maritalStatusValue = maritalStatusRef.current.value;

    const userData = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      age: ageValue,
      gender: genderValue,
      bloodGroup: bloodGroupValue,
      genotype: genotypeValue,
      maritalStatus: maritalStatusValue
    };

    // validation
    if (firstNameValue === undefined) {
      setErrorMsg('pless fill in firstName')
    }
    // sending request to an Api
    async function sendApi(){
      const response=await fetch('/api/feedbacks',{
        method:"POST",
        body:JSON.stringify(userData),
        header:{
          "content-type":"application/json"
        }
      })
      // get the response from the request
      const data=await response.json()
      console.log(data);
    }
    // call the sendApi function
    sendApi()
  }


    return (
      <div className="wrapper">
        <form onSubmit={submitHandler}>
          <div className={styles.formControl}>
            <label>Firstname</label>
            <input className={styles.input} ref={firstNameRef} />
          </div>

          <div className={styles.formControl}>
            <label>Lastname</label>
            <input className={styles.input} ref={lastNameRef} />
          </div>

          <div className={styles.formControl}>
            <label>Age</label>
            <input className={styles.input} ref={ageRef} />
          </div>

          <div className={styles.formControl}>
            <label>gender</label>
            <input className={styles.input} ref={genderRef} />
          </div>

          <div className={styles.formControl}>
            <label>Blood Group</label>
            <input className={styles.input} ref={bloodGroupRef} />
          </div>

          <div className={styles.formControl}>
            <label>Genotype</label>
            <input className={styles.input} ref={genotypeRef} />
          </div>

          <div className={styles.formControl}>
            <label>Marital Status</label>
            <input className={styles.input} ref={maritalStatusRef} />
          </div>

          <button>Register</button>
        </form>
      </div>
    );
}