import { useToBeImplemented } from "@/hooks";

const OrderCard = ({ order, onClick }) => {
  // Chỉ hiển thị tối đa 3 sản phẩm, nếu nhiều hơn thì ẩn bớt
  const displayedItems = order.items.slice(0, 2);
  const hasMoreItems = order.items.length > 2; // Kiểm tra có nhiều hơn 3 sản phẩm không

  return (
    <div
      className="p-4 mb-4 shadow-md rounded-lg bg-white border border-gray-200 cursor-pointer transition hover:shadow-lg"
      onClick={onClick}
    >
      <h3 className="font-semibold text-lg text-gray-800">Đơn hàng #{order.id}</h3>

      <div className="flex justify-between items-center mt-1">
        <p className="text-sm text-gray-500 flex items-center gap-1">
          Ngày đặt: {order.date}
        </p>
        <p className="text-sm font-medium text-blue-600">{order.status}</p>
      </div>

      <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
        Tổng tiền: <span className="font-semibold text-black">{order.total}đ</span>
      </p>

      <div className="mt-3 border-t pt-3">
        {displayedItems.map((item) => (
          <div key={item.id} className="text-sm text-gray-700 flex justify-between">
            <span>{item.quantity}x {item.name}</span>
            <span className="font-medium">{item.price}đ</span>
          </div>
        ))}

        {/* Nếu có hơn 3 sản phẩm, hiển thị "Xem thêm" */}
        {hasMoreItems && (
          <button
            className="mt-2 text-blue-500 text-sm font-medium hover:underline"
          >
            Xem thêm...
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
