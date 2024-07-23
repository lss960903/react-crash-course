const Item = ({ id, note, date, time, deleteData, submittingStatus }) => {
  submittingStatus.current = true
  
  function deleteItem(){
    deleteData(function(prev){
        return prev.filter(item => item.id !== id)
    })
  }

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button onClick={deleteItem} className="remove">删除</button>
    </div>
  );
};

export default Item;
