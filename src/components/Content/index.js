function Content(props){
    // console.log(props);
    return (
        <>
            <div className={"box " + (props.active? "box--active" : "")}>
                {props.text} - Số lượng: {props.so ? props.so : ""} 
            </div>
        </>
    )
}
export default Content;