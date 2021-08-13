// short cut rafce
import React, { useState, useEffect } from 'react';
import Navbar from './components/Basic/navbar';
import Card from './components/Basic/cards';
import Footer from './components/Basic/footer';
import Lodding from './components/Basic/lodding';
import './style.css';
var UsersData;
const App = () => {
  const [loding, setloding] = useState(false);
  const [isClicked, setIsClicked_Btn] = useState(0);
  const [data, setData] = useState(false);
  const getUserAPI = async () => {
    try {
      setloding(true);
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      UsersData = data.data;
      setData(UsersData);
      
      setTimeout(() => {
        setloding(false);
        
      }, 2000);
      setData(response.data.data);
      
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    isClicked && getUserAPI();
  }, [isClicked])
  return (
    <>
      <Navbar onsetIsClicked_Btn={setIsClicked_Btn} />
      <div className="container-fluid pt-4 pb-4">
        <div className="row">
          {/* { console.log("hiiiiii"), console.log(data)}  */}

          {
            loding ? <Lodding /> :  data && data.map((val) => {
              return <Card first_name={val.first_name} last_name={val.last_name} email={val.email} avatar={val.avatar} />

            })
          };
          

        </div>
      </div>
      <Footer />
    </>
  );
};
export default App;