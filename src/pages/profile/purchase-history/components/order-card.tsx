const OrderCard = ({ order, onClick }) => {
    return (
      <div
        className="p-4 mb-4 shadow-md rounded-lg bg-white border cursor-pointer transition hover:shadow-lg"
        onClick={onClick} // Sử dụng sự kiện được truyền từ props
      >
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-lg">Đơn hàng #{order.id}</h3>
            <p className="text-sm text-gray-500">Ngày đặt: {order.date}</p>
            <p className="text-sm text-gray-500">Tổng tiền: {order.total}đ</p>
          </div>
          <p className="text-sm font-medium text-blue-500">{order.status}</p>
        </div>
      </div>
    );
  };
  
  export default OrderCard;
  