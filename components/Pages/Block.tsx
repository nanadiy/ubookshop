

export const Block = props => {


    if (!props.state.cart){
        props.state.cart = []
      }

    return <c-c style={{
        width: 150, flex: 1, minWidth: 140,
        position: "relative", backgroundColor:"white", 
        borderRadius:7,
        margin:"5px 5px",
        boxShadow:"-2px 0px 37px 11px rgba(199,199,199,1)"
    }}>

        <img
            className={global.styles.hover}
            src={props.book.imageLink}
            style={{ width:"100%", height: 200, objectFit: "fill", minWidth: 140,
                borderTopLeftRadius:7,
                borderTopRightRadius:7,
             }}
            onClick={() => {
                props.state.form = "bookspecs"
                props.state.book = props.book
                props.refresh()
               
            }} />
            <f-cc style={{padding:"5px", width:"100%", height:40, direction:"ltr"}}>
                <f-12>
                    {props.book.title}
                </f-12>
            </f-cc>
            <hr style={{width:"85%", opacity:0.7}} />
            <f-csb style={{width:"100%", padding:"5px 0"}}>
                
                
                <img src={props.state.cart.includes(props.book.title)?
                "https://cdn.ituring.ir/qepal/ok.svg":
                "https://cdn.ituring.ir/qepal/cart.svg"} 
                style={{width:25, height:25, objectFit:"contain",
                margin:"0 10px"
                }} />



                <c-x style={{direction:"ltr", margin:"0 10px"}}>
                    <f-12><del>{props.book.price} تومان</del></f-12>
                    <f-13>{props.book.price * 0.8} تومان</f-13>
                </c-x>
            </f-csb>



    </c-c>
}

