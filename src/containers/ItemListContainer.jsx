import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainerComponent = ({greeting}) => {
    return(
    <>
        <a href="#" className="btn btn-danger btn-sm">{greeting}</a>
      </>
    );
}


export default ItemListContainerComponent;