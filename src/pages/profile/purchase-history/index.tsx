import { EmptyBoxIcon } from "@/components/vectors";
import { useToBeImplemented } from "@/hooks";
import OrderCard from "./components/order-card";

const PurchaseHistory = () => {
  const orders = [
    { id: "12345", date: "2024-03-01", total: "1,200,000", status: "Đã giao" },
    { id: "67890", date: "2024-02-25", total: "750,000", status: "Chờ xác nhận" },
  ];

  const toBeImplemented = useToBeImplemented();

  if (!orders.length) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center space-y-8">
          <EmptyBoxIcon />
          <div className="text-2xs text-inactive text-center">
            Không có lịch sử mua hàng trong giỏ hàng
          </div>
        </div>
      );
    }
    return (
      <div className="p-4 px-4 space-y-4">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} onClick={toBeImplemented} />
        ))}
      </div>
    );
};

export default PurchaseHistory;
