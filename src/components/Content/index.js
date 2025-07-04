function Content(props){
      const {text, so, active} = props;
    // console.log(props);
    return (
        <>
            <div className={"box " + (active? "box--active" : "")}>
                {text} - Số lượng: {so} 
            </div>
        </>
    )
}
export default Content;