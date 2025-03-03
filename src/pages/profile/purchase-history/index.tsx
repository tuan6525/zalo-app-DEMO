import { EmptyBoxIcon } from "@/components/vectors";
import { useToBeImplemented } from "@/hooks";
import OrderCard from "./components/order-card";
import { useAtomValue } from "jotai";
import { ordersState } from "@/state/state";

const PurchaseHistory = () => {
  const orders = useAtomValue(ordersState);
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
