export default function ImproveSkills(){
    const list = [
        "Learn New Recepies",
        "Experiment With Food",
        "Get Cooking Tips",
        "Write Your Own Recepies",
        "Know Nutrition Facts",
    ]
    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="/images/img_10.jpg" alt="" />  
            </div>
            <div className="col typography">
                <h1 className="title">Improve Your Skills</h1>
                {list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                ))}
                <button className="btn">singup now</button>
            </div>
            
         </div>
    )
}