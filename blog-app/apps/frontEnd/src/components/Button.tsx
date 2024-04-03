const Button = ({ typeofButton, onClick }: { typeofButton: string, onClick:any }) => {
    return (<div className="flex justify-center">
        <button type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 
        focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-s px-5 py-2.5 mb-2 dark:bg-gray-800
         dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={onClick}>{typeofButton}</button>
    </div>)
}
export default Button