import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import jumboData from '../fixtures/jumbo.json';
import Jumbotron from '../components/Jumbotron';
import OptForm from '../components/OptForm';
import Accordion from '../components/Accordion';
const Home = () => {
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
