import { EmptyBoxIcon } from "@/components/vectors";

const PurchaseHistory = () => {
  const orders = [];

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
      <div className="w-full h-full flex flex-col">
        
      </div>
    );
};

export default PurchaseHistory;
