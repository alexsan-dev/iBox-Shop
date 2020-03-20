// COMPONENTES
import ProductList from "./ProductList";

// COMPONENTE
const ShopList: React.FC<langPackage.shopPage["shopList"]> = (props: langPackage.shopPage["shopList"]) => {
  return (
    <div id="productList">
      <div id="shopHead">
        <h2>{props.title} <i className="material-icons">bubble_chart</i></h2>
        <p>{props.text}</p>
      </div>

      <ProductList />

      <style jsx>{`
        #productList{
          padding:0 20px;
          margin-bottom:100px;
          margin-top:-10px;
        }
        #shopHead{
          margin-bottom:20px;
        }
      `}</style>
    </div>
  )
}

export default ShopList;