import { Link } from "react-router-dom";


const Navigation = () =>{
    return (
        <div className="w-72">

        <ul className="flex">
  <li className="flex-1 mr-2">
    <Link to="/" className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" >Home</Link>
  </li>
  <li className="flex-1 mr-2">
    <Link to="/auth" className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4">Sign in</Link>
  </li>
  <li className="text-center flex-1">
    <Link to="/dashboard" className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" >Profile</Link>
  </li>
</ul>
        </div>
    )
}

export default Navigation;