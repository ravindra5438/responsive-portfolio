import "./ProjectShowcase.css"

const ProjectShowcase = () => {
    return(
        <div className="projectShowcase">
            <div className="projectShowcase-container">
            <div className="projectShowcase-imageContainer">
                <div className="projectShowcase-ButtonContainer">
                    <a href='#download' className='btn secondary'>Code</a>
                    <a href='#download' className='btn secondary'>Live Project</a>
                </div>
                <img height={'100%'} src="https://th.bing.com/th/id/R.60185c218a98a1baf6394744b5145408?rik=dImNIGgjezasiQ&riu=http%3a%2f%2fps3media.ign.com%2fps3%2fimage%2farticle%2f818%2f818418%2funreal-tournament-iii-20070906034512537.jpg&ehk=ptqUCnoLk5UkTUTSc9VBjEMwgxz7XEIV0nH4UlWV6Cs%3d&risl=&pid=ImgRaw&r=0" alt="project img"/>
            </div>
            <div className="projectShowcase-content">
                <div className="projectShowcase-content" style={{width:'100%'}}>
                    <h4>About Project</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, magni assumenda excepturi recusandae delectus dolorem nisi quasi vitae illum veniam.</p>
                </div>
                <div className="projectShowcase-content" style={{width:'100%'}}>
                <h4>Tech Used</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia blanditiis labore. Quis, eius impedit.</p>
                </div>
                <div className="projectShowcase-content" style={{width:'100%'}}>
                <h4>What i learned</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, magni assumenda excepturi recusandae delectus dolorem nisi quasi vitae illum veniam.</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectShowcase;