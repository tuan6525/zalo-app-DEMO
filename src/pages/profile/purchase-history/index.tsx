import { EmptyBoxIcon } from "@/components/vectors";
import { useToBeImplemented } from "@/hooks";
import OrderCard from "./components/order-card";

const PurchaseHistory = () => {
  const orders = [
    {
      id: "12345",
      date: "2024-03-01",
      total: "1,200,000",
      status: "Đã giao",
      items: [
        {
          id: "p1",
          name: "Áo thun nam",
          price: 250000,
          quantity: 2,
        },
        {
          id: "p2",
          name: "Quần jeans nữ",
          price: 700000,
          quantity: 1,
        },
        {
          id: "p3",
          name: "Quần jeans nữ",
          price: 700000,
          quantity: 1,
        },
        {
          id: "p4",
          name: "Quần jeans nữ",
          price: 700000,
          quantity: 1,
        },
      ],
    },
    {
      id: "67890",
      date: "2024-02-25",
      total: "750,000",
      status: "Chờ xác nhận",
      items: [
        {
          id: "p3",
          name: "Giày thể thao",
          price: 750000,
          quantity: 1,
        },
      ],
    },
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
