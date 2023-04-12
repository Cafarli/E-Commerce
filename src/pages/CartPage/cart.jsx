import "./CartPage.css";
import { useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { decreaseQtyAction, increaseQtyAction, removeCartAction } from "../../redux/action/actions";

export default function Cart(props) {
  useEffect(() => {
    
    // props.handleTotal(props.Price)
    console.log("cart",props);
  });
  
  const dispatch = useDispatch();
  // const [qty, setQty] = useState(1);

  // function counterMinus() {
  //   if (qty === 1) {
  //     setQty(1);
  //     props.handleTotal(props.Price);
  //   } else {
  //     setQty(qty - 1);
  //     props.handleTotal(props.Price * (qty - 1));
  //   }
  // }
  // function counterPlus() {
  //   setQty(qty + 1);
  //   props.handleTotal(props.Price * (qty + 1));
  // }

  return (
    <tr key={props.ind}>
      <td className="proImgCol">
        <div className="proImg">
          <img alt="product" src={props.Photo}></img>
        </div>
      </td>
      <td className="proName">{props.Title}</td>
      <td className="proPrice">{props.Price}</td>
      <td className="prQty">
        <div className="qtyBox">
          <p className="qb-minus" onClick={()=>dispatch(decreaseQtyAction(props.Id))}>
            -
          </p>
          <p className="qb-value" >
            {props.Qty}
          </p>
          <p className="qb-plus" onClick={()=>dispatch(increaseQtyAction(props.Id))}>
            +
          </p>
        </div>
      </td>
      <td className="proSub"> {props.Price * props.Qty}</td>
      <td className="proDel">
        <TiDeleteOutline
          onClick={() => dispatch(removeCartAction(props.Id))}
          className="proDelIcon"
        />
      </td>
    </tr>
  );
}
