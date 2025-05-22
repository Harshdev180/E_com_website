
import { useContext } from 'react';
import HeroSection from './components/HeroSection'
import { AppContext, useProductContext } from './Context/productContext';

const About = () => {

    const { myName } = useProductContext();

    const data = {
        name: "Thapa Ecommerce",
    };

    return (
        <>
            {myName}
            <HeroSection myData={data} />{" "}
        </>
    );
};

export default About;