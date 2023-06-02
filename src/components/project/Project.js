// import big1 from "./../../img/Proj/01-big.jpg";


const project = ({title, img}) => {
    return (
            <div className="section_project_item">
                <a href="./project-page.html">
                    <img className="img_proj" src={img} alt={title} />
                    <p className="proj_text">{title}</p>
                </a>
            </div>

    );
};

export default project;