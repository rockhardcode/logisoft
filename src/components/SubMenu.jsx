import { Link } from "react-router-dom"

const SubMenu = () => {
    const submenus = ["All Boards and Committees", "Death Record Search", "Assumen Names(DBA) Search", "Delinquent Tax Search", "County Directory", "Dog License"]
  return (
    <div className="w-full grid grid-cols-3 gap-4 p-8">{submenus.map((item) => {
        return (<Link className="hover:text-[#1181b2] text-black" to="/officials-departments" key={item}>
            <h4>{item}</h4>
           </Link>)
    })}</div>
  )
}

export default SubMenu