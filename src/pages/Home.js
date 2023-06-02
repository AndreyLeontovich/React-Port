
import Project from "../components/project/Project";
import Header from "./../components/header/Header";

import { projectsList } from "../helpers/projectsList";

const Home = () => {
    return (
    <>  
    <Header />
    
    <main className="main_section">
    <section className="section_project">
        <div className="container">
            <h1 className="title-1">Projects</h1>
        

            <div className="section_project_block">
                {projectsList.map(({project}) => {
                    return <Project title={project.title} img={project.img}/>
                })}


                
                
            </div>
        </div>



    </section>
    </main>
    </> 
    );
}


export default Home;