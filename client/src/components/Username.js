import React from "react";
import {Link} from "react-router-dom"
import avtar from "../assets/profil.jpg"
import styles from "../styles/Username.module.css"
import {Toster} from "react-hot-toast";
import {useFormik} from "formik"
export default function Username(){
  const formik = useFormik({
    initialValues:{
      Username:""
    },
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit:async values =>{
      console.log(values);
    }
  })
  return(
    <div className="container mx-auto">
  <div className="flex justify-center items-center h-screen">
    <div className={styles.glass}>
      <div className="title flex flex-col items-center">
        <h4 className="text-5xl font-bold">Akash Sahu</h4>
        <span className="py-4 text-xl w-2/3 text-center text-gray-500">
          Explore More by connecting with ME
        </span>
      </div>
      <form className="py-1" onSubmit={formik.handleSubmit}>
        <div className="profile flex justify-center py-4">
          <img className={styles.profile_img} src={avtar} alt="avtar" />
        </div>
        <div className="textbox flex flex-col items-center gap-6">
          <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder="Username"/>
          <button className={styles.btn} type="submit">Let's Go</button>
        </div>
        <div className="text-center py-4">
          <span className="text-gray-500"> Not a Member : <Link className="text-red-500" to="/register">Register Now</Link></span>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}