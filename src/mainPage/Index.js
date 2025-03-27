import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';


export default function Main({alldata}){

    return(
        <main id="sectionWrap">
            <Section1 slideData={alldata["slide"]}/>
            <Section2 slideData={alldata["slide"]}/>
            <Section3/>
            <Section4 tabData={alldata["mainTabMenu"]}/>
            <Section5/>
            <Section6 reviewsData={alldata["review"]}/>
            <Section7/>
        </main>
    );
}