const Cell = ({ id,cell,go,setGo ,cells,setCells}) =>{
    const handleClick = (e) => {

        console.log(e.target)
        const taken = e.target.firstChild.classList.contains("circle") || e.target.firstChild.classList.contains("cross")

        if (!taken){
            if (go === "circle"){
                e.target.firstChild.classList.add("circle")
                handleCellChange("circe")
                setGo("cross")
            }
            if (go === "cross"){
                e.target.firstChild.classList.add("cross")
                handleCellChange("cross")
                setGo("circle")

            }
        }
    }

    const handleCellChange = (className) =>{
        const nextCells = cells.map((cell,index) => {
            if (index === id){
                return className
            }else{
                return cell
            }
        })
    setCells(nextCells)

    }

    return(
        <div className="square" id={id} onClick={handleClick}>
                    <div>
                    </div>
        </div>
    )
}

export default Cell;