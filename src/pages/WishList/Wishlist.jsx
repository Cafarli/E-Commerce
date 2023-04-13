import "./Wishlist.css";
import PagePath from "../../components/PagePath/PagePath";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartAction,
  removeAllWishlistAction,
  removeWishlistAction,
} from "../../redux/action/actions";

export default function Wishlist() {
  const dispatch = useDispatch();
  const favoAdded = useSelector((state) => state["favorities"]);
  console.log(favoAdded);
  return (
    <div className="WishlistPage">
      <PagePath title="Wishlist" curPage="Wishlist" />
      <div className="wishlist">
        <table className="wishTable">
          <thead>
            <tr>
              <th className="wishProduct cpImg">IMAGE</th>
              <th className="wishProduct cpName">PRODUCT NAME</th>
              <th className="wishProduct cpPrice">PRICE</th>
              <th className="wishProduct cpSub">ADD TO CART</th>
              <th className="wishProduct cpAct">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {!!favoAdded.length &&
              favoAdded !== undefined &&
              favoAdded.slice(1).map((f, ind) => {
                
                return (
                  <tr key={ind}>
                    <td className="wlImgCol">
                      <div className="wlImg">
                        <img alt="wlduct" src={f.Photo}></img>
                      </div>
                    </td>
                    <td className="wlName">{f.Title}</td>
                    <td className="wlPrice">{f.Price}</td>
                    <td className="wlAdding">
                      <div className="wl-addCart">
                        <button onClick={()=>dispatch(addCartAction(f.Id, f.Title, f.Price, f.Photo, f.Qty))}>Add to Cart</button>
                      </div>
                    </td>
                    <td className="wlDel">
                      <TiDeleteOutline
                        className="wlDelIcon"
                        onClick={() => dispatch(removeWishlistAction(f.Id))}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="wlButton">
          <button
            className="clearList"
            onClick={() => dispatch(removeAllWishlistAction(0))}
          >
            Clear Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
