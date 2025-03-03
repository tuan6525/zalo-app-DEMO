const OrderCard = ({ order, onClick }) => {
  const showMore = order.items.length > 2;
  const visibleItems = showMore ? order.items.slice(0, 2) : order.items;

  return (
    <div
      className="p-4 mb-4 shadow-md rounded-lg bg-white border cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-lg">Tổng tiền: {order.total ? `${order.total.toLocaleString()}đ` : "Đang cập nhật"}</h3>
          <p className="text-sm text-gray-500">Ngày đặt: {order.date}</p>
          <p className="text-sm text-gray-500">
            Đơn hàng #{order.id}
          </p>
        </div>
        <p className="text-sm font-medium text-blue-500">{order.status}</p>
      </div>
      <ul className="mt-2">
        {visibleItems.map((item) => (
          <li key={item.product.id} className="text-sm text-gray-700">
            {item.quantity}x {item.product.name} -{" "}
            {item.product.price ? `${item.product.price.toLocaleString()}đ` : "Chưa có giá"}
          </li>
        ))}
      </ul>
      {showMore && (
        <button
          className="text-blue-500 text-sm mt-2 underline"
          onClick={onClick}
        >
          Xem thêm
        </button>
      )}
    </div>
  );
};

export default OrderCard;
