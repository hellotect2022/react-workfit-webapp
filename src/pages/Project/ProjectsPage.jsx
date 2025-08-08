import { useEffect,useState } from "react";
import RestApiClient from "../../restApi/RestApiClient";
import Sidebar from "../../components/Frame/Sidebar";
import styled from "styled-components";

const ProjectsPage = () => {

    const [projects, setProjects] = useState([])
    
    useEffect(()=>{
        RestApiClient.getProjectsTree().then(res=>{
            console.log("res",res)
            const a = buildProjectTree(res.data)
            console.log('rr',a)
            setProjects(a)
        })

    },[])

    function buildProjectTree(data, parentId = null) {
        const tree = [];
        const children = data.filter(item => item.parentId === parentId);

        children.forEach(item => {
            const subChildren = buildProjectTree(data, item.id);
            if (subChildren.length > 0) {
                item.children = subChildren;
            }
            tree.push(item);
        });
        return tree;
    }

    const ProjectItem = ({ project, type }) => {
        console.log('children',project,type)
        const conditionalStyle = type === "children"
        ? { borderLeft: "5px solid #ee7791" }
        : { border: "2px solid gray" , margin:"5px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" };
        return (
            <div style={{...conditionalStyle, marginLeft: `${(project.level - 1) * 20}px`}}>
                <h3>{project.name}</h3>
                <p>설명 : {project.description}</p>
                {project.children && project.children.length > 0 && (
                    <div>
                        {project.children.map(child => (
                            <ProjectItem key={child.id} project={child} type="children"/>
                        ))}
                    </div>
                )}
            </div>
        );
    };


    return (
        <>
        <Sidebar/>
        <ProjectContainer>
            <h2>프로젝트 목록</h2>
            <div style={{paddingLeft:"24px", display:"flex"}}>
                {projects.map((project,index)=>{
                    //console.log(project,index)
                    return (
                        <ProjectItem key={project.id} project={project}/>
                    )
                })}
            </div>
        </ProjectContainer>        
        </>
    )
}

export default ProjectsPage;

const ProjectContainer = styled.div`
    display: block;
`