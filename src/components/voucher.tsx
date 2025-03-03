import React from 'react';

export default function VoucherPage() {
  const vouchers = [
    { code: 'ABC123', isValid: true, description: "10% giảm giá cho đơn hàng tiếp theo" },
    { code: 'XYZ456', isValid: false, description: "Mã không hợp lệ" },
    { code: 'DEF789', isValid: true, description: "Giảm 20k cho đơn hàng từ 200k" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Danh sách Voucher</h1>
      <div className="grid gap-4">
        {vouchers.map((voucher) => (
          <div
            key={voucher.code}
            className={`p-4 rounded-lg shadow-md ${
              voucher.isValid ? 'bg-green-100' : 'bg-red-100'
            }`}
          >
            <h2 className="text-lg font-bold mb-2">{voucher.code}</h2>
            <p className="text-sm mb-2">{voucher.description}</p>
            {/* <p className={`text-sm ${voucher.isValid ? 'text-green-700' : 'text-red-700'}`}>
              Trạng thái: {voucher.isValid ? 'Hợp lệ' : 'Không hợp lệ'}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
