import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import jumboData from '../fixtures/jumbo.json';
import Jumbotron from '../components/Jumbotron';
import OptForm from '../components/OptForm';
import Accordion from '../components/Accordion';
import { useContext } from "react"
import { FirebaseContext } from '../context/firebase';
const Home = () => {
  const { firebase } = useContext(FirebaseContext)
  console.log(firebase)
  return (
    <main className="min-h-screen bg-black">
      <Navbar optformIncluded={true} featureIncluded={true}/>
      {jumboData.map(item => (
        <Jumbotron key={item.id} {...item} />
        ))}
      <Accordion />
      <OptForm />
      <Footer />
    </main>
  );
};

export default Home;
