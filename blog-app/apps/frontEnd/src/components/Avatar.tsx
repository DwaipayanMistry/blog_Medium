const Avatar = ({ name, sizes }: { name: string, sizes: string }) => {
    return (
        <div className=" flex justify-start">
            <div id="Avatar" className={`relative inline-flex items-center justify-center ${sizes}  overflow-hidden
             rounded-full bg-slate-300`}>
                <span className="  font-medium text-gray-600 ">
                    {name[0]}
                </span>
            </div>
        </div>
    )
}
export default Avatar